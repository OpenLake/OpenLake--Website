import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../constants";

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Find the article with the matching id
    const foundArticle = articles.find(
      (article) => article.id === parseInt(id)
    );
    setArticle(foundArticle);
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:mx-36 min-h-screen mt-4 md:mt-16 mx-4">
      <div className=" text-white text-xl text-base font-semibold uppercase leading-tight">
        {article.author}
      </div>
      <div className=" text-white mt-8 text-xl md:text-[40px] font-semibold leading-8 md:leading-[40px]">
        {article.title}
      </div>
      <div className="flex md:mt-16 mt-4">
        <div className="bg-gradient-to-r px-3 py-2 from-sky-500 to-sky-600 rounded-tl-md rounded-bl-md items-center text-center text-white text-[13px] font-bold uppercase leading-none tracking-wide">
          {article.tag}
        </div>
        <div className="px-3 pt-2 pb-2.5 bg-indigo-100 rounded-tr-md rounded-br-md justify-center items-center text-center text-blue-950 text-[13px] font-medium uppercase leading-none">
          {article.date}
        </div>
      </div>
      <div className="text-white md:mt-12 mt-4 text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
        {article.description}
      </div>
      <div className="mx-auto md:mt-12 mt-4 text-center">
        <img className="mx-auto md:mt-12 mt-4 text-center" src={article.image} alt="" />
      </div>
      <div className="text-white md:mt-12 mt-4 text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
        {article.content}
      </div>
    </div>
  );
};

export default BlogDetail;
