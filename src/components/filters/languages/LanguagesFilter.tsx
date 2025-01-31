import { FilterCard } from "../card/FilterCard";
export const LanguagesFilter = () => {
  return (
    <div>
      <header className="w-full mb-2">
        <h4 className="text-sm font-bold">Languages</h4>
      </header>
      <div className="flex justify-start items-center flex-wrap gap-1">
        <FilterCard languageFilter="ar" />
        <FilterCard languageFilter="de" />
        <FilterCard languageFilter="en" />
        <FilterCard languageFilter="es" />
        <FilterCard languageFilter="fr" />
        <FilterCard languageFilter="he" />
        <FilterCard languageFilter="it" />
        <FilterCard languageFilter="nl" />
        <FilterCard languageFilter="no" />
        <FilterCard languageFilter="pt" />
        <FilterCard languageFilter="sv" />
        <FilterCard languageFilter="ud" />
        <FilterCard languageFilter="zh" />
      </div>
    </div>
  );
};
