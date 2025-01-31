import { create } from "zustand";

export const useLoader = create((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => {
    set(() => ({ isLoading: value })); // Sets isLoading to the provided value
  },
}));
