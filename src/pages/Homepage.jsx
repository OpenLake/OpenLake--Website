import React, { useRef, useState, useEffect } from "react";
import "../assets/css/homepage.css";
import Xarrow from "react-xarrows";

const Error = () => {
  const box1Ref = useRef(null);

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
    <div  className=" pointer-events-none px-[267px] pt-4 min-h-screen">
      <div id="grid" className="">
        <div id="grid1" className="mt-10">
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
          <div className="flex mx-6 py-[30px] gap-4">
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
          <div class="text-white text-[15px] font-normal tracking-[0] leading-[23.5px] mt-[22px] ml-[3.75rem]">
            #For a better World!
          </div>
        </div>
      </div>

      <div id="gridd" className="mt-60 min-h-screen ">
        {" "}
        //background 161616
        <div id="gridd1" className="mt-20">
          <div className="text-white font-[400] text-2xl">
            What is Open Lake?
          </div>
          <div className="text-[#808080] text-sm font-[400]">
            As the world is moving towards a connected society. The communities
            driving the development of open source technologies are becoming
            more prominent. Numerous software giants like Google and Microsoft
            are embracing the idea of Open Source Software. With Microsoft's
            Campaign: “ Microsoft ❤️ Open Source ”, the importance of open
            source is visible to the world. For example, Tensorflow and Pytorch
            are 2 very important Machine learning libraries that heavily govern
            the advancements in Artificial Intelligence today, both of these are
            driven and developed by open source communities in collaboration
            with corporate firms.
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
    </div>
  );
};

export default Error;
