import React from "react";
import { Signature } from "lucide-react";
import { Article } from "../../../interfaces/Article.interfaces";
export const NewsCard: React.FC<Article> = ({
  sourceName,
  imgSrc,
  author,
  title,
  description,
  publishedAt,
}) => {
  return (
    <article className="w-full flex justify-start items-start flex-col gap-y-4 p-4 border-2 border-black border-solid hover:cursor-pointer hover:border-b-5 hover:border-r-5 hover:bg-white transition-all duration-100 ease-in-out">
      <small>{sourceName}</small>
      <img
        src={imgSrc}
        alt="Cover image for article"
        className="w-full h-72 object-cover"
      />
      <h3 className="text-base font-medium">{title}</h3>
      <p className="text-sm break-words h-24">{description}</p>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-1">
          <Signature color="black" size={20} />
          <small>{author}</small>
        </div>
        <small>{publishedAt}</small>
      </div>
    </article>
  );
};
