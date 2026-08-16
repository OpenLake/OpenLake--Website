import React, { useEffect, useState } from "react";
import { HeaderDot, RepoButton, MemberCard } from "../components";
import { repoavatar } from "../assets";
import "../assets/css/community.css";
import { Mentors, Coordinators ,Maintainers, Outreachers, Designers } from "../constants";
import { background } from "@chakra-ui/react";

const Community = () => {
  const [coordinators, setCoordinators] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [maintainers, setMaintainers] = useState([]);
  const [outreachers, setOutreachers] = useState([]);
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    setMentors(Mentors[2025]);
  }, []);

  useEffect(() => {
    setCoordinators(Coordinators[2025]);
  }, []);
  useEffect(() => {
    setMaintainers(Maintainers[2025]);
  }, []);
  useEffect(() => {
    setOutreachers(Outreachers[2025]);
  }, []);
  useEffect(() => {
    setDesigners(Designers[2025]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="p-8 w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-20">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-fit">
              <HeaderDot />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={repoavatar} alt="repoavatar" className="w-8 md:w-10" />
              <h1 className="text-white text-[20px] md:text-[40px] font-semibold md:leading-10 uppercase">
                Community
              </h1>
            </div>
          </div>
          <div className="buttons flex flex-col sm:flex-row sm:justify-center">
            <a href={"https://github.com/OpenLake"} className="my-2 w-fit">
              <RepoButton ButtonName={"Openlake Github"} />
            </a>
          </div>
        </div>

        {/* Body Section */}
        <div className="relative flex justify-center py-8">
          <div className="box w-full max-w-6xl">
            <div className="rectangle-wrapper flex justify-center">
              <div className="rectangle flex flex-col items-center gap-6 w-full">
                <div className="timeline w-full flex justify-center text-center text-xl font-semibold">2025-26</div>
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
                {/*<h2 className="text-white text-2xl font-semibold text-center">
                  Corrdinator
                </h2>*/}
                <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-10 mb-2">
                  {coordinators.map((mentor) => (
                    <MemberCard key={mentor.id} member={mentor} />
                  ))}
                </div>
                <h2 className="text-white text-2xl font-semibold text-center">
                  Mentors
                </h2>
                <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-10 mb-2">
                  {mentors.map((mentor) => (
                    <MemberCard key={mentor.name} member={mentor} />
                    ))}
                </div>
                <h2 className="text-white text-2xl font-semibold text-center">
                  Maintainers
                </h2>
                <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-10 mb-2">
                  {maintainers.map((maintainer) => (
                    <MemberCard key={maintainer.name} member={maintainer} />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                  <div>
                    <h2 className="text-white text-2xl font-semibold text-center mb-4">
                      Outreach
                    </h2>
                    <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-10">
                      {outreachers.map((outreach) => (
                        <MemberCard key={outreach.name} member={outreach} showSocials={false}/>
                        ))}
                    </div>
                  </div>
                  <div class="pl-20">
                    <h2 className="text-white text-2xl font-semibold text-center mb-4">
                      Designer
                    </h2>
                    <div className="animate__animated animate__fadeIn animate__delay-0.5s flex flex-wrap justify-center gap-10">
                      {designers.map((designer) => (
                        <MemberCard key={designer.name} member={designer} showSocials={false}/>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons flex flex-col sm:flex-row sm:justify-center mt-10">
          <a href={"/past-community"} className="my-2 w-fit">
            <RepoButton ButtonName={"Past Community"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;