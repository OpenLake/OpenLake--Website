import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { carimage } from "../assets";

const programs = [
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "We’ll get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "We’ll get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "We’ll get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "We’ll get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "We’ll get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "We’ll get you directly seated and inside for you to enjoy the show.",
  },
];

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <div
        ref={scrollRef}
        className="md:mx-24 mx-6 gap-4"
        style={{
          display: "flex",
          overflow: "hidden",
          scrollSnapType: "x mandatory"
        }}
      >
        {programs.map((program, i) => {
          return (
            <div key={i} className="">
              <div className="w-[308px]">
                <img className="w-full h-[308px]" src={program.image} alt="" />
              </div>
              <div className="bg-[#203138] flex">
                <div>{program.date}</div>
                <div>
                  <div>{program.title}</div>
                  <div>{program.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative cursor-pointer top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between items-center">
        <button
          className="p-2  bg-gray-800 text-white rounded-full absolute left-0"
          style={{ marginLeft: "1rem" }}
          onClick={() => prev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="p-2 bg-gray-800 text-white rounded-full absolute right-0"
          style={{ marginRight: "1rem" }}
          onClick={() => next()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <ol className="text-center justify-center mx-auto" style={{ display: "flex" }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              className="text-center mx-auto"
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default AdvancedCarousel;
