
import React, { useState, useEffect } from 'react';
import { TAROT_DECK } from './constants';
import { TarotCard, DailyDraw } from './types';
import { getDailyInsight, generateCardIllustration } from './services/geminiService';
import TarotCardRevealer from './components/TarotCardRevealer';

const App: React.FC = () => {
  const [dailyCard, setDailyCard] = useState<TarotCard | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [illustrationUrl, setIllustrationUrl] = useState<string | null>(null);
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [showDrawView, setShowDrawView] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('daily_tarot_draw');
    const today = new Date().toISOString().split('T')[0];

    if (saved) {
      const parsed: DailyDraw = JSON.parse(saved);
      if (parsed.date === today) {
        const card = TAROT_DECK.find(c => c.id === parsed.cardId);
        if (card) {
          setDailyCard(card);
          setIsRevealed(true);
          setIsReversed(parsed.isReversed);
          setShowDrawView(false);
          fetchAllArtifacts(card.name, parsed.isReversed);
        }
      } else {
        localStorage.removeItem('daily_tarot_draw');
      }
    }
  }, []);

  const fetchAllArtifacts = async (cardName: string, reversed: boolean) => {
    setIsLoadingInsight(true);
    setIsLoadingImage(true);
    
    const insightPromise = getDailyInsight(cardName, reversed);
    const imagePromise = generateCardIllustration(cardName);

    const [insight, image] = await Promise.all([insightPromise, imagePromise]);
    
    setAiInsight(insight);
    setIllustrationUrl(image);
    
    setIsLoadingInsight(false);
    setIsLoadingImage(false);
  };

  const handleCardClick = () => {
    if (dailyCard && isRevealed) {
      setShowDrawView(false);
      return;
    }

    const randomIndex = Math.floor(Math.random() * TAROT_DECK.length);
    const selectedCard = TAROT_DECK[randomIndex];
    const randomizedReversed = Math.random() < 0.3; // 30% chance of reversal for mystery
    
    setDailyCard(selectedCard);
    setIsRevealed(true);
    setIsReversed(randomizedReversed);

    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('daily_tarot_draw', JSON.stringify({
      date: today,
      cardId: selectedCard.id,
      isReversed: randomizedReversed
    }));

    fetchAllArtifacts(selectedCard.name, randomizedReversed);
    
    setTimeout(() => {
        setShowDrawView(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center max-w-6xl mx-auto selection:bg-[#E0BBE4] selection:text-white">
      
      {/* Game Header */}
      <header className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
        <div className="inline-block bg-[#E0BBE4] px-6 py-2 border-4 border-white rounded-xl shadow-[4px_4px_0px_#FEC8D8] mb-6">
            <span className="uppercase tracking-[0.3em] text-xs font-black text-[#665577]">The Hennie Deck v1.0</span>
        </div>
        <h1 className="text-5xl md:text-7xl text-[#957DAD] mb-4 drop-shadow-[4px_4px_0px_#fff]">Daily tarot card</h1>
        <div className="flex items-center justify-center gap-2 text-[#957DAD] font-bold text-sm md:text-lg text-pop">
            <span>✧</span>
            <p>A tarot a day keeps bad spirits at bay</p>
            <span>✧</span>
        </div>
      </header>

      {/* Main Game Screen */}
      <main className="w-full flex flex-col items-center flex-1">
        
        {showDrawView ? (
          <div className="flex flex-col items-center animate-in zoom-in-90 duration-500">
            <TarotCardRevealer 
              card={dailyCard || TAROT_DECK[0]} 
              isRevealed={isRevealed} 
              onReveal={handleCardClick}
              isReversed={isReversed}
              illustrationUrl={illustrationUrl}
              isGeneratingImage={isLoadingImage}
            />
            <div className="mt-10 flex flex-col items-center gap-3">
               <svg 
                  className="w-6 h-6 text-[#957DAD] animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="3"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m-7 7l7-7 7 7" />
               </svg>
               <p className="text-[#957DAD] font-bold tracking-[0.2em] uppercase text-xs animate-pulse text-center text-pop">
                {isRevealed ? "[ CLICK CARD TO VIEW LOGS ]" : "[ TAP TO MANIFEST YOUR FATE ]"}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-stretch animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Left: Card Display */}
            <div className="w-full lg:w-2/5 flex flex-col items-center">
              <TarotCardRevealer 
                card={dailyCard!} 
                isRevealed={true} 
                onReveal={() => {}} 
                isReversed={isReversed}
                illustrationUrl={illustrationUrl}
                isGeneratingImage={isLoadingImage}
              />
              <button 
                onClick={() => setShowDrawView(true)}
                className="group mt-8 bg-[#FEC8D8] hover:bg-[#FFC0CB] text-[#957DAD] font-bold py-3 w-72 border-4 border-white rounded-xl shadow-[6px_6px_0px_#E0BBE4] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_#E0BBE4] flex items-center justify-center gap-3"
              >
                <svg 
                    className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="3"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>BACK TO SELECTION</span>
              </button>
            </div>

            {/* Right: Insight Console */}
            <div className="w-full lg:w-3/5 pixel-glass rounded-[1.5rem] p-8 md:p-12">
                <div className="mb-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-[#957DAD] font-black text-xs uppercase tracking-[0.2em] block opacity-60">IDENTIFIED ENTITY:</span>
                        <h2 className="text-4xl md:text-6xl text-[#957DAD] leading-tight">
                            {dailyCard?.name} {isReversed && <span className="text-[#FFC0CB] italic text-2xl ml-2 opacity-80">(Reversed)</span>}
                        </h2>
                    </div>
                    {/* Tags */}
                    <div className="flex gap-3 flex-wrap">
                        {isReversed && (
                            <span className="bg-[#FEC8D8] text-[#4A3B53] px-4 py-1.5 text-xs uppercase font-bold border-2 border-white rounded-lg shadow-sm tracking-wider">
                                Orientation: Reversed
                            </span>
                        )}
                        {dailyCard?.keywords.map(kw => (
                            <span key={kw} className="bg-[#B2E2F2] text-[#4A3B53] px-4 py-1.5 text-xs uppercase font-bold border-2 border-white rounded-lg shadow-sm tracking-wider">
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>

                {/* THE ESSENCE */}
                <div className="mb-10 bg-white/50 border-l-8 border-[#FEC8D8] p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-xs uppercase font-black text-[#FFC0CB] tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 bg-[#FFC0CB] rounded-sm"></span>
                        THE ESSENCE
                    </h3>
                    <p className="text-xl leading-relaxed text-[#957DAD]">
                        {isReversed ? `Reversed: This card suggests internal reflection or a blocked energy regarding ${dailyCard?.name.toLowerCase()}. ${dailyCard?.meaning}` : dailyCard?.meaning}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* QUESTIONS TO ASK */}
                    <section className="bg-[#B2E2F2]/20 border-2 border-[#B2E2F2] p-6 rounded-xl shadow-sm">
                        <h3 className="text-xs uppercase font-black text-[#89CFF0] tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#89CFF0] rotate-45"></span>
                            QUESTIONS TO ASK
                        </h3>
                        <ul className="space-y-3">
                            {dailyCard?.questions.map((q, idx) => (
                                <li key={idx} className="text-[#957DAD] font-medium flex gap-3 leading-tight text-lg">
                                    <span className="text-[#89CFF0] font-bold">›</span>
                                    {q}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-[#E0BBE4]/10 border-l-8 border-[#89CFF0] p-6 rounded-r-xl">
                        <h3 className="text-xs uppercase font-black text-[#89CFF0] tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[#89CFF0] rounded-sm"></span>
                            ASTRAL LOGS
                        </h3>
                        {isLoadingInsight ? (
                            <div className="flex items-center gap-4 py-2">
                                <div className="w-4 h-4 bg-[#89CFF0] animate-ping rounded-full"></div>
                                <p className="text-xs text-[#89CFF0] font-bold">DOWNLOADING COSMIC DATA...</p>
                            </div>
                        ) : aiInsight ? (
                            <div className="relative">
                                <p className="text-2xl font-medium leading-snug text-[#957DAD] bg-white/40 p-4 border-2 border-dashed border-[#89CFF0] rounded-xl">
                                    "{aiInsight}"
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-[#89CFF0] italic">NO LOGS FOUND. RE-ALIGNING SATELLITES.</p>
                        )}
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t-4 border-dashed border-[#FEC8D8] flex justify-between items-center text-[10px] text-[#FFC0CB] font-bold uppercase tracking-widest">
                    <span>DATE: {new Date().toLocaleDateString().replace(/\//g, '.')}</span>
                    <span>HENNIE_OS v1.2</span>
                </div>
            </div>
          </div>
        )}
      </main>

      {/* Decorative Pixel Stars */}
      <div className="fixed top-10 left-10 text-[#FEC8D8] opacity-50 animate-bounce">✦</div>
      <div className="fixed bottom-10 right-10 text-[#B2E2F2] opacity-50 animate-bounce delay-100">✦</div>
      <div className="fixed top-1/2 right-4 text-[#E0BBE4] opacity-30">✧</div>
      <div className="fixed bottom-1/4 left-4 text-[#89CFF0] opacity-30">✧</div>
    </div>
  );
};

export default App;
