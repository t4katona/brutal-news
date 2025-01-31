import { useFilters } from "../../../hooks/useFilters.hooks";
import { useNewsStore } from "../../../hooks/useSearch.hooks";
import { NewsContainer } from "../container/NewsContainer";

export const Results = () => {
  const news = useNewsStore((state) => state.news);
  const keyword = useFilters((state) => state.filters.keyword);

  if (news.length) {
    return (
      <div className="w-full p-4 border-r-3 border-solid border-border">
        <header className="mb-4 sm:mb-6">
          <h2 className="font-bold text-xl sm:text-2xl">
            Results for
            <i>
              &apos;{keyword}&apos; ({news.length})
            </i>
          </h2>
        </header>
        <NewsContainer />
      </div>
    );
  }

  return (
    <h2 className="flex justify-center items-center h-full">
      Search for any news
    </h2>
  );
};
