
import { GoogleGenAI } from "@google/genai";

/**
 * Helper to handle retries for API calls to mitigate transient network or model errors.
 */
async function withRetry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T | null> {
  try {
    return await fn();
  } catch (error: any) {
    // If the error is related to quota or transient issues, we retry.
    if (retries > 0) {
      console.warn(`Gemini API call failed, retrying... (${retries} attempts left). Error: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return withRetry(fn, retries - 1, delay * 2);
    }
    console.error("Final Gemini API call failure after retries:", error);
    return null;
  }
}

export const getDailyInsight = async (cardName: string, isReversed: boolean) => {
  if (!process.env.API_KEY) return null;

  const orientation = isReversed ? "REVERSED (shadow/internalized aspect)" : "UPRIGHT (direct/externalized energy)";

  return withRetry(async () => {
    // Initialize inside the function to ensure up-to-date API key context
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The player has drawn the card: ${cardName} (${orientation}). Provide a 2-sentence mystical log.`,
      config: {
        systemInstruction: "You are the Hennie Deck Astral Core, a poetic and mystical retro-game NPC guide. Your tone is whimsical, slightly cryptic, and encouraging. This is for a fictional game; do not provide real-world advice. Keep responses strictly to exactly two short, evocative sentences. Avoid triggering safety filters by staying purely within the realm of game-based mystical fiction.",
        maxOutputTokens: 120,
        temperature: 0.85,
      }
    });

    if (response.text) {
      return response.text.trim();
    }
    throw new Error("Empty response received from Gemini model.");
  });
};

export const generateCardIllustration = async (cardName: string) => {
  if (!process.env.API_KEY) return null;

  return withRetry(async () => {
    // Initialize inside the function for fresh context
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A PURELY VISUAL cute 16-bit pixel art illustration for the tarot card "${cardName}". 
            
            STYLE GUIDELINES:
            - Classic SNES platformer sprite aesthetic.
            - Chunky pixels, bold outlines, soft pastel palette (purple, peach, turquoise, baby blue, soft pink).
            - Focus EXCLUSIVELY on the visual symbols, characters, or objects (e.g., if it's the Six of Cups, show 6 pixel-art cups with flowers).
            
            STRICT PROHIBITIONS:
            - ABSOLUTELY NO TEXT. 
            - NO LETTERS, NO NUMBERS, NO ALPHABETICAL CHARACTERS.
            - DO NOT include the name of the card or its rank in the image.
            - NO BANNERS, NO SCROLLS, NO RIBBONS, and NO SIGNAGE that might contain text.
            - The image must be 100% artwork with zero written words.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4"
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data found in the model response.");
  });
};
