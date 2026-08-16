import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { issueHunting } from "../constants/issueHunting";

const IssueHunting = () => {
  return (
    <div className="mx-auto text-white">
      <PageHeader subTitle="Issue-hunting and Contribution Guide" />
      <div className="p-10  md:p-10 max-w-6xl mx-auto text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {issueHunting.columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-8">
              {col.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-gray-800 rounded p-5 shadow">
                  <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
                  <ul className="list-disc ml-5 space-y-2 text-gray-300">
                    {item.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-16">
          <Link
            to="/contributor-pathways"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            ← Contributor Pathways
          </Link>

          <Link
            to="/Curated-extrenal-resources"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            External Resources →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssueHunting;
