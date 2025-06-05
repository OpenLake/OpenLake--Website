import { useState } from "react";
import React from "react";
import WhatIsOpenSource from "../constants/Resources/whatIsOpenSource";
import GitAndGitHub from "../constants/Resources/GitAndGitHub"
import CommonTools from "../constants/Resources/CommonTools"
import FrontendDevelopment from "../constants/Resources/FrontendDevelopment"
import BackendDevelopment from "../constants/Resources/BackendDevelopment"
import DevopsAndInfra from "../constants/Resources/DevopsAndInfra"
import OpenSourceProgramGuide from "../constants/Resources/OpenSourceProgramGuide"
import GoodCommit from "../constants/Resources/GoodCommit";
import GoodFirstIssue from "../constants/Resources/GoodFirstIssue";
import Communication from "../constants/Resources/Communication";
import CleanCode from "../constants/Resources/CleanCode"
import "../assets/css/ResourcePage.css"
const Resource = () => {
  // State to track if submenu is open
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    gettingStarted: false,
    contributorsPathway: false,
    issueHunting:false
  });

  // Toggle the submenu
  
  const toggleSubmenu = (key) => {
    setIsSubmenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [resource, whichArticle] = useState("WhatIsOpenSource")
  
  return (
    <div className="resources-container">
      <aside className="resources-sidebar">
        <nav className="resources-nav">
          <ul className="resources-list">
            <li>
              <button
                onClick={() => toggleSubmenu("gettingStarted")}
                className="resources-button"
              >
                Getting Started
              </button>
              {isSubmenuOpen["gettingStarted"] && (
                <ul className="resources-submenu">
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("WhatIsOpenSource")}
                    >
                      What is Open Source?
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("GitAndGitHub")}
                    >
                      Git & GitHub Essentials
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("CommonTools")}
                    >
                      Common Tools
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleSubmenu("contributorsPathway")}
                className="resources-button"
              >
                Contributor Pathways
              </button>
              {isSubmenuOpen["contributorsPathway"] && (
                <ul className="resources-submenu">
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("FrontendDevelopment")}
                    >
                      Frontend Development
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("BackendDevelopment")}
                    >
                      Backend Development
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("DevopsAndInfra")}
                    >
                      DevOps & Infra
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("OpenSourceProgramGuide")}
                    >
                      Open Source Program Guides
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleSubmenu("issueHunting")}
                className="resources-button"
              >
                Issue-Hunting & Contribution Guide
              </button>
              {isSubmenuOpen["issueHunting"] && (
                <ul className="resources-submenu">
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("GoodFirstIssue")}
                    >
                      How to find good first issues
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("Communication")}
                    >
                      How to communicate with maintainers
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("CleanCode")}
                    >
                      How to write clean, review-friendly code
                    </button>
                  </li>
                  <li>
                    <button
                      className="resources-submenu-button"
                      onClick={() => whichArticle("GoodCommit")}
                    >
                      Writing good commit messages
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="resources-link">
                External Resources
              </a>
            </li>
            <li>
              <a href="#" className="resources-link">
                Glossary
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="resources-content">
        {resource === "WhatIsOpenSource" && <WhatIsOpenSource />}
        {resource === "GitAndGitHub" && <GitAndGitHub />}
        {resource === "CommonTools" && <CommonTools />}
        {resource === "FrontendDevelopment" && <FrontendDevelopment />}
        {resource === "BackendDevelopment" && <BackendDevelopment />}
        {resource === "DevopsAndInfra" && <DevopsAndInfra />}
        {resource === "OpenSourceProgramGuide" && <OpenSourceProgramGuide />}
        {resource === "Communication" && <Communication />}
        {resource === "GoodCommit" && <GoodCommit />}
        {resource === "GoodFirstIssue" && <GoodFirstIssue />}
        {resource === "CleanCode" && <CleanCode />}
      </main>
    </div>
  );
};

export default Resource;
