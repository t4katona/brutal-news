import { LanguagesFilter } from "./languages/LanguagesFilter";
import { SortByFilter } from "./sortBy/SortByFilter";
export const FiltersContainer = () => {
  return (
    <div className="my-2 sm:mt-6">
      <LanguagesFilter />
      <SortByFilter />
    </div>
  );
};
