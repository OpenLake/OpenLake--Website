import React from "react";
import { AdvancedCarousel } from "../components";
import { eventsimage, foss } from "../assets";
import "../assets/css/programs.css";
import MyCarousel from "../components/Carousel";
import { sharearrow } from "../assets";

function Programs() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="z-5">
        <MyCarousel />
      </div>
      <div className="TopStat animate__animated animate__fadeInDown animate__delay-1s mt-[-4rem] md:mt-[-6rem] flex flex-col md:flex-row items-center mx-0 md:mx-2 gap-6 md:gap-12  sm:justify-center">
        <div className="w-2/3 py-3 md:w-1/4 z-40 border-b-[0.25rem] border-b-[#28A9E2] bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
          <div className="md:flex flex-row md:mx-2 mx-1 md:my-4 my-2">
            <div className="align-middle my-auto items-center">
              <div className="bg-slate-800 rounded-full text-center w-fit px-3 py-2 md:px-5 md:py-4 border align-middle my-auto items-center border-sky-500 mx-auto md:mx-8 ">
                32
              </div>
            </div>
            <div>
              <div className="text-white text-sm md:text-[18px] font-normal">
                Workshops Conducted
              </div>
              <div className="text-gray-400 text-sm md:text-lg font-normal">
                Sessions conducted by our mentors for community.
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 py-3 md:w-1/4 z-40 border-b-[0.25rem] border-b-[#28A9E2] bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
          <div className="md:flex flex-row md:mx-2 mx-1 md:my-4 my-2">
            <div className="align-middle my-auto items-center">
              <div className="bg-slate-800 rounded-full text-center w-fit px-3 py-2 md:px-5 md:py-4 border align-middle my-auto items-center border-sky-500 mx-auto md:mx-8 ">
                16
              </div>
            </div>
            <div>
              <div className="text-white text-sm md:text-[18px] font-normal">
                Hackathons Conducted
              </div>
              <div className="text-gray-400 text-sm md:text-lg font-normal">
                Sessions conducted by our <br />
                mentors for community.
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 py-3 md:w-1/4 z-40 border-b-[0.25rem] border-b-[#28A9E2] bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
          <div className="md:flex flex-row md:mx-2 mx-1 md:my-4 my-2">
            <div className="align-middle my-auto items-center">
              <div className="bg-slate-800 rounded-full text-center w-fit px-3 py-2 md:px-4 md:py-3 border align-middle my-auto items-center border-sky-500 mx-auto md:mx-8 ">
                <img src={foss} className="h-[41px] w-auto" />
              </div>
            </div>
            <div>
              <div className="text-white text-sm md:text-[18px] font-normal">
                Foss Overflow
              </div>
              <div className="text-gray-400 text-sm md:text-lg font-normal">
                India’s largest open source
                <br />
                hackathon.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-12 px-2">
        <div className="md:mt-24 mt-8 flex justify-between">
          <div className="text-white animate__animated animate__fadeInLeft animate__delay-1s md:text-[44px] text-xl font-bold leading-tight">
            Upcoming Event
          </div>

          <div className=" button_bg flex gap-1 align-middle  text-white rounded-xl animate__animated animate__fadeInRight animate__delay-1s py-2 md:text-lg px-5 md:py-3 bg-blue-500 md:text-[20px] font-[500] cursor-pointer  ">
            <div className="flex-none">Register Now</div>
            <img src={sharearrow} alt="sharearrow" className=" button_arrow" />
          </div>
        </div>
        <div className="md:mx-8 md:mt-16 mt-8 ">
          <div className="md:flex flex-row md:gap-20">
            <div className="md:w-[590px] animate__animated animate__fadeInLeft animate__delay-2s mx-auto w-[280px]">
              <img className="md:h-[590px] h-auto" src={eventsimage} alt="" />
              <div className="flex md:w-[590px] w-[280px] gap-5 align-middle content-center px-2 md:px-4 py-3 bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
                <div>
                  <div className="text-center py-2 text-cyan-400 text-xl md:text-[25px] font-bold">
                    APR
                  </div>
                  <div className="text-white text-center text-xl md:text-[50px] font-bold">
                    14
                  </div>
                </div>
                <div className="animate__animated animate__fadeInRight animate__delay-2s">
                  <div className="text-white text-xl md:text-[25px] font-bold">
                    Tutorial & Hackathon
                  </div>
                  <div className="text-gray-400 text-[0.75rem] md:text-lg font-normal">
                    Sessions conducted by our <br />
                    mentors for community.
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mx-16 md:mt-24 align-middle items-center mx-4">
              <div className="text-white text-[25px] mt-2 md:mt-0 md:text-[50px] font-bold leading-tight">
                Hackathon & Tutorial
              </div>
              <div className="text-gray-400 text-[15px] leading-2 md:text-[20px] font-normal md:leading-[33.42px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra risus praesent
                suscipit nullam a pharetra quisque. Tortor risus feugiat
                eleifend pellentesque et. Tellus pharetra ultricies duis sit
                mollis vitae felis sed scelerisque. Facilisis faucibus
                adipiscing tincidunt tristique ultrices. Lacus mi purus velit
                sed maecenas dui lectus eget tortor. Duis elit aliquet curabitur
                tortor semper hac tempor tortor. Adipiscing nullam facilisi
                ultricies in sed in vehicula justo.
              </div>
              <div className="flex align-middle mt-8 gap-1">
                <div className="button_bg flex gap-1 align-middle text-white w-fit rounded-xl text-lg px-4 py-2 bg-blue-500 font-semibold  cursor-pointer">
                  <div className="flex-none">Register Now</div>
                  <img src={sharearrow} alt="" className="button_arrow" />
                </div>
                <div className="text-white w-fit rounded-xl text-lg px-4 py-2 font-normal underline leading-normal cursor-pointer">
                  Rule Book
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:text-[44px] md:mt-24 mt-8 text-xl font-bold leading-tight">
            Past Events
          </div>
          <AdvancedCarousel />
        </div>
      </div>
    </div>
  );
}

export default Programs;
