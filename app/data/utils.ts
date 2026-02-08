import { react_beginner } from './react_beginner';
import { tailwind_beginner } from './tailwind_beginner';

export const Decks = [react_beginner, tailwind_beginner];

export const getDeckById = (id: string) => {
  return Decks.find((deck) => deck._id === id);
};
