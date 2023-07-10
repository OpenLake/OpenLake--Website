import React from "react";
import "./css/StatsCard.css";
import { motion } from "framer-motion"; // Import the CSS file for the card design
function StatsCard({ repo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="repo-card "
    >
      <div className="repo-stats">
        <div className="stat">
          <span className="stat-label">Stars:</span>
          <span className="stat-value">{repo.stargazers_count}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Forks:</span>
          <span className="stat-value">{repo.forks_count}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Watchers:</span>
          <span className="stat-value">{repo.watchers_count}</span>
        </div>
      </div>
      <a
        className="repo-link"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </motion.div>
  );
}

export default StatsCard;
