import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type GameSlug =
  | "memory-game"
  | "painting-game"
  | "world-search-game"
  | "quiz-game"
  | "puzzle-game";

export const GameSlugEnum = {
  MEMORY: "memory-game",
  PAINTING: "painting-game",
  WORD_SEARCH: "world-search-game",
  QUIZ: "quiz-game",
  PUZZLE: "puzzle-game",
};
