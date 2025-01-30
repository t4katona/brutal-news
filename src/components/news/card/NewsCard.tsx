import { Button } from "../../button/Button";
import { Signature } from "lucide-react";
export const NewsCard = () => {
  return (
    <article className="w-full flex justify-start items-start flex-col gap-y-4 p-4 border-2 border-black border-solid hover:cursor-pointer hover:border-b-5 hover:border-r-5 hover:bg-white transition-all duration-100 ease-in-out">
      <small>Gizmodo.com</small>
      <img src="" alt="Cover image for article" />
      <h3 className="text-base font-medium">
        Apple AirTags Are Back Down to an All-Time Low Price, Selling-Fast on
        Amazon Now
      </h3>
      <p className="text-sm break-words">
        Save up to 29% on the Apple AirTags so you can keep better track of your
        stuff this.
      </p>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-1">
          <Signature color="black" size={20} />
          <small>Joe Tilleli</small>
        </div>
        <small>2025-01-29</small>
      </div>
    </article>
  );
};
