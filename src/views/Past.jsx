import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faUsers, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { repoavatar } from "../assets";
import "../assets/css/past.css";
import { HeaderDot, RepoButton } from "../components";
import { Coordinators, Mentors, Maintainers } from "../constants"; 
import "@fortawesome/fontawesome-free/css/all.min.css";

const Past = () => {
  const box1Ref = useRef(null);
  // Get years in descending order (newest first)
  const years = Object.keys(Coordinators).sort((a, b) => b - a);
  return (
    <div className="min-h-screen">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-20 px-0 md:py-4 md:px-8">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-fit" ref={box1Ref}>
              <HeaderDot />
            </div>
            <div className="flex flex-row sm:justify-evenly md:justify-start gap-2">
              <img src={repoavatar} alt="repoavatar" className="w-8 md:w-10" />
              <h1 className="text-white text-[20px] md:text-[40px] font-semibold md:leading-10 uppercase">
                Past Community
              </h1>
            </div>
          </div>
          <div className="buttons flex flex-col ml-10 sm:flex-row sm:justify-center">
            <a href={"https://github.com/OpenLake"} className="my-2 w-fit">
              <RepoButton ButtonName={"Openlake Github"} />
            </a>
          </div>
        </div>
        <VerticalTimeline lineColor="#2B86AE">
          {years.map((year) => {
            const nextYear = parseInt(year) + 1;
            const dateRange = `${year} - ${nextYear}`;
            // decide positions (first block 2024 = left, then alternate)
            let baseIndex = years.indexOf(year) * 2; // each year has 2–3 blocks
            const coordinatorPos = baseIndex % 2 === 0 ? "left" : "right";
            const mentorPos = coordinatorPos === "left" ? "right" : "left";

            return (
              <React.Fragment key={year}>
                {/* Coordinator Element */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  position={coordinatorPos}
                  contentStyle={{ 
                    background: "linear-gradient(270deg, #161616 0%, #141C24 100%)", 
                    color: "#fff" 
                  }}
                  contentArrowStyle={{
                    borderRight: "20px solid #28A9E2",
                  }}
                  date={dateRange}
                  iconStyle={{ background: "#141C24", color: "#fff" }}
                  icon={<FontAwesomeIcon icon={faPerson} />}
                >
                  <h1 className="vertical-timeline-element-title">Coordinators</h1>
                  <hr />
                  <ul className="mt-4 space-y-3">
                    {Coordinators[year].map((coordinator, index) => (
                      <li className="vertical-timeline-element-subtitle flex items-center" key={index}>
                        <span className="mr-2">{coordinator.name}</span>
                        <div className="flex space-x-3 ml-2">
                          {coordinator.github && (
                            <a 
                              href={coordinator.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                              <i className="fab fa-github social-icon"></i>
                            </a>
                          )}
                          {coordinator.linkedln && (
                            <a 
                              href={coordinator.linkedln} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                              <i className="fab fa-linkedin-in social-icon"></i>
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>

                {/* Mentor Element */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  position={mentorPos}
                  contentStyle={{ 
                    background: "linear-gradient(270deg, #141C24 0%, #161616 100%)", 
                    color: "#fff" 
                  }}
                  contentArrowStyle={{
                    borderRight: "20px solid #2B86AE",
                  }}
                  date={dateRange}
                  iconStyle={{ background: "#141C24", color: "#fff" }}
                  icon={<FontAwesomeIcon icon={faUsers} />}
                >
                  <h1 className="vertical-timeline-element-title">Mentors</h1>
                  <hr />
                  <ul className="mt-4 space-y-3">
                    {Mentors[year].map((mentor, index) => (
                      <li className="vertical-timeline-element-subtitle flex items-center" key={index}>
                        <span className="mr-2">{mentor.name}</span>
                        <div className="flex space-x-3 ml-2">
                          {mentor.github && (
                            <a 
                              href={mentor.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                              <i className="fab fa-github social-icon"></i>
                            </a>
                          )}
                          {mentor.linkedln && (
                            <a 
                              href={mentor.linkedln} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                              <i className="fab fa-linkedin-in social-icon"></i>
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>

                {/* Maintainer Element */}
                {year === "2025" && (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    position={mentorPos === "right" ? "right" : "left"} // alternate properly
                    contentStyle={{ 
                      background: "linear-gradient(270deg, #161616 0%, #141C24 100%)", 
                      color: "#fff" 
                    }}
                    contentArrowStyle={{
                      borderRight: "20px solid #2B86AE", 
                    }}
                    date={dateRange}
                    iconStyle={{ background: "#141C24", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faLaptop} />}
                  >
                    <h1 className="vertical-timeline-element-title">Maintainers</h1>
                    <hr />
                    <ul className="mt-4 space-y-3">
                      {Maintainers[year].map((maintainer, index) => (
                        <li className="vertical-timeline-element-subtitle flex items-center" key={index}>
                          <span className="mr-2">{maintainer.name}</span>
                          <div className="flex space-x-3 ml-2">
                            {maintainer.github && (
                              <a 
                                href={maintainer.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-colors"
                              >
                                <i className="fab fa-github social-icon"></i>
                              </a>
                            )}
                            {maintainer.linkedln && (
                              <a 
                                href={maintainer.linkedln} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-colors"
                              >
                                <i className="fab fa-linkedin-in social-icon"></i>
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                )}
              </React.Fragment>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Past;
