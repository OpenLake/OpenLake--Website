import React, { useRef, useState, useEffect } from "react";
import { Card, Testimonial } from "../components";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
  image,
  secimage,
  prmerged,
  linesadded,
  closed,
  potential,
  propened,
  logosvg,
  carimage,
  toparrow,
  downarrow,
} from "../assets";

import "../assets/css/homepage.css";
// import Xarrow from "react-xarrows";
import { useSnapCarousel } from "react-snap-carousel";
import { slideIn } from "../utils/motion";

const programs = [
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "We will get you directly seated and inside for you to enjoy the show.",
  },
];
const stats = [
  {
    image: propened,
    num: 112,
    title: "PRs open",
  },
  {
    image: prmerged,
    num: 1053,
    title: "PRs merged",
  },
  {
    image: secimage,
    num: 421,
    title: "Isseues opened",
  },
  {
    image: closed,
    num: 421,
    title: "Isseues closed",
  },
  {
    image: linesadded,
    num: 705000,
    title: "Lines Added",
  },
  {
    image: potential,
    num: 999999,
    title: "Potential",
  },
];

const Homepage = () => {
  const box1Ref = useRef(null);
  const { scrollRef, next, prev } = useSnapCarousel();

  const [repos, setRepos] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth - 40);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/openlake/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // const [numberOfColorBoxes, setNumberOfColorBoxes] = useState(400);

  // useEffect(() => {
  //   const bgAnimation = document.getElementById('bgAnimation');

  //   for (let i = 0; i < numberOfColorBoxes; i++) {
  //     const colorBox = document.createElement('div');
  //     colorBox.classList.add('colorBox');
  //     bgAnimation.appendChild(colorBox);
  //   }
  // }, [numberOfColorBoxes]);

  return (
    <div>
      <div className="md:px-[150px] relative flex flex-col top-4 md:top-28 pt-4 ">
        <div id="grid">
          <div
            id="grid1"
            className=" animate__animated animate__backInLeft  mt-10 md:mx-0 px-4 w-full mb-16 md:mb:0"
          >
            <div className="  w-fit font-inter font-semibold h-fit md:w-[160px] md:h-[40px] text-[#28A9E2] text-[32px] align-middle tracking-[0] leading-[normal] bg-[#28A9E2] bg-opacity-20 px-1 py-2] rounded text-center">
              Openlake
            </div>
            <div className="font-inter text-[#FFFFFF] text-[40px] font-semibold tracking-[0] leading-[52.6px] my-2">
              Embrace the power of collaboration with Open Lake
            </div>
            <div className="text-white font-inter text-xl font-semibold tracking-[0] leading-[26.3px] opacity-50 text-[1.25rem] my-2">
              Fostering Innovation Through Collective Expertise
            </div>
            <div className="bg-[#1F2526] font-inconsolata mt-4 w-[90vw] md:w-[450px] rounded ">
              <div className="text-[#aaaeb3] animate__animated animate__fadeInLeft animate__delay-1s text-[13.5px] font-normal tracking-[0] leading-[15.8px] border-b border-[#3C4045] py-2 p-4">
                Hi, we are Open Lake!
              </div>
              <div className="py-4 pl-4 animate__animated animate__fadeInLeft animate__delay-2s">
                <span className="text-[#6E7681] py-4 text-[12px] md:text-[15.2px] mr-1 md:mr-2 text-xs font-normal tracking-[0] leading-[18px]">
                  1
                </span>
                <span className="py-4 text-[#a5d6ff] text-[12px] md:text-[15.2px] font-normal tracking-[0] leading-[18px]">
                  "Embrace the open source revolution"
                </span>
              </div>
            </div>
          </div>
          <div
            id="grid2"
            className="animate__animated animate__fadeInRight animate__delay-1s mt-[129px] rounded-4xl "
          >
            <div className="flex mx-6 md:py-[30px] py-[1rem] gap-4">
              <div className="bg-[#f46b5d] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#f9bd4e] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#57c353] px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50]"></div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={slideIn(2, 2)}
              className="px-[30px] font-inconsolata font-normal text-[11px] md:text-[16px] py-[20px] md:py-[40px]"
            >
              <span className="text-wrapper text-white">console.log(</span>
              <span className="span text-cyan-300">
                'Building a better world'
              </span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-[#C398FF]">import</span>
              <span className="text-white text-wrapper">
                {" "}
                {"{"} world {"}"}{" "}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">from</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'OpenLake'</span>
              <br />
              <span className="text-wrapper text-white">
                function openLake() {"{"}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">return</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'Better World'</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">const happiness =</span>{" "}
              <span className="text-wrapper-2 text-[#C398FF]">await</span>
              <span className="text-wrapper text-white"> git.pull(</span>
              <span className="span text-cyan-300">'openlake'</span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-white">if</span>
              <span className="text-wrapper text-white"> (openLake) {"{"}</span>
              <span className="span text-white">happiness++;</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">commit(</span>
              <span className="span text-cyan-300">'BetterWorld'</span>
              <span className="text-white">)</span>
              <br />
              <span className="text-white">devClub() // OpenLake</span>
              <br />
              <span className="text-white">openLake = () =&gt;</span>{" "}
              <span className="span text-cyan-300">'forBetterWorld'</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]">with</span>
              <span className="text-wrapper text-white"> Purpose</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]"> for</span>
              <span className="text-wrapper text-center text-white">
                {" "}
                a Cause
              </span>
              <div ref={box1Ref} className="text-center"></div>
            </motion.div>
          </div>
          <div
            id="grid3"
            class="mt-4 animate__animated animate__fadeInRight relative bg-[#28A9E233] bg-gradient-to-br from-[#1D4B6066] to-[#ffffff00] rounded-4xl"
          >
            <div className="z-[3] w-1/2 md:w-full absolute -top-16 -left-8 md:-top-36 md:-left-16">
              <img src={logosvg} alt="logosvg" />
            </div>
            <div class="text-[#28A9E2] font-inter pr-5 text-[0.8rem] md:text-[1rem] font-bold py-3 text-right border-b border-[#ffffff50]">
              Openlake
            </div>
            <div class="text-white text-[12px] font-inconsolata md:text-[15px] font-normal tracking-[0] leading-[23.5px]   mt-[1px] md:mt-[22px] ml-[2rem] md:ml-[3.75rem]">
              #For a better World!
            </div>
          </div>
        </div>
        <div className="px-8 md:px-0 relative flex flex-col-reverse md:flex-col w-fit md:h-4/5 md:w-5/6 justify-start items-end mt-[18rem] md:mt-8">
          <img
            className="animate__animated animate__fadeInDown animate__delay-4s"
            src={toparrow}
            alt="toparrow"
          />
          <div>
            <div className="animate__animated animate__fadeInRight animate__delay-5s text-end relative md:absolute md:top-[40vh] md:left-[30vw] text-white text-[25px] md:text-[40px] font-semibold leading-[52.61px] ">
              What we do?
            </div>
            <div className="animate__animated animate__fadeInLeft animate__delay-5s relative text-end md:absolute md:bottom-[30vh] md:left-[20vw] text-white text-opacity-50 text-xl  font-semibold leading-relaxed">
              Connecting Students to the World of Open Source Development
            </div>
          </div>
        </div>
        <div id="gridd" className="md:mt-2 px-8">
          {" "}
          <div id="gridd1" className="justify-center mt-24">
            <div className="text-white font-[600] mx-2 text-2xl md:text-3xl">
              What is Open Lake?
            </div>
            <div className="text-[#808080] px-2 text-[15px] md:text-l text-justify mt-3 font-[600]">
              As the world is moving towards a connected society. The
              communities driving the development of open source technologies
              are becoming more prominent. Numerous software giants like Google
              and Microsoft are embracing the idea of Open Source Software. With
              Microsoft's Campaign: “ Microsoft ❤️ Open Source ”, the importance
              of open source is visible to the world. For example, Tensorflow
              and Pytorch are 2 very important Machine learning libraries that
              heavily govern the advancements in Artificial Intelligence today,
              both of these are driven and developed by open source communities
              in collaboration with corporate firms.
            </div>
          </div>
          <div
            id="gridd2"
            className="bg-opacity-99 mt-16 bg-[#1D4B60] rounded-4xl font-inconsolata font-normal"
          >
            <div className="flex mx-6 py-4 gap-4">
              <div className="bg-[#f46b5d] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#f9bd4e] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#57c353] px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50] "></div>
            <div className="px-4 py-4 text-[11px] md:text-[16px]">
              <span className="text-whitetext-wrapper text-white ">
                console.log(
              </span>
              <span className="span text-cyan-300">
                'Building a better world'
              </span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-[#C398FF]">import</span>
              <span className="text-white text-wrapper">
                {" "}
                {"{"} world {"}"}{" "}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">from</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'OpenLake'</span>
              <br />
              <span className="text-wrapper text-white">
                function openLake() {"{"}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">return</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'Better World'</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">const happiness =</span>{" "}
              <span className="text-wrapper-2 text-[#C398FF]">await</span>
              <span className="text-wrapper text-white"> git.pull(</span>
              <span className="span text-cyan-300">'openlake'</span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-white">if</span>
              <span className="text-wrapper text-white"> (openLake) {"{"}</span>
              <span className="span text-white">happiness++;</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">commit(</span>
              <span className="span text-cyan-300">'BetterWorld'</span>
              <span className="text-white">)</span>
              <br />
              <span className="text-white">devClub() // OpenLake</span>
              <br />
              <span className="text-white">openLake = () =&gt;</span>{" "}
              <span className="span text-cyan-300">'forBetterWorld'</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]">with</span>
              <span className="text-wrapper text-white"> Purpose</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]"> for</span>
              <span className="text-wrapper text-center text-white">
                {" "}
                a Cause
              </span>
            </div>
          </div>
          <div
            id="gridd3"
            className="bg-opacity-70 mx-6 mt-6 bg-[#1D4B60] rounded-4xl"
          >
            {" "}
          </div>
        </div>

        {/* <Xarrow
          start={box1Ref} //can be react ref
          end="elem2" //or an id
        /> */}
        <div className="mt-[25rem] md:mt-[30rem] md:mx-[-8rem] md:px-14 md:rounded-[4rem] rounded-[2rem] mx-2 bg-gradient-to-b from-[#1d4b6000] via-[#1d4b604d] to-[#1d4b60a4]">
          <div className="bg-[#326074] mt-8 rounded-lg py-1 mx-auto text-center w-[80vw] md:w-[30vw]">
            <div className="text-[#a5d6ff] px-6 text-[13.2px] font-normal font-inconsolata tracking-[0] leading-[27px]">
              &#34;Bridging gap between Students and the World of<span className="text-white font-semibold"> Open Source </span>
            </div>
            <div className=" border-b border-dotted border-[#a5d6ff] "></div>
            <div className="text-white px-6 text-[13.2px] font-semibold font-inconsolata tracking-[0] leading-[27px]">
              Development&#34;
            </div>
          </div>
          <div className="mt-10 md:mt-[12rem]">
            <div className=" text-white text-[24px] md:text-[40px] font-semibold tracking-[0] leading-[52.6px] text-center">
              Our Notable Projects
            </div>
            <div className="mt-2 mb-24 text-[#ffffff80] text-center text-l md:text-2xl font-semibold tracking-[0] leading-[26.3px] ">
              We always strive towards the benefit of society with our projects.
            </div>
            <motion.div ref={carousel} className="overflow-hidden mx-auto my-8">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                whileHover={{ scale: 0.9 }}
                className="cards mx-8 w-[110rem] overflow-hidden"
                style={{ animation: "scroll 10s linear infinite" }}
              >
                {Array.isArray(repos) ? (
                  repos
                    .slice(2, 8)
                    .map((repo, index) => (
                      <Card
                        key={repo.id}
                        repo={repo}
                        className={
                          index % 8 === 0 ||
                          index % 8 === 2 ||
                          index % 8 === 5 ||
                          index % 8 === 7
                            ? "even-card"
                            : "odd-card"
                        }
                      />
                    ))
                ) : (
                  <p>No repositories found</p>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="px-8 w-fit flex flex-col justify-center items-start">
          <img
            className="animate__animated animate__fadeInDown"
            src={downarrow}
            alt="toparrow"
          />
          <div>
            <div className="animate__animated animate__fadeInRight animate__delay-2s text-[#ffffff80] mx-2 text-xl md:text-2xl font-semibold tracking-[0] leading-[26.3px] ">
              Openlake
            </div>
            <div className="animate__animated animate__fadeInLeft animate__delay-2s text-white mx-2 text-2xl md:text-[45px] font-semibold tracking-[0] md:leading-[52.6px]">
              Our Github stats
              <img
                className="inline w-[30px] md:w-[42px] md:h-[23px] ml-4"
                src={image}
                alt="githubstats"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <div className="grid grid-cols-3 md:flex md:gap-4 mt-4">
            {stats.map((stat) => (
              <div key={stat.title} className="mx-auto my-2 gap-4">
                <div>
                  <img
                    className="w-[20px] h-[20px] md:w-[41px] box-content text-center md:h-[41px] mx-auto"
                    src={stat.image}
                    alt="stats"
                  />
                </div>
                <div className="text-[#f2ffff] text-l md:text-3xl font-medium h-9 tracking-[-0.24px] mt-2 mb-2 leading-[normal] text-center">
                  <CountUp end={stat.num} duration={6} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <div className="text-[#8f959e] text-center text-xs md:text-xl font-normal h-[23px] tracking-[-0.24px] leading-[22.4px]">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <div className="text-[#ffffff80] text-center text-xl md:text-3xl font-semibold tracking-[0] leading-[26.3px]">
              Checkout our past events
            </div>
            <>
              <div
                ref={scrollRef}
                className="md:mx-24 mt-16 mx-6 gap-4"
                style={{
                  display: "flex",
                  overflow: "hidden",
                  scrollSnapType: "x mandatory",
                }}
              >
                {programs.map((program, i) => {
                  return (
                    <div key={i} className="">
                      <div className="w-[308px]">
                        <img
                          className="w-full h-[308px] object-cover"
                          src={program.image}
                          alt=""
                        />
                      </div>
                      <div className="flex gap-4 w-[308px] justify-between px-4 py-2 bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
                        <div className="align-middle items-center">
                          <div className="text-center py-2 text-cyan-400 text-xl font-bold">
                            APR
                          </div>
                          <div className="text-white text-2xl font-bold">
                            14
                          </div>
                        </div>
                        <div>
                          <div className="text-white text-lg font-bold">
                            {program.title}
                          </div>
                          <div className="text-gray-400 text-sm font-normal">
                            {program.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative cursor-pointer mt-[-14rem] mb-[20rem] top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between items-center">
                <button
                  className="p-2 z-50 bg-gray-800 text-white rounded-full absolute left-0"
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
                  className="p-2 cursor-pointer bg-gray-800 text-white rounded-full absolute right-0"
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
            </>
          </div>
          <div className="mb-32">
            <Testimonial />
          </div>
          <div className="bg-[#161616] mx-2 mb-10 md:w-[600px] w-fit md:mb-[10rem] md:mx-auto px-12 py-8 rounded-[18px] shadow  backdrop-blur-[42px]">
            <div className="text-white font-semibold text-lg">
              Subscribe to our newsletter
            </div>
            <div className="text-white text-opacity-50 whitespace-normal break-words text-[0.75rem] font-semibold">
              We provide latest news from ever possible tech domain. Enter your
              email and be updated with our newsletters!
            </div>
            <div className="md:flex flex-row justify-between md:gap-12 mx-4 mt-8">
              <input
                type="text"
                placeholder="Your Email Address"
                className="border-b-2 md:w-[500px] w-full bg-[#161616] border-white border-opacity-40"
              />
              <div className=" md:mx-0 mx-auto md:mt-0 mt-2">
                <button className="text-white text-center px-4 py-2 font-bold bg-gradient-to-r from-sky-500 to-sky-600 rounded-[5px]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
