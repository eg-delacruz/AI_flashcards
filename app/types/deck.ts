export type StudyMode =
  | 'whole_deck_in_order'
  | 'dont_know_&_familiar'
  | 'any_20_random'
  | 'whole_deck_shuffled'
  | '20_dont_know_&_familiar';

export type CardStats = {
  totalReviews: number;
  lastResp: 'dont_know' | 'familiar' | 'mastered' | undefined;
  masteredCount: number;
  familiarCount: number;
  dontKnowCount: number;
};

export type Card = {
  _id: string;
  deckId: string;
  userId: string;
  front: string;
  back: string;
  language: string;
  stats: CardStats;
  createdAt: string;
  createdBy: string;
};

export type DeckStats = {
  mastered: number;
  familiar: number;
  learning: number;
  totalReviews: number;
  avgScore: number;
};

export type DeckSettings = {
  study_mode: StudyMode;
};

export type Deck = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  language: string;
  cards: Card[];
  tags: string[];
  isPublic: boolean;
  cardCount: number;
  stats: DeckStats;
  settings: DeckSettings;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
};
