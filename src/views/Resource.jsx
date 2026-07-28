import React, { useState, useRef } from "react";
import { HeaderDot } from "../components";
import "../assets/css/Resources.css";
import Xarrow from "react-xarrows";
import { FaFilter } from "react-icons/fa";
import resources from "../constants/resourcesData"; // Imported resources data

const Resource = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const resourceTypes = ["All", ...Array.from(new Set(resources.map((r) => r.type)))];

  const toggleDropdown = () => setIsDropdownOpen((s) => !s);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === "All" || res.type === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      res.name.toLowerCase().includes(q) ||
      res.type.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-row gap-2 md:gap-10">
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
          />
          <div className="HeaderDot" ref={box2Ref}>
            <HeaderDot />
          </div>
          <h1 className="relative text-white text-3xl md:text-5xl font-bold leading-tight">
            Resources
          </h1>
        </div>

        {/* Content section */}
        <div className="relative flex flex-col md:flex-row sm:ml-2 md:ml-32 gap-10 py-6 px-4 md:px-8 items-start">
          <div className="w-full md:w-2/3">
            <h1 ref={box1Ref} className="repo-name font-[700] text-lg md:text-2xl text-white">
              {selectedCategory} Resources
            </h1>
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">🎯 Objective</h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The <span className="font-semibold text-white">Resources</span> section provides a curated
              list of tools, frameworks, and documentation to help you learn and build.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-left md:text-right space-y-4">
            {[
              { href: "/getting-started", text: "Getting Started with Open Source" },
              { href: "/Contributor-pathways", text: "Contributor Pathways" },
              { href: "/Issue-hunting", text: "Issue-hunting and Contribution Guide" },
              { href: "/Curated-extrenal-resources", text: "Curated External Resources" },
              { href: "/Glossary", text: "Glossary" },
            ].map((link, idx, arr) => (
              <div key={idx}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:underline text-base md:text-lg leading-relaxed"
                >
                  {link.text}
                </a>
                {idx < arr.length - 1 && <hr className="my-3 border-gray-700" />}
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 px-2">
          <input
            type="text"
            placeholder="Search Resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 text-lg"
          />
        </div>

        {/* Category Buttons + Filter */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2">
          {/* Category Buttons */}
          <div className="category-buttons flex flex-wrap gap-3">
            {resourceTypes.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-lg border text-base md:text-lg ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Button */}
          <div className="filter-container relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 text-lg"
            >
              <FaFilter />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-20">
                {resourceTypes.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`block w-full text-left px-4 py-2 text-base hover:bg-gray-800 ${
                      selectedCategory === cat ? "bg-gray-700 font-semibold" : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Resource Cards */}
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 items-stretch"
        >
          {filteredResources.map((res, index) => (
            <div
              key={res.id}
              className={`p-4 rounded-lg shadow-md bg-gray-900 text-white flex flex-col h-auto space-y-3 transition-all duration-300 ${
                index % 2 === 0
                  ? "animate__animated animate__backInLeft"
                  : "animate__animated animate__backInRight"
              }`}
              style={{ minWidth: "fit-content" }}
            >
              <h2 className="font-semibold text-lg flex items-center gap-2">
                {res.image && (
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-6 h-6 object-contain inline-block"
                  />
                )}
                {res.name}
              </h2>
              <p className="text-sm text-gray-400">{res.type}</p>
              {res.video && (
                <p>
                  Video:{" "}
                  <a
                    href={res.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline"
                  >
                    {res.video}
                  </a>
                </p>
              )}
              {res.description && <p className="text-gray-300 text-sm">{res.description}</p>}
              {res.link && (
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-auto"
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
          {filteredResources.length === 0 && (
            <p className="text-gray-400">No resources found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resource;