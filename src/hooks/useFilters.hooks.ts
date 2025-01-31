import { create } from "zustand";

// maybe props: create<FilterProps>
export const useFilters = create((set) => ({
  filters: {
    keyword: "",
    language: "",
    sortBy: "",
  },
  updateKeywordFilter: (filter: string) => {
    set((state) => ({ filters: { ...state.keyword, keyword: filter } }));
  },
  updateLanguageFilter: (filter: string) => {
    set((state) => ({ filters: { ...state.filters, language: filter } }));
  },
  updateSortByFilter: (filter: string) => {
    set((state) => ({ filters: { ...state.filters, sortBy: filter } }));
  },
}));
