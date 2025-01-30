import { Button } from "../button/Button";
export const Searchbar = () => {
  return (
    <form className="flex justify-center items-center">
      <input
        type="search"
        placeholder="Search..."
        className="w-full min-h-[44px] p-2 border-2 border-r-0 rounded-none border-solid border-border bg-neutral text-sm  focus:border-primary-accent focus:outline-none focus:border-b-5 focus:border-r-5 transition-all duration-100 ease-in-out"
      />
      <Button variant="search" />
    </form>
  );
};
