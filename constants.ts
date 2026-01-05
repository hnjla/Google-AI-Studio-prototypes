
import { TarotCard } from './types';

export const TAROT_DECK: TarotCard[] = [
  // Major Arcana - Detailed Metadata
  { 
    id: 0, name: "The Fool", rank: "0", type: "major", 
    keywords: ["New Beginnings", "Element: Air", "Crystal: Clear Quartz"], 
    meaning: "A fresh start is calling. Embrace the unknown with the curiosity of a child.", 
    imageSeed: "fool",
    questions: ["What new adventure am I afraid to start?", "Where can I be more spontaneous in my life?"]
  },
  { 
    id: 1, name: "The Magician", rank: "1", type: "major", 
    keywords: ["Manifestation", "Mercury", "Crystal: Citrine"], 
    meaning: "You have all the tools you need to create the reality you desire.", 
    imageSeed: "magician",
    questions: ["What resources do I already possess to succeed?", "How can I better focus my will today?"]
  },
  { 
    id: 2, name: "The High Priestess", rank: "2", type: "major", 
    keywords: ["Intuition", "The Moon", "Crystal: Selenite"], 
    meaning: "Listen to your inner voice. The answers you seek are within your dreams.", 
    imageSeed: "priestess",
    questions: ["What is my intuition trying to tell me right now?", "What secrets am I keeping from myself?"]
  },
  { 
    id: 3, name: "The Empress", rank: "3", type: "major", 
    keywords: ["Abundance", "Venus", "Crystal: Rose Quartz"], 
    meaning: "Abundance is flowing toward you. Nurture your creative projects.", 
    imageSeed: "empress",
    questions: ["How can I better nurture my creative self?", "Where do I see abundance in my surroundings?"]
  },
  { 
    id: 4, name: "The Emperor", rank: "4", type: "major", 
    keywords: ["Structure", "Aries", "Crystal: Red Jasper"], 
    meaning: "Foundations are important. Use logic and discipline to lead.", 
    imageSeed: "emperor",
    questions: ["Where do I need more structure in my life?", "How am I exercising my authority?"]
  },
  { 
    id: 5, name: "The Hierophant", rank: "5", type: "major", 
    keywords: ["Tradition", "Taurus", "Crystal: Lapis Lazuli"], 
    meaning: "Seek wisdom from established paths or spiritual teachers today.", 
    imageSeed: "hierophant",
    questions: ["What traditions serve my growth?", "Who can I look to for guidance right now?"]
  },
  { 
    id: 6, name: "The Lovers", rank: "6", type: "major", 
    keywords: ["Partnership", "Gemini", "Crystal: Rhodochrosite"], 
    meaning: "A choice of the heart must be made. Seek alignment in your values.", 
    imageSeed: "lovers",
    questions: ["What values am I prioritizing in my relationships?", "What choice am I currently avoiding?"]
  },
  { 
    id: 7, name: "The Chariot", rank: "7", type: "major", 
    keywords: ["Willpower", "Cancer", "Crystal: Tiger's Eye"], 
    meaning: "Stay focused and you will reach your destination. Charge ahead.", 
    imageSeed: "chariot",
    questions: ["What is my true motivation for this goal?", "How can I maintain control in the chaos?"]
  },
  { 
    id: 8, name: "Strength", rank: "8", type: "major", 
    keywords: ["Inner Courage", "Leo", "Crystal: Carnelian"], 
    meaning: "Tame your inner shadows with gentleness rather than force.", 
    imageSeed: "strength",
    questions: ["How can I be kinder to my own weaknesses?", "Where do I need to show quiet courage?"]
  },
  { 
    id: 9, name: "The Hermit", rank: "9", type: "major", 
    keywords: ["Introspection", "Virgo", "Crystal: Smoky Quartz"], 
    meaning: "Retreat into your own light. Inner guidance is your best companion.", 
    imageSeed: "hermit",
    questions: ["What can I learn from silence?", "Am I hiding from the world or seeking the self?"]
  },
  { 
    id: 10, name: "Wheel of Fortune", rank: "10", type: "major", 
    keywords: ["Destiny", "Jupiter", "Crystal: Green Jade"], 
    meaning: "The wheel is turning. Trust that the cycle of life brings new gifts.", 
    imageSeed: "wheel",
    questions: ["What cycles am I repeating?", "How do I handle change when it's unexpected?"]
  },
  { 
    id: 11, name: "Justice", rank: "11", type: "major", 
    keywords: ["Karma", "Libra", "Crystal: Bloodstone"], 
    meaning: "Karma is at play. Seek balance and act with absolute integrity.", 
    imageSeed: "justice",
    questions: ["Is my current path fair to everyone involved?", "What truth am I afraid to face?"]
  },
  { 
    id: 12, name: "The Hanged Man", rank: "12", type: "major", 
    keywords: ["Surrender", "Neptune", "Crystal: Aquamarine"], 
    meaning: "Let go of control. Seeing things from a new angle changes everything.", 
    imageSeed: "hanging",
    questions: ["What must I sacrifice to move forward?", "How can I change my perspective?"]
  },
  { 
    id: 13, name: "Death", rank: "13", type: "major", 
    keywords: ["Transformation", "Scorpio", "Crystal: Black Obsidian"], 
    meaning: "One door is closing so a better one can open. Embrace the transformation.", 
    imageSeed: "death",
    questions: ["What do I need to let go of to truly live?", "What is currently being reborn within me?"]
  },
  { 
    id: 14, name: "Temperance", rank: "14", type: "major", 
    keywords: ["Balance", "Sagittarius", "Crystal: Amethyst"], 
    meaning: "Blend your resources. Harmony comes through finding the middle path.", 
    imageSeed: "temperance",
    questions: ["Where do I need to practice moderation?", "How can I find peace in the middle ground?"]
  },
  { 
    id: 15, name: "The Devil", rank: "15", type: "major", 
    keywords: ["Attachment", "Capricorn", "Crystal: Black Tourmaline"], 
    meaning: "Break free from the chains of your own making. Awareness is freedom.", 
    imageSeed: "devil",
    questions: ["What habits are holding me back?", "What illusion am I mistaking for reality?"]
  },
  { 
    id: 16, name: "The Tower", rank: "16", type: "major", 
    keywords: ["Revelation", "Mars", "Crystal: Garnet"], 
    meaning: "Old structures are crumbling. It's time to build on a more honest foundation.", 
    imageSeed: "tower",
    questions: ["What false beliefs have recently shattered?", "How can I rebuild with more truth?"]
  },
  { 
    id: 17, name: "The Star", rank: "17", type: "major", 
    keywords: ["Hope", "Aquarius", "Crystal: Moldavite"], 
    meaning: "You are being guided. Follow the light of hope after a difficult period.", 
    imageSeed: "star",
    questions: ["Where is my hope leading me?", "How can I share my light with others?"]
  },
  { 
    id: 18, name: "The Moon", rank: "18", type: "major", 
    keywords: ["Subconscious", "Pisces", "Crystal: Moonstone"], 
    meaning: "Things may not be as they seem. Trust your gut over your eyes.", 
    imageSeed: "moon",
    questions: ["What am I afraid to see in the shadows?", "How do my dreams inform my day?"]
  },
  { 
    id: 19, name: "The Sun", rank: "19", type: "major", 
    keywords: ["Vitality", "The Sun", "Crystal: Sunstone"], 
    meaning: "Radiance and warmth surround you. Success is almost guaranteed.", 
    imageSeed: "sun",
    questions: ["What makes me feel truly alive and joyful?", "How can I radiate more positivity?"]
  },
  { 
    id: 20, name: "Judgement", rank: "20", type: "major", 
    keywords: ["Awakening", "Pluto", "Crystal: Malachite"], 
    meaning: "You are being called to rise. Evaluate your life and make a change.", 
    imageSeed: "judgement",
    questions: ["What is my true calling in this moment?", "How have I grown from past mistakes?"]
  },
  { 
    id: 21, name: "The World", rank: "21", type: "major", 
    keywords: ["Wholeness", "Saturn", "Crystal: Black Onyx"], 
    meaning: "A cycle is complete. You have achieved wholeness in this area.", 
    imageSeed: "world",
    questions: ["What have I successfully accomplished?", "What does 'home' mean to me now?"]
  },
];

