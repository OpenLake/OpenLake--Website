import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { contributorPathways } from "../constants/contributorPathways";

const ContributorPathways = () => {
  return (
    <div className="mx-auto text-white">
      <PageHeader subTitle="Contributor Pathways and Guides" />
      <div className="p-4 md:pl-20 md:p-8 max-w-7xl mx-auto space-y-14">
        {contributorPathways.map((section, idx) => (
          <Section key={idx} section={section} />
        ))}
        <div className="flex justify-between mt-16">
          <Link
            to="/getting-started"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            ← Getting Started
          </Link>
          <Link
            to="/issue-hunting"
            className="bg-[#18302c] border border-[#335555] text-white font-semibold px-6 py-3 rounded hover:bg-[#15342c] transition"
          >
            Issue Hunting →
          </Link>
        </div>
      </div>
    </div>
  );
};

const Section = ({ section }) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {section.columns.map((col, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-bold mb-2">{col.heading}</h3>
          <ul className="space-y-3 text-gray-300">
            {col.items.map((item, i) => (
              <li
                key={i}
                className={`bg-gray-800 rounded p-4 ${
                  item.button ? "flex justify-between items-center" : ""
                }`}
              >
                {item.text}
                {item.button && (
                  <button
                    className={`bg-${item.button.color}-600 px-4 py-1 rounded text-white`}
                  >
                    {item.button.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ContributorPathways;
