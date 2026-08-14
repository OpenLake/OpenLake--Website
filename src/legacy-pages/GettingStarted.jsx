import React from "react";
import PageHeader from "../components/PageHeader";
import { sections } from "../constants/sections";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <div className="mx-auto text-white max-w-7xl p-4 md:p-8">
      <PageHeader
        mainTitle="Resources"
        subTitle="Getting Started with Open Source"
      />
      <section className="space-y-8">
        <div className="flex flex-wrap gap-8">
          {sections.map((section, i) => (
            <div
              key={i}
              className={section.width ? section.width : "w-full"}
            >
              <SectionCard section={section} />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <Link
            to="/Contributor-pathways"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            Contributor Pathways →
          </Link>
        </div>
      </section>
    </div>
  );
};

const SectionCard = ({ section }) => (
  <div className="bg-gray-800 rounded p-5 shadow">
    <h3 className="text-xl font-semibold mb-2">
      {section.icon} {section.title}
    </h3>

    {section.content && <p>{section.content}</p>}

    {section.list && (
      <ul className="list-disc ml-5 space-y-1 mt-2">
        {section.list.map((item, idx) => (
          <li key={idx}>
            <code>{item}</code>
          </li>
        ))}
      </ul>
    )}

    {section.extra && <p className="mt-2">{section.extra}</p>}

    {section.listWithBold && (
      <ul className="list-disc ml-5 space-y-1">
        {section.listWithBold.map((item, idx) => (
          <li key={idx}>
            <strong>{item.bold}</strong> {item.text}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default GettingStarted;