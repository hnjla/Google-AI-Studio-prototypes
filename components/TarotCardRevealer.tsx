
import React from 'react';
import { TarotCard } from '../types';

interface Props {
  card: TarotCard;
  isRevealed: boolean;
  onReveal: () => void;
  isReversed: boolean;
  illustrationUrl?: string | null;
  isGeneratingImage?: boolean;
}

const TarotCardRevealer: React.FC<Props> = ({ card, isRevealed, onReveal, isReversed, illustrationUrl, isGeneratingImage }) => {
  const handleClick = () => {
    onReveal();
  };

  // Suit-based styling using requested palette
  const getSuitStyles = () => {
    switch (card.suit) {
      case 'Wands': return { bg: 'bg-[#FFDFD3]', border: 'border-[#FEC8D8]', text: 'text-[#FEC8D8]' };
      case 'Cups': return { bg: 'bg-[#B2E2F2]', border: 'border-[#89CFF0]', text: 'text-[#89CFF0]' };
      case 'Swords': return { bg: 'bg-slate-100', border: 'border-slate-300', text: 'text-slate-400' };
      case 'Pentacles': return { bg: 'bg-[#FEC8D8]', border: 'border-[#E0BBE4]', text: 'text-[#E0BBE4]' };
      default: return { bg: 'bg-[#E0BBE4]', border: 'border-white', text: 'text-white' };
    }
  };

  const suit = getSuitStyles();

  return (
    <div 
      className="relative w-72 h-[28rem] cursor-pointer perspective-1000 group mx-auto"
      onClick={handleClick}
    >
      <div className={`card-inner relative w-full h-full ${isRevealed ? 'card-flipped' : ''}`}>
        
        {/* Card Back - Pixelated Pattern */}
        {/* Added bg-white to ensure total opacity for backface-visibility */}
        <div className="card-face card-back bg-white flex flex-col items-center justify-center rounded-[1.25rem] border-[6px] border-white shadow-[10px_10px_0px_#E0BBE4] overflow-hidden">
          <div className="absolute inset-0 dreamy-bg opacity-50"></div>
          
          {/* Pixel Cross Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center p-4">
             <div className="w-24 h-24 mb-6 border-4 border-white rounded-xl flex items-center justify-center bg-white/40 shadow-[4px_4px_0px_white] animate-pulse">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L9.5 7.5L4 8L8 12L7 17.5L12 15L17 17.5L16 12L20 8L14.5 7.5L12 2Z" />
                </svg>
             </div>
             <p className="text-3xl text-center text-white font-bold tracking-widest drop-shadow-[2px_2px_0px_#E0BBE4]">HENNIE</p>
             <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mt-2">DECK_OS_v1</p>
          </div>

          <div className="absolute top-8 left-8 text-white/50">✦</div>
          <div className="absolute bottom-8 right-8 text-white/50">✦</div>
        </div>

        {/* Card Front - Retro Game UI Design */}
        <div className="card-face card-front bg-white rounded-[1.25rem] border-[6px] border-[#E0BBE4] shadow-[10px_10px_0px_#FEC8D8] overflow-hidden flex flex-col">
          {/* Apply rotation to the entire content if reversed */}
          <div className={`flex flex-col h-full transition-transform duration-700 ${isReversed ? 'rotate-180' : ''}`}>
            {/* Header - Fixed Height */}
            <div className={`h-12 flex-shrink-0 border-b-4 border-[#E0BBE4] ${suit.bg} flex justify-between items-center px-4`}>
              <span className="text-xs font-bold text-[#957DAD]">{card.rank}</span>
              <span className="text-[10px] tracking-[0.1em] font-bold text-[#957DAD] uppercase">{card.type} arcana</span>
              <span className="text-xs font-bold text-[#957DAD]">{card.rank}</span>
            </div>
            
            {/* Image Area */}
            <div className={`flex-grow min-h-0 relative bg-white flex items-center justify-center p-3`}>
               <div className="relative w-full h-full border-4 border-[#E0BBE4] rounded-lg overflow-hidden bg-[#FFDFD3]/20 flex items-center justify-center">
                  {isGeneratingImage ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 bg-[#E0BBE4] animate-bounce"></div>
                      <span className="text-[10px] uppercase font-bold text-[#E0BBE4]">LOADING...</span>
                    </div>
                  ) : illustrationUrl ? (
                    <img 
                        src={illustrationUrl} 
                        alt={card.name}
                        className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-[#E0BBE4] opacity-20">
                      <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                      </svg>
                    </div>
                  )}
               </div>
            </div>

            {/* Footer */}
            <div className="h-20 flex-shrink-0 bg-white text-center border-t-4 border-[#E0BBE4] flex flex-col items-center justify-center px-2">
              <p className="text-xl md:text-2xl text-[#957DAD] font-bold leading-tight line-clamp-2">{card.name}</p>
              <div className="flex gap-1 justify-center mt-1">
                  <span className="text-[8px] text-[#FEC8D8] font-bold">★ ★ ★ ★ ★</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TarotCardRevealer;