const suitsConfig = {
  Wands: { 
    element: "Fire", 
    crystal: "Carnelian", 
    signs: "Aries, Leo, Sag",
    questions: ["What sparks my passion today?", "Where should I take bold action?"]
  },
  Cups: { 
    element: "Water", 
    crystal: "Rose Quartz", 
    signs: "Cancer, Scor, Pisc",
    questions: ["What does my heart truly desire?", "How can I connect deeper with others?"]
  },
  Swords: { 
    element: "Air", 
    crystal: "Amethyst", 
    signs: "Gem, Lib, Aqua",
    questions: ["What situation needs more clarity?", "Is my mind at peace or at war?"]
  },
  Pentacles: { 
    element: "Earth", 
    crystal: "Pyrite", 
    signs: "Taur, Virg, Cap",
    questions: ["What am I manifesting in my work?", "How can I find more physical stability?"]
  }
};

const ranksConfig: Record<string, string> = {
  Ace: "Seed / Potential",
  Two: "Decision / Balance",
  Three: "Growth / Teamwork",
  Four: "Stability / Rest",
  Five: "Conflict / Loss",
  Six: "Harmony / Success",
  Seven: "Strategy / Choice",
  Eight: "Action / Mastery",
  Nine: "Solitude / Peak",
  Ten: "Legacy / Completion",
  Page: "Curiosity / News",
  Knight: "Speed / Quest",
  Queen: "Nurturing / Wisdom",
  King: "Authority / Mastery"
};

let currentId = 22;
(Object.keys(suitsConfig) as (keyof typeof suitsConfig)[]).forEach(suit => {
  const config = suitsConfig[suit];
  Object.keys(ranksConfig).forEach(rank => {
    TAROT_DECK.push({
      id: currentId++,
      name: `${rank} of ${suit}`,
      suit: suit,
      rank: rank,
      type: 'minor',
      keywords: [
        ranksConfig[rank],
        `Element: ${config.element}`,
        `Crystal: ${config.crystal}`
      ],
      meaning: `The ${rank} of ${suit} signals a moment of ${ranksConfig[rank].toLowerCase()} within the realm of ${config.element.toLowerCase()} energy. Focus on ${suit.toLowerCase()} related matters today.`,
      imageSeed: `${rank}-${suit}`.toLowerCase(),
      questions: config.questions
    });
  });
});
