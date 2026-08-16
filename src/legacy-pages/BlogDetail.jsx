import React, { useEffect, useState } from "react";
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
    <div className=" md:mx-36 min-h-screen mt-4 md:mt-16 mx-4">
      <div className=" flex align-middle  text-white text-xl text-base font-semibold uppercase leading-tight">
        {article.author}
        <div className="pl-4 pt-2 text-center text-[#FFFFFF80] text-[13px] font-bold leading-none">
          {article.time} read
        </div>
      </div>

      <div className=" text-white mt-4 text-xl md:text-[40px] font-semibold leading-8 md:leading-[40px]">
        {article.title}
      </div>
      <div className="flex md:mt-6 mt-4">
        <div className="bg-gradient-to-r px-3 py-2 from-sky-500 to-sky-600 rounded-tl-md rounded-bl-md items-center text-center text-white text-[13px] font-bold uppercase leading-none tracking-wide">
          {article.tag}
        </div>
        <div className="px-3 pt-2 pb-2.5 bg-indigo-100 rounded-tr-md rounded-br-md justify-center items-center text-center text-blue-950 text-[13px] font-medium uppercase leading-none">
          {article.date}
        </div>
      </div>
      <div className="bg-neutral-900 mx-0 md:mx-[-8rem]">
        <div className="md:mx-36 px-2  min-h-screen mt-4 ">
          <div className=" text-white pt-5 md:mt-12 mt-4 text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
            {article.description}
          </div>
          <div className="mx-auto md:mt-12 mt-4 text-center">
            <img className="mx-auto md:mt-12 mt-4 text-center" src={article.image} alt="" />
          </div>
          <div className="text-white md:mt-12 mt-4 pb-4 text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
            {article.content}
          </div>
        </div>

      </div>

    </div>
  );
};

export default BlogDetail;
