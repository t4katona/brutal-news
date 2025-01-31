import { create } from "zustand";
import { Article } from "../interfaces/Article.interfaces";

// ZUSTAND
export const useNewsStore = create((set) => ({
  news: [],
  setNews: (response: Record<string, Article>) => {
    set(() => ({ news: response.articles }));
  },
}));
