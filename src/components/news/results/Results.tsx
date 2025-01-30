import { NewsContainer } from "../container/NewsContainer";
export const Results = () => {
  return (
    <div className="w-full p-4 border-r-2 border-solid border-border">
      <header className="mb-4 sm:mb-6">
        <h2 className="font-bold text-xl sm:text-2xl">
          Results for <i>&apos;Tesla&apos;</i>
        </h2>
      </header>
      <NewsContainer />
    </div>
  );
};
