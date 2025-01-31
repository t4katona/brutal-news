import { NewsCard } from "../card/NewsCard";
import { useNewsStore } from "../../../hooks/useSearch.hooks";
import { useLoader } from "../../../hooks/useLoader.hooks";
import { Loading } from "../../loading/Loading";
import { Article } from "../../../interfaces/Article.interfaces";

export const NewsContainer = () => {
  const news = useNewsStore((state) => state.news);
  const isLoading = useLoader((state) => state.isLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-flow-row grid-rows-6 gap-4 lg:grid-cols-2 lg:auto-rows-min lg:grid-flow-dense 2xl:lg:grid-cols-3 ">
      {news &&
        news.map((article, index: number) => (
          <NewsCard
            key={index}
            sourceName={article.source.name}
            imgSrc={article.urlToImage}
            author={article.author}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
          />
        ))}
    </div>
  );
};
