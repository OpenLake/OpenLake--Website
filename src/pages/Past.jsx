import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  HeaderDot,
  RepoButton,
  LivePreviewButton,
  StatsCard,
} from "../components";
import Xarrow, { Xwrapper } from "react-xarrows";
import { repoavatar, github, img1 } from "../assets";
import "../assets/css/community.css";
const Past = () => {
  const box1Ref = useRef(null);
  const box2Ref1 = useRef(null);
  const box2Ref2 = useRef(null);
  const box2Ref3 = useRef(null);
  const box2Ref4 = useRef(null);
  let { id } = useParams();
  const [project, setProject] = useState(null);
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repositories/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        fetchContributors(data.contributors_url);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const fetchContributors = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
      })
      .catch((error) => console.error(error));
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" min-h-screen ">
      <div className="p-8">
        <div className="relative flex flex-col md:flex-row justify-between gap-6 sm:gap-20 px-0 md:py-4 md:px-8">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-fit" ref={box1Ref}>
              <HeaderDot />
            </div>
            <div className="flex flex-row sm:justify-evenly md:justify-start gap-2">
              <img src={repoavatar} alt="repoavatar" className="w-8 md:w-10" />
              <h1 className="pointer-events: all text-white text-[20px] md:text-[40px] font-semibold md:leading-10 uppercase">
                Community
              </h1>
            </div>
          </div>
          <div className=" buttons flex flex-col ml-10 sm:flex-row sm:justify-center ">
            <a href={"https://github.com/OpenLake"} className="my-2 w-fit">
              <RepoButton />
            </a>
          </div>
        </div>
        <div className="relative flex flex-row sm:ml-2 md:ml-10 gap-6 sm:gap-16 py-4 px-8">
          <Xwrapper>
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
            />
            <div className="box">
              <div className="rectangle-wrapper">
                <div
                  ref={box2Ref1}
                  className="rectangle flex flex-col justify-start align-middle"
                >
                  <div className="timeline justify-center">2023-24</div>
                  <div>
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
                </div>
              </div>
            </div>
          </Xwrapper>
        </div>
      </div>
    </div>
  );
};

export default Past;
