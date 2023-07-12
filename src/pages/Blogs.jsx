import React from "react";
import { articles } from "../constants";
import { bloginsta, linkedinblog, githubblog } from "../assets";
function Blogs() {
  const getLatestBlogs = () => {
    const currentDate = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(currentDate.getDate() - 14);

    return articles.filter((article) => {
      const articleDate = new Date(article.date);
      return articleDate >= twoWeeksAgo && articleDate <= currentDate;
    });
  };
  const groupByTag = (articles) => {
    const groupedArticles = {};
    articles.forEach((article) => {
      if (!groupedArticles[article.tag]) {
        groupedArticles[article.tag] = [];
      }
      groupedArticles[article.tag].push(article);
    });
    return groupedArticles;
  };

  const latestBlogs = groupByTag(getLatestBlogs());
  const olderBlogs = groupByTag(
    articles.filter((article) => !getLatestBlogs().includes(article))
  );
  return (
    <div className="mt-8 min-h-screen">
      <div className="md:flex md:pb-24 pb-8 md:pl-[180px] pl-8 md:gap-[12rem] pr-8 md:pr-[111px] justify-between">
        <div>
          <div className=" text-white text-base font-semibold uppercase leading-tight">
            👋 HELLO
          </div>
          <div className=" text-white text-xl md:text-[40px] font-semibold leading-8 md:leading-[62.40px]">
            Insights about the world of open source, and the in-betweens
          </div>
        </div>
        <div className="md:mt-4 mt-6">
          <div className="text-center w-fit mx-auto px-5 py-2.5 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg items-center text-white text-xl md:text-[32px] font-bold tracking-wider">
            Subscribe
          </div>
          <div className="text-center text-white text-xl font-medium">
            Newsletter
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 md:flex flex-row justify-between">
        <div className="mt-8 md:w-4/5 md:pl-[120px]">
          <div className="text-white border-b-4 pb-8 p-2 pt-8 border-white border-opacity-50 text-xl md:text-[45px] font-semibold">
            Latest Blogs
          </div>
          <div>
            {Object.entries(latestBlogs).map(([tag, articles]) => (
              <div key={tag}>
                {articles.map((article) => (
                  <div
                    className="mt-8 md:flex md:mx-0 mx-6 flex-row gap-0 md:gap-6"
                    key={article.id}
                  >
                    <div className="md:bg-neutral-900 md:px-0 px-2 md:py-0 py-4 rounded-xl bg-black">
                      <div className="flex gap-4 items-center">
                        <div className="flex">
                          <div className="bg-gradient-to-r px-3 py-2 from-sky-500 to-sky-600 rounded-tl-md rounded-bl-md items-center text-center text-white text-[13px] font-bold uppercase leading-none tracking-wide">
                            {article.tag}
                          </div>
                          <div className="px-3 pt-2 pb-2.5 bg-indigo-100 rounded-tr-md rounded-br-md justify-center items-center text-center text-blue-950 text-[13px] font-medium uppercase leading-none">
                            {article.date}
                          </div>
                        </div>
                        <div className="text-center text-white text-[13px] font-bold leading-none">
                          {article.time} read
                        </div>
                      </div>
                      <a href={`/blogs/${article.id}`}>
                        <div className="mt-8 text-white text-sm md:text-[28px] font-medium md:leading-9">
                          {article.title}
                        </div>
                        <div className="text-white text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
                          {article.description}
                        </div>
                      </a>
                    </div>
                    <div>
                      <img
                        className="w-[550px] h-[220px]"
                        src={article.image}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div>
            {Object.entries(olderBlogs).map(([tag, articles]) => (
              <div key={tag}>
                <div className="text-white uppercase border-b-4 p-2 pt-8 border-white border-opacity-50 text-[45px] font-semibold">
                  {tag}
                </div>
                {articles.map((article) => (
                  <div
                    className="mt-8 md:flex md:mx-0 mx-6 flex-row gap-0 md:gap-6"
                    key={article.id}
                  >
                    <div className="md:bg-neutral-900 md:px-0 px-2 md:py-0 py-4 rounded-xl bg-black">
                      <div className="flex gap-4 items-center">
                        <div className="flex">
                          <div className="bg-gradient-to-r px-3 py-2 from-sky-500 to-sky-600 rounded-tl-md rounded-bl-md items-center text-center text-white text-[13px] font-bold uppercase leading-none tracking-wide">
                            {article.tag}
                          </div>
                          <div className="px-3 pt-2 pb-2.5 bg-indigo-100 rounded-tr-md rounded-br-md justify-center items-center text-center text-blue-950 text-[13px] font-medium uppercase leading-none">
                            {article.date}
                          </div>
                        </div>
                        <div className="text-center text-white text-[13px] font-bold leading-none">
                          {article.time} read
                        </div>
                      </div>
                      <a href={`/blogs/${article.id}`}>
                        <div className="mt-8 text-white text-sm md:text-[28px] font-medium md:leading-9">
                          {article.title}
                        </div>
                        <div className="text-white text-opacity-50 text-sm md:text-lg font-normal md:leading-[27px]">
                          {article.description}
                        </div>
                      </a>
                    </div>
                    <div>
                      <img
                        className="w-[550px] h-[220px]"
                        src={article.image}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/5 md:px-6 px-4 pt-8 md:pt-24">
          <div className="text-white text-[25px] font-normal leading-[33px]">
            Follow Us
          </div>
          <div className="text-center mx-auto">
            <div className="flex mt-6 gap-4 items-center">
              <div>
                <img className="w-[28px] h-[28px]" src={githubblog} alt="" />
                <div>10</div>
              </div>
              <div className="">
                <img
                  className="w-[28px] mb-[-6px] h-[28px]"
                  src={linkedinblog}
                  alt=""
                />
                <div className="mt-1">65K</div>
              </div>
              <div>
                <img className="w-[28px] h-[28px]" src={bloginsta} alt="" />
                <div>45</div>
              </div>
            </div>
          </div>
          <div className="text-white text-[1rem] font-normal mt-6">
            Subscription Subscribe to our newsletter and receive a selection of
            cool articles every weeks
          </div>
          <div className="mt-4">
            <input
              className="px-6 py-3 border-white border-2 rounded-lg bg-[#111111]"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className=" mx-auto text-center ">
            <button className="bg-[#111111] mt-2 px-6 py-3 text-white rounded-lg">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
