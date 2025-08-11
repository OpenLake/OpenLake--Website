import React, { useState } from "react";
import Resources, { Headings } from "../constants/Resources/Resources";
import "../assets/css/ResourcePage.css";
import { sidebarbtn } from "../assets";
const Resource = () => {
  const Resourcessorted = Resources.sort((a, b) => a.id - b.id);
  const [openDropdown, setOpenDropdown] = useState({});
  const [selectedContent, setSelectedContent] = useState(Resourcessorted[0]);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const toggleDropdown = (idx) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  const functoggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };
  return (
    <div className="resources-container">
      {/* Sidebar */}
      
      {toggleSidebar ?
        <div className="sidebar">
        <div className="togglesidebar" >
          <button className="togglesidebarbtn" onClick={functoggleSidebar} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-sidebar-inset" viewBox="0 0 16 16">
              <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" />
              <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
            </svg>
          </button>
        </div>
        {Headings.map((heading, idx) => (
          <div key={idx} className="sidebar-section">
            <button className="heading-button" onClick={() => toggleDropdown(idx)}>
              {heading} <span>{openDropdown[idx] ? "▲" : "▼"}</span>
            </button>

            {openDropdown[idx] && (
              <ul className="item-list">
                {Resourcessorted.map(
                  (item) =>
                    Math.floor(item.id / 100) === idx && (
                      <li key={item.id}>
                        <button
                          className="item-button"
                          onClick={() => setSelectedContent(item)}
                        >
                          {item.title}
                        </button>
                      </li>
                    )
                )}
              </ul>
            )}
          </div>
        ))}
        
      </div>:
      <div className="hidden-sidebar">
        <div className="togglesidebar" >
          <button className="togglesidebarbtn" onClick={functoggleSidebar} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-sidebar-inset" viewBox="0 0 16 16">
              <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" />
              <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
            </svg>
          </button>
        </div>
        
        
      </div>
      }
      {/* Main content */}
      <div className="main-content">
        {selectedContent && selectedContent.description ? (
          <div className="article-wrapper">
            <div className="article-meta">
              <span className="article-tag">{selectedContent.tag}</span>
              <span>{selectedContent.time} read</span>
            </div>
            <div className="article-title">{selectedContent.title}</div>
            <div className="article-description">{selectedContent.description}</div>
            <div className="article-content">{selectedContent.content}</div>
          </div>
        ) : (
          <div className="placeholder">Select an article to view</div>
        )}
      </div>
    </div>
  );
};

export default Resource;
