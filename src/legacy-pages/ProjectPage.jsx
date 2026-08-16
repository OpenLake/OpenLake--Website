import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {
  HeaderDot,
  RepoButton,
  LivePreviewButton,
  StatsCard,
} from "../components";
// import Xarrow, { Xwrapper } from "react-xarrows";
import { repoavatar, github, img1 } from "../assets";
import "../assets/css/projectpage.css";

function ProjectPage() {
  // const box1Ref = useRef(null);
  // const box2Ref1 = useRef(null);
  // const box2Ref2 = useRef(null);
  // const box2Ref3 = useRef(null);
  // const box2Ref4 = useRef(null);
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
    <div>
    {/* <div className="flex flex-row mx-0 md:mx-18 "> */}
      <div className="p-8">
        <div className="relative flex flex-col md:flex-row justify-between gap-6 sm:gap-2 px-0 md:py-4 md:px-8">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-fit">
              <HeaderDot />
            </div>
            <div className="flex flex-row sm:justify-evenly md:justify-start gap-2">
              <img src={repoavatar} alt="repoavatar" className="w-8 md:w-10" />
              <h1 className="pointer-events: all text-white text-[20px] md:text-[40px] md:max-w-fit font-semibold md:leading-10 capitalize">
                {project.name}
              </h1>
            </div>
          </div>
          <div className=" buttons flex flex-col gap-0 ml-10 sm:gap-5 sm:flex-row sm:justify-center ">
            <a href={project.html_url} className="my-2 w-fit">
              <RepoButton ButtonName={"Github Repo"} />
            </a>
            <a href={project.homepage} className="my-2 w-fit">
              <LivePreviewButton />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div>
            <div className="relative flex flex-row sm:ml-2 md:ml-32 gap-6 sm:gap-16 py-4 px-8">
                {/* <Xarrow
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
                <div className="flex flex-col justify-between mb-10 sm:mb-0">
                  <h1 className="repo-name">
                    Description
                  </h1>
                  <p className=" pl-3 text-[#ffffff80] font-medium text-lg">
                    {project.description}
                  </p>
                </div>
            </div>

            <div className="relative flex flex-row sm:ml-2 md:ml-32 gap-6 sm:gap-16 py-4 px-8">
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
                <div className="flex flex-col justify-between sm:mb-5 md:mb-10 ">
                  <h1 className="repo-name">
                    Screenshots
                  </h1>
                  <img className="ml-1 md:ml-32 w-3/5" src={img1} alt="img1" />
                </div>
              {/* </Xwrapper> */}
            </div>
            <div className="relative flex flex-row sm:ml-2 md:ml-32 gap-6 sm:gap-16 py-4 px-8">
              {/* <Xwrapper>
                <Xarrow
                  start={box1Ref}
                  end={box2Ref3}
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
                <div className="flex flex-col justify-between sm:mb-5 md:mb-10 ">
                  <h1 className="repo-name">
                    Maintainers
                  </h1>
                  <ul className="ml-10 ">
                    {contributors.map((contributor) => (
                      <li key={contributor.id}>
                        <a
                          className="pointer-events-auto flex flex-row align-middle content-center justify-center text-[#ffffff80] font-medium text-lg"
                          href={contributor.html_url}
                        >
                          {contributor.login}
                          <img
                            className="m-2"
                            src={github}
                            alt={contributor.login}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              {/* </Xwrapper> */}
            </div>
          </div>
          <div className="flex flex-col mb-10 sm:mb-5  ">
            <h1 className="repo-name">
              Statistics
            </h1>
            <StatsCard repo={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
