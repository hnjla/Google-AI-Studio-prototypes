
export type TarotCard = {
  id: number;
  name: string;
  suit?: 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
  rank: string;
  type: 'major' | 'minor';
  keywords: string[];
  meaning: string;
  imageSeed: string;
  questions: string[];
};

export type DailyDraw = {
  date: string; // YYYY-MM-DD
  cardId: number;
  isReversed: boolean;
};
