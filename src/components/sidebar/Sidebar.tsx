import { Searchbar } from "../searchbar/Searchbar";
import { FiltersContainer } from "../filters/FiltersContainer";
export const Sidebar = () => {
  return (
    <aside className="w-full flex justify-center items-center flex-col gap-y-4 border-b-2 border-solid border-border p-4 sm:px-2 sm:border-b-0 sm:border-x-3 sm:h-full sm:justify-start sm:items-start">
      <header>
        <h1 className="text-3xl font-display text-text sm:block sm:whitespace-pre-line">
          Burtal{"\n"} News
        </h1>
      </header>
      <div className="w-full">
        <Searchbar />
      </div>
      <div>
        <FiltersContainer />
      </div>
    </aside>
  );
};
