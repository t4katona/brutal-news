import { FilterCardProps } from "../../../interfaces/FilterCardProps.interfaces";
import { useFilters } from "../../../hooks/useFilters.hooks";

export const FilterCard: React.FC<FilterCardProps> = ({
  languageFilter,
  sortByFilter,
}) => {
  const updateLanguageFilter = useFilters(
    (state) => state.updateLanguageFilter
  );
  const updateSortByFilter = useFilters((state) => state.updateSortByFilter);
  const filters = useFilters((state) => state.filters);

  const isSelected =
    (languageFilter && filters.language === languageFilter) ||
    (sortByFilter && filters.sortBy === sortByFilter);

  const displayText = languageFilter || sortByFilter || "Unknown";

  const handleFilterSelection = () => {
    if (languageFilter) updateLanguageFilter(languageFilter);
    if (sortByFilter) updateSortByFilter(sortByFilter);
  };

  return (
    <div
      className={`w-auto bg-neutral border-2 border-black p-1 text-sm hover:cursor-pointer cursor-pointer hover:border-b-3 hover:border-r-3 transition-all duration-100 ease-in-out ${
        isSelected ? "bg-primary-accent text-white" : "bg-neutral"
      }`}
      onClick={handleFilterSelection}
    >
      <p>{displayText}</p>
    </div>
  );
};
