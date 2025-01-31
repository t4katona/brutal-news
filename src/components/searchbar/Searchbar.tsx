import { Button } from "../button/Button";
import { useFilters } from "../../hooks/useFilters.hooks";
import { useLoader } from "../../hooks/useLoader.hooks";
import { useNewsStore } from "../../hooks/useSearch.hooks";
import { searchFromApi } from "../../api/api";

export const Searchbar = () => {
  const updateKeywordFilter = useFilters((state) => state.updateKeywordFilter);
  const keyword = useFilters((state) => state.filters.keyword);
  const setIsLoading = useLoader((state) => state.setIsLoading);
  const setNews = useNewsStore((state) => state.setNews);
  const filters = useFilters((state) => state.filters);

  async function handleSearch() {
    setIsLoading(true);
    const result = await searchFromApi(filters);
    setNews(result);
    setIsLoading(false);
  }

  return (
    <form className="flex justify-center items-center">
      <input
        type="search"
        placeholder="Search..."
        value={keyword}
        className="w-full min-h-[44px] p-2 border-2 border-r-0 rounded-none border-solid border-border bg-neutral text-sm  focus:border-primary-accent focus:outline-none focus:border-b-5 focus:border-r-5 transition-all duration-100 ease-in-out"
        onChange={(event) => updateKeywordFilter(event?.target.value)}
      />
      <Button variant="search" onClick={handleSearch} type="button" />
    </form>
  );
};
