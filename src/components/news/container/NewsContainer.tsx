import { NewsCard } from "../card/NewsCard";
export const NewsContainer = () => {
  return (
    <div className="grid grid-flow-row grid-rows-6 gap-4 lg:grid-flow-col lg:grid-cols-2">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};
