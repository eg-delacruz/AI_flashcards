import { react_beginner } from './react_beginner';
import { tailwind_beginner } from './tailwind_beginner';

export const decks = [react_beginner, tailwind_beginner];

export const getDeckById = (id: string) => {
  return decks.find((deck) => deck._id === id);
};
