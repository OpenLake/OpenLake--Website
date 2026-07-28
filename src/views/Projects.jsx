import React, { useEffect, useState, useRef } from "react";
import { HeaderDot, Card } from "../components";
import "../assets/css/projects.css";
import Xarrow from "react-xarrows";
import { FaFilter } from "react-icons/fa";
const Projects = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // useEffect(() => {
  //   fetch("https://api.github.com/users/openlake/repos")
  //     .then((response) => response.json())
  //     .then((data) => setRepos(data))
  //     .catch((error) => console.error(error));
  // }, []);
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

  useEffect(() => {
    if (selectedLanguage === "") {
      setFilteredRepos(repos.slice(1)); // Exclude the first repo
    } else {
      const filtered = repos.filter(
        (repo) => repo.language === selectedLanguage
      );
      setFilteredRepos(filtered); // Exclude the first repo
    }
  }, [repos, selectedLanguage]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleCardFlip = (id) => {
    setFilteredRepos((prevRepos) => {
      const updatedRepos = prevRepos.map((repo) => {
        if (repo.id === id) {
          return {
            ...repo,
            flipped: !repo.flipped,
          };
        }
        return repo;
      });
      return updatedRepos;
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <div>
        <div className="p-4 md:p-8">
          <div className="flex flex-row gap-2 md:gap-10">
            {/* <div style={{ position: "relative" }}> */}
              <Xarrow
                start={box2Ref}
                end={box1Ref}
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
            {/* </div> */}

            <div className="HeaderDot" ref={box2Ref}>
              <HeaderDot />
            </div>
            <h1 className="relative text-white text-[40px] font-semibold leading-10">
              Projects
            </h1>
          </div>
          <div className="relative flex flex-row sm:ml-2 md:ml-32 gap-6 sm:gap-16 py-4 px-4 md:px-8">
            <div className="w-full">
              <div className="pointer-events-auto flex flex-col md:flex-row-reverse justify-between sm:mb-5 md:mb-10 ">
                {/* <select value={selectedLanguage} onChange={handleLanguageSelect}>
                <option value="">All Languages</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>w-full
                <option value="C++">C++</option>
                <option value="HTML">HTML</option> */}
                {/* Add more options for other languages */}
                {/* </select> */}
                <div className="flex flex-col-reverse items-end">
                  <button className="filter-icon" onClick={toggleDropdown}>
                    <FaFilter />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu flex flex-col justify-end">
                      <button
                        className={`dropdown-item ${selectedLanguage === "" ? "selected" : ""
                          }`}
                        onClick={() => handleLanguageSelect("")}
                      >
                        All Languages
                      </button>
                      <button
                        className={`dropdown-item ${selectedLanguage === "JavaScript" ? "selected" : ""
                          }`}
                        onClick={() => handleLanguageSelect("JavaScript")}
                      >
                        JavaScript
                      </button>
                      <button
                        className={`dropdown-item ${selectedLanguage === "Python" ? "selected" : ""
                          }`}
                        onClick={() => handleLanguageSelect("Python")}
                      >
                        Python
                      </button>
                      <button
                        className={`dropdown-item ${selectedLanguage === "C++" ? "selected" : ""
                          }`}
                        onClick={() => handleLanguageSelect("C++")}
                      >
                        C++
                      </button>
                      <button
                        className={`dropdown-item ${selectedLanguage === "HTML" ? "selected" : ""
                          }`}
                        onClick={() => handleLanguageSelect("HTML")}
                      >
                        HTML
                      </button>
                      {/* Add more buttons for other languages */}
                    </div>
                  )}
                </div>
                <h1 ref={box1Ref} className="repo-name font-[600]">
                  {selectedLanguage} Repositories
                </h1>
              </div>
              <div className="repo-cards">
                {Array.isArray(filteredRepos) ? (
                  filteredRepos.map((repo, index) => (
                    <Card
                      key={repo.id}
                      repo={repo}
                      onClick={handleCardFlip}
                      className={
                        index % 8 === 0 ||
                          index % 8 === 2 ||
                          index % 8 === 5 ||
                          index % 8 === 7
                          ? "even-card animate__animated animate__backInLeft"
                          : "odd-card animate__animated animate__backInRight"
                      }
                    />
                  ))
                ) : (
                  <p>No repositories found</p>
                )}
              </div>
              {/* <AdvancedCarousel/> */}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
