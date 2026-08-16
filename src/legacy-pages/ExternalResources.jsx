import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { externalResources } from "../constants/externalResources";

const ExternalResources = () => {
  const { sections } = externalResources;

  return (
    <div className="mx-auto text-white">
      <PageHeader subTitle="Curated External Resources" />

      <div className="p-10 md:p-8 max-w-6xl mx-auto text-gray-200">
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className={`bg-gray-800 rounded p-5 shadow space-y-2 ${
                  section.fullWidth ? "col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{section.heading}</h3>
                <ul className="list-disc ml-5 text-gray-300 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-between mt-16">
          <Link
            to="/issue-hunting"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
              ← Issue Hunting
          </Link>
          <Link
              to="/Glossary"
              className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            Glossary →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExternalResources;
