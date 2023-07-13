import React from "react";
import "./css/StatsCard.css";
function StatsCard({ repo }) {
  return (
    <div className="repo-card ">
      <div className="repo-title ">
        <span>{repo.name}</span>
      </div>
      <div className="flex flex-row justify-center">
        <div className="repo-stats grid grid-cols-2 gap-2 ">

          <div className="stat">
            <span className="stat-label">🌟Total Stars:</span>
          </div>
          <div className="stat ">
            <span className="stat-value">{repo.stargazers_count}</span>
          </div>

          <div className="stat ">
            <span className="stat-label">📝Total Commits:</span>
          </div>
          <div className="stat ">
            <span className="stat-value">{repo.forks_count}</span>
          </div>

          <div className="stat ">
            <span className="stat-label">📄Total PRs:</span>
          </div>
          <div className="stat ">
            <span className="stat-value">{repo.forks_count}</span>
          </div>

          <div className="stat ">
            <span className="stat-label">❗️Total Issues:</span>
          </div>
          <div className="stat ">
            <span className="stat-value">{repo.open_issues}</span>
          </div>

          <div className="stat ">
            <span className="stat-label">🍴Forks:</span>
          </div>
          <div className="stat ">
            <span className="stat-value">{repo.forks_count}</span>
          </div>

          <div className="stat ">
            <span className="stat-label">👀Watchers:</span>
          </div>
          <div className="stat ">
            <span className="stat-value">{repo.watchers_count}</span>
          </div>

        </div>


      </div>
      <div className="repo-link ">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button >View Repository</button>

        </a>
      </div>

    </div>
  );
}

export default StatsCard;
