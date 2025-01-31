import { FilterCard } from "../card/FilterCard";
export const SortByFilter = () => {
  return (
    <div>
      <header className="w-full mt-5 mb-2">
        <h4 className="text-sm font-bold">Sort By</h4>
      </header>
      <div className="flex justify-start items-center flex-wrap gap-1">
        <FilterCard sortByFilter="relevancy" />
        <FilterCard sortByFilter="popularity" />
        <FilterCard sortByFilter="publishedAt" />
      </div>
    </div>
  );
};
