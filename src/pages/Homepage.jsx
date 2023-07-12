import React, { useRef, useState, useEffect } from "react";
import { Card } from "../components";
import { motion } from "framer-motion";
import {
  image,
  secimage,
  prmerged,
  linesadded,
  closed,
  potential,
  propened,
  carimage,
} from "../assets";
import "../assets/css/homepage.css";
import Xarrow from "react-xarrows";
import { useSnapCarousel } from "react-snap-carousel";

const programs = [
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
    content:
      "Well get you directly seated and inside for you to enjoy the show.",
  },
  {
    date: "Apr 14",
    image: carimage,
    title: "Lorem ipsum dolor sit amet consectetur. Mi massa.",
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
    num: 0,
    title: "Potential",
  },
];

const Homepage = () => {
  const box1Ref = useRef(null);
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

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
      <div className=" pointer-events-none md:px-[200px] pt-4 ">
        <div id="grid" className="">
          <div id="grid1" className="mt-10 md:mx-0 px-4">
            <div className="text-[#28A9E2] text-[32px] align-middle font-semibold tracking-[0] leading-[normal] bg-[#28A9E2] bg-opacity-20 w-fit px-1 py-2]">
              Openlake
            </div>
            <div className="text-[#FFFFFF] text-[40px] font-semibold tracking-[0] leading-[52.6px] my-2">
              Embrace the power of collaboration with Open Lake
            </div>
            <div className="text-white text-xl font-semibold tracking-[0] leading-[26.3px] opacity-50 text-[1.25rem] my-2">
              Fostering Innovation Through Collective Expertise
            </div>
            <div className="bg-[#1F2526] mt-4 w-fit">
              <div className="text-[#aaaeb3] text-[10.5px] font-normal tracking-[0] leading-[15.8px] border-b border-[#3C4045] py-1 p-4">
                Hi, we are Open Lake!
              </div>
              <div className="py-4 pl-4 pr-40">
                <span className="text-[#6E7681] py-4 text-[1rem] text-xs font-normal tracking-[0] leading-[18px]">
                  1
                </span>
                <span className="py-4 text-[#a5d6ff] text-[11.2px] font-normal tracking-[0] leading-[18px]">
                  "Embrace the open source revolution"
                </span>
              </div>
            </div>
          </div>
          <div
            id="grid2"
            className="bg-[#28A9E233] bg-blur bg-gradient-to-br from-[#1D4B6066] to-[#ffffff00] mt-[129px] rounded-4xl"
          >
            <div className="flex mx-6 md:py-[30px] py-[1rem] gap-4">
              <div className="bg-[#f46b5d] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#f9bd4e] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#57c353] px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50]"></div>
            <div className="px-[30px] font-normal text-[15px] py-[40px]">
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
            </div>
          </div>
          <div
            id="grid3"
            class="mt-4 relative bg-[#28A9E233] bg-gradient-to-br from-[#1D4B6066] to-[#ffffff00] rounded-4xl"
          >
            <div class="text-[#28A9E2] pr-3 text-[1rem] py-3 text-right border-b border-[#ffffff50]">
              Openlake
            </div>
            <div class="text-white text-[15px] font-normal tracking-[0] leading-[23.5px] md:mt-[22px] mt-[1rem] ml-[2rem] md:ml-[3.75rem]">
              #For a better World!
            </div>
          </div>
        </div>

        <div id="gridd" className="mt-60 ">
          {" "}
          <div id="gridd1" className="mt-20 ">
            <div className="text-white font-[400] mx-2 text-2xl">
              What is Open Lake?
            </div>
            <div className="text-[#808080] px-4 text-sm font-[400]">
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
            className="bg-opacity-99 mt-16 bg-[#1D4B60] rounded-4xl"
          >
            <div className="flex mx-6 py-4 gap-4">
              <div className="bg-[#f46b5d] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#f9bd4e] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#57c353] px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50]"></div>
            <div className="px-4 py-4">
              <span className="text-whitetext-wrapper text-white">
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
            <div id="elem2" className="flex mx-6 py-4 gap-4">
              <div className=" px-2 py-2 rounded-xl"></div>
              <div className=" px-2 py-2 rounded-xl"></div>
              <div className=" px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50]"></div>
            <div className="px-4 py-4">
              <span className="text-whitetext-wrapper text-white">
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
              <br />
              <span className="text-wrapper text-white">
                function openLake() {"{"}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">return</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">const happiness =</span>{" "}
              <span className="text-wrapper-2 text-[#C398FF]">await</span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-white">if</span>
              <span className="span text-white">happiness++;</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">commit(</span>
              <span className="span text-cyan-300">'BetterWorld'</span>
              <span className="text-white">)</span>
              <br />
              <span className="text-white">devClub() // OpenLake</span>
              <br />
              <span className="text-white">openLake = () =&gt;</span> <br />
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
        </div>
        <Xarrow
          start={box1Ref} //can be react ref
          end="elem2" //or an id
        />
        <div className="mt-[30rem] md:mx-[-8rem] px-14 md:rounded-[4rem] rounded-[2rem] mx-2 bg-gradient-to-b from-[#1d4b6000] via-[#1d4b604d] to-[#1d4b60a4]">
          <div className="bg-[#326074] mt-8 rounded-lg py-1 mx-auto text-center w-fit">
            <div className="text-[#a5d6ff] px-6 text-[11.2px] font-normal font-[Menlo-Regular] tracking-[0] leading-[22px]">
              &#34;Bridging gap between Students and the World of Open Source
            </div>
            <div className=" border-b border-dotted border-[#a5d6ff] "></div>
            <div className="text-[#a5d6ff] px-6 text-[11.2px] font-normal font-[Menlo-Regular] tracking-[0] leading-[22px]">
              Development&#34;
            </div>
          </div>
          <div className="mt-[15rem]">
            <div className="text-white text-[40px] font-semibold tracking-[0] leading-[52.6px] text-center">
              Our Notable Projects
            </div>
            <div className="text-[#ffffff80] text-center text-xl font-semibold tracking-[0] leading-[26.3px] ">
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
        <div className="mt-40">
          <div className="text-[#ffffff80] text-xl font-semibold tracking-[0] leading-[26.3px]">
            Openlake
          </div>
          <div className="text-white text-[40px] font-semibold tracking-[0] leading-[52.6px]">
            Our Github stats
            <img className="inline w-[42px] h-[23px] ml-4" src={image} />
          </div>
          <div className="flex mt-4">
            {stats.map((stat) => (
              <div key={stat.title} className="mx-auto gap-4">
                <div>
                  <img
                    className="w-[41px] text-center h-[41px] mx-auto"
                    src={stat.image}
                    alt=""
                  />
                </div>
                <div className="text-[#f2ffff] text-3xl font-medium h-9 tracking-[-0.24px] mt-2 mb-2 leading-[normal] text-center">
                  {stat.num}
                </div>
                <div className="text-[#95a1b4] text-xs font-normal h-[23px] tracking-[-0.24px] leading-[22.4px]">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <div className="text-[#ffffff80] text-center text-xl font-semibold tracking-[0] leading-[26.3px]">
              Checkout our past events
            </div>
            <>
              <div
                ref={scrollRef}
                className="md:mx-24 mx-6 gap-4"
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
                          className="w-full h-[308px]"
                          src={program.image}
                          alt=""
                        />
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
              <ol
                className="text-center justify-center mx-auto"
                style={{ display: "flex" }}
              >
                {pages.map((_, i) => (
                  <li key={i}>
                    <button
                      className="text-center cursor-pointer mx-auto"
                      style={i === activePageIndex ? { opacity: 0.5 } : {}}
                      onClick={() => goTo(i)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ol>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
