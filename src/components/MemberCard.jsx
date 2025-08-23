import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MemberCard({ member ,showSocials = true}) {
  return (
    <div
      className="flex flex-col w-[160px] h-[220px] justify-center items-center gap-1.5 
      rounded-[18px] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.25)] 
      backdrop-blur-[21px] bg-sky-500 bg-opacity-20"
      style={{
        background: `
          linear-gradient(0deg, rgba(40,169,226,0.2) 0%, rgba(40,169,226,0.2) 100%),
          radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(29,75,96,0.4) 0%, rgba(255,255,255,0) 100%)
        `
      }}
    >
      <div className="rounded-full bg-[#28A9E2] overflow-hidden shadow-black shadow-md">
        <img
          className="w-24 h-24 rounded-full object-cover mx-auto"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="text-center text-white text-base font-normal font-mono">
        {member.name}
      </div>
      <div className="text-[15px] text-center text-white text-opacity-50 font-normal font-mono leading-[131%]">
        {member.designation}
      </div>
      <div className="flex flex-row gap-6 justify-center mt-2">
        <a href={member.linkedln} target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
        { showSocials && (
        <a href={member.github} target="_blank" rel="noreferrer">
          <i className="fab fa-github text-xl"></i>
        </a>
      )}
      </div>
    </div>
  );
}

export default MemberCard;