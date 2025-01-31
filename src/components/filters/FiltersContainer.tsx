import { LanguagesFilter } from "./languages/LanguagesFilter";
import { SortByFilter } from "./sortBy/SortByFilter";
export const FiltersContainer = () => {
  return (
    <div className="mt-6">
      <LanguagesFilter />
      <SortByFilter />
    </div>
  );
};
