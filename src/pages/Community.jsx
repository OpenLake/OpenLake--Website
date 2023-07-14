import React, { useEffect, useState} from "react";
import { HeaderDot, RepoButton, MemberCard } from "../components";
// import Xarrow, { Xwrapper } from "react-xarrows";
import { repoavatar } from "../assets";
import "../assets/css/community.css";
import { Mentors2023, Coordinator2023 } from "../constants";
const Community = () => {
  // const box1Ref = useRef(null);
  // const box2Ref1 = useRef(null);
  // const box2Ref2 = useRef(null);
  const [coordinators, setCoordinators] = useState([]);
  const [mentors, setMentors] = useState([]);
  const firstRowMentors = mentors.slice(0, 6);
  const secondRowMentors = mentors.slice(6, 10);
  useEffect(() => {
    setMentors(Mentors2023);
  }, []);
  useEffect(() => {
    setCoordinators(Coordinator2023);
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="p-8">
        <div className=" flex flex-col md:flex-row justify-between gap-6 sm:gap-20 px-0 md:py-4 md:px-8">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-fit" >
              <HeaderDot />
            </div>
            <div className="flex flex-row sm:justify-evenly md:justify-start gap-2">
              <img src={repoavatar} alt="repoavatar" className="w-8 md:w-10" />
              <h1 className=" text-white text-[20px] md:text-[40px] font-semibold md:leading-10 uppercase">
                Community
              </h1>
            </div>
          </div>
          <div className=" buttons flex flex-col ml-10 sm:flex-row sm:justify-center ">
            <a href={"https://github.com/OpenLake"} className="my-2 w-fit">
              <RepoButton ButtonName={"Openlake Github"} />
            </a>
          </div>
        </div>
        <div className="relative flex flex-row  sm:ml-2 md:ml-0 gap-6 sm:gap-16 py-4 px-8">
          {/* <Xwrapper>
            <Xarrow
              start={box1Ref}
              end={box2Ref1}
              color="#2B86AE"
              strokeWidth={2}
              headSize={15}
              tailSize={15}
              showHead={false}
              startAnchor="bottom"
              endAnchor="left"
              path="smooth"
              edge={5}
              zIndex={0}
              lineColor="#2B86AE"
              pathColor="#2B86AE"
              startEdge={5}
              endEdge={5}
            /> */}
            <div className="box">
              <div className="rectangle-wrapper">
                <div
                  className="rectangle flex flex-col items-center gap-6"
                >
                  <div className="timeline flex flex-row justify-center content-center">
                    2023-24
                  </div>
                  <div className="text-center">
                    <span className="text-white text-lg font-normal leading-normal">
                      Take a look at our{" "}
                    </span>
                    <span className="text-sky-500 text-lg font-normal leading-normal">
                      Organization's
                    </span>
                    <span className="text-white text-lg font-normal leading-normal">
                      {" "}
                      people
                    </span>
                  </div>
                  <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-8 mb-10">
                    {coordinators.map((mentor) => (
                      <MemberCard
                        className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
                        key={mentor.id}
                        mentor={mentor}
                      />
                    ))}
                  </div>
                  <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center w-fit md:w-max gap-8 mb-10">
                    {firstRowMentors.map((mentor) => (
                      <MemberCard
                        className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
                        key={mentor.id}
                        mentor={mentor}
                      />
                    ))}
                  </div>
                  <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-8 mb-10">
                    {secondRowMentors.map((mentor) => (
                      <MemberCard
                        className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
                        key={mentor.id}
                        mentor={mentor}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          {/* </Xwrapper> */}
        </div>
        {/* <Xwrapper>
          <Xarrow
            start={box1Ref}
            end={box2Ref2}
            color="#2B86AE"
            strokeWidth={2}
            headSize={15}
            tailSize={15}
            showHead={false}
            startAnchor="bottom"
            endAnchor="left"
            path="smooth"
            edge={5}
            zIndex={0}
            lineColor="#2B86AE"
            pathColor="#2B86AE"
            startEdge={5}
            endEdge={5}
          /> */}
          <div className=" buttons flex flex-col ml-10 sm:flex-row sm:justify-center ">
            <a  href={"/past-community"} className="my-2 w-fit">
              <RepoButton ButtonName={"Past Community"} />
            </a>
          </div>
        {/* </Xwrapper> */}

      </div>
    </div>
  );
};

export default Community;
