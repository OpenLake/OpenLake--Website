import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { avatar } from "../assets";

function MemberCard({ mentor }) {
  return (
    <div
      className="flex flex-col w-[160px] h-[220px] justify-center items-center bg-sky-500 gap-1.5 bg-opacity-20 rounded-[18px]  shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.25)] backdrop-blur-[21px] rounded-[18px];
    background: linear-gradient(
        0deg,
        rgba(40, 169, 226, 0.2) 0%,
        rgba(40, 169, 226, 0.2) 100%
      ),
      radial-gradient(
        231% 135.8% at 0.9% 2.98%,
        rgba(29, 75, 96, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
      );"
    >
      <div
        className="rounded-full bg-[#28A9E2] overflow-hidden shadow-black shadow-md"
      >
        <img
          className="w-[122px] h-[129px] lightgray 0px -17.084px / 100% 151.697% no-repeat;"
          src={mentor.image}
          alt={avatar}
        />
      </div>
      <div
        className="text-center text-white text-base not-italic font-normal leading-[normal];
  font-family: Menlo;"
      >
        {mentor.name}
      </div>
      <div
        className="text-white
        ]/>?]9. text-opacity-50  text-center leading-[13.15px] text-[rgba(255,255,255,0.50)] text-[15px] not-italic font-normal leading-[131.523%]; 
  font-family: Menlo;"
      >
        {mentor.designation}
      </div>
      <div className="flex flex-row gap-6 justify-center">
        <a href={mentor.linkedln} className="social-icon-link">
          <i className="fab fa-linkedin-in social-icon"></i>
        </a>
        <a href={mentor.github} className="social-icon-link">
          <i className="fab fa-github social-icon"></i>
        </a>
      </div>
    </div>
  );
}
export default MemberCard;
