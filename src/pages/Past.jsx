import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faUsers } from "@fortawesome/free-solid-svg-icons";
import { repoavatar } from "../assets";
import "../assets/css/past.css";
import { HeaderDot, RepoButton } from "../components";
import {
  Mentors2023,
  Mentors2022,
  Mentors2021,
  Coordinator2021,
  Coordinator2022,
  Coordinator2023,
} from "../constants";
// import Xarrow from "react-xarrows";
const Past = () => {
  const box1Ref = useRef(null);
  // const box2Ref1 = useRef(null);

  return (
    <div className=" min-h-screen ">
      <div className="p-8">
        <div className=" flex flex-col md:flex-row justify-between gap-6 sm:gap-20 px-0 md:py-4 md:px-8">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-fit" ref={box1Ref}>
              <HeaderDot />
            </div>
            <div className="flex flex-row sm:justify-evenly md:justify-start gap-2">
              <img src={repoavatar} alt="repoavatar" className="w-8 md:w-10" />
              <h1 className=" text-white text-[20px] md:text-[40px] font-semibold md:leading-10 uppercase">
                Past Community
              </h1>
            </div>
          </div>
          <div className=" buttons flex flex-col ml-10 sm:flex-row sm:justify-center ">
            <a href={"https://github.com/OpenLake"} className="my-2 w-fit">
              <RepoButton ButtonName={"Openlake Github"} />
            </a>
          </div>
        </div>

        <VerticalTimeline lineColor= "#2B86AE">
        
          {/* <Xarrow
          start={box1Ref}
          end={box2Ref1}
          color="#2B86AE"
          strokeWidth={2}
          headSize={15}
          tailSize={15}
          showHead={false}
          startAnchor="bottom"
          endAnchor="top"
          path="smooth"
          edge={5}
          zIndex={0}
          lineColor="#2B86AE"
          pathColor="#2B86AE"
          startEdge={5}
          endEdge={5}
        /> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "linear-gradient(270deg, #161616 0%, #141C24 100%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "20px solid #28A9E2",
            }}
            date="2023 - 2024"
            iconStyle={{ background: "#141C24", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faPerson} />}
            
          >
            <h1 className="vertical-timeline-element-title">Coordinators</h1>
            <hr />
            <ul>
              {Coordinator2023.map((item, index) => (
                <li className="vertical-timeline-element-subtitle" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "linear-gradient(270deg, #141C24 0%, #161616 100%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "20px solid #2B86AE",
            }}
            date="2023 - 2024"
            iconStyle={{ background: "#141C24", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h1 className="vertical-timeline-element-title">Coordinators</h1>
            <hr />
            <ul>
              {Mentors2023.map((item, index) => (
                <li className="vertical-timeline-element-subtitle" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "linear-gradient(270deg, #161616 0%, #141C24 100%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "20px solid #2B86AE",
            }}
            date="2022 - 2023"
            iconStyle={{ background: "#141C24", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faPerson} />}
          >
            <h1 className="vertical-timeline-element-title">Coordinators</h1>
            <hr />
            <ul>
              {Coordinator2022.map((item, index) => (
                <li className="vertical-timeline-element-subtitle" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "linear-gradient(270deg, #141C24 0%, #161616 100%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "20px solid #2B86AE",
            }}
            date="2022 - 2023"
            iconStyle={{ background: "#141C24", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h1 className="vertical-timeline-element-title">Coordinators</h1>
            <hr />
            <ul>
              {Mentors2022.map((item, index) => (
                <li className="vertical-timeline-element-subtitle" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "linear-gradient(270deg, #161616 0%, #141C24 100%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "20px solid #2B86AE",
            }}
            date="2021 - 2022"
            iconStyle={{ background: "#141C24", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faPerson} />}
          >
            <h1 className="vertical-timeline-element-title">Coordinators</h1>
            <hr />
            <ul>
              {Coordinator2021.map((item, index) => (
                <li className="vertical-timeline-element-subtitle" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "linear-gradient(270deg, #141C24 0%, #161616 100%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "20px solid #2B86AE",
            }}
            date="2021 - 2022"
            iconStyle={{ background: "#141C24", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h1 className="vertical-timeline-element-title">Coordinators</h1>
            <hr />
            <ul>
              {Mentors2021.map((item, index) => (
                <li className="vertical-timeline-element-subtitle" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Past;
