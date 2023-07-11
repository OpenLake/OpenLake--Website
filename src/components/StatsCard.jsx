import React from "react";
import "./css/StatsCard.css";
import { motion } from "framer-motion"; // Import the CSS file for the card design
function StatsCard({ repo }) {
  return (
    <div className="repo-card w-1/2">
      <div classNama="repo-title">
        <span>{repo.name}</span>
      </div>
      <div className="flex flex-row content-center">
        <div className="repo-stats grid grid-cols-3 gap-4">
          <div className="stat flex items-center">
            <span className="stat-icon">🌟</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-label">Total Stars Earned:</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-value">{repo.stargazers_count}</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-icon">📝</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-label">Total Commits:</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-value">{repo.forks_count}</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-icon">📄</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-label">Total PRs:</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-value">{repo.forks_count}</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-icon">❗️</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-label">Total Issues:</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-value">{repo.open_issues}</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-icon">🍴</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-label">Forks:</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-value">{repo.forks_count}</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-icon">👀</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-label">Watchers:</span>
          </div>
          <div className="stat flex items-center">
            <span className="stat-value">{repo.watchers_count}</span>
          </div>
        </div>

        <a
          className="repo-link bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
      </div>
    </div>
  );
}

export default StatsCard;
