import { react_beginner } from './react_beginner';
import { tailwind_beginner } from './tailwind_beginner';
import { javascript_array_methods } from './javascript_array_methods';
import { javascript_asynchrony } from './javascript_asynchrony';
import { react_intermediate } from './react_intermediate';

export const Decks = [
  react_beginner,
  tailwind_beginner,
  javascript_array_methods,
  javascript_asynchrony,
  react_intermediate,
];

export const getDeckById = (id: string) => {
  return Decks.find((deck) => deck._id === id);
};
