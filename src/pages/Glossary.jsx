import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { glossaryItems } from "../constants/glossary";

const Glossary = () => {
  return (
    <div className="mx-auto text-white">
      <PageHeader subTitle="Glossary of Common Open Source Terms" />
      <div className="p-10 md:p-10 max-w-6xl mx-auto text-gray-200">
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {glossaryItems.map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-5 shadow flex flex-col">
                <span className="font-bold text-blue-300 mb-1">{item.term}</span>
                <span className="text-gray-300 text-sm">{item.description}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-16">
          <Link
            to="/Curated-extrenal-resources"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            ← Issue Hunting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
