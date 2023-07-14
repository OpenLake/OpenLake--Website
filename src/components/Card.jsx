import React, { useEffect, useState } from "react";
import "./css/Card.css"; // Import the CSS file for the card design
import { repoavatar, fork, likes, watch } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'animate.css';
function Card({ repo, className }) {
  let x = repo.language || "";
  if (x === "C++") {
    x = "cplusplus";
  }
  if (x === "HTML") {
    x = "html5";
  }
  if (x === "C++") {
    x = "css3";
  }
  // console.log(x);
  let icons = "devicon-" + x.toLowerCase() + "-plain";
  const [maintainers, setMaintainers] = useState([]);

  useEffect(() => {
    fetch(repo.contributors_url)
      .then((response) => response.json())
      .then((data) => {
        setMaintainers(data.slice(0, 3));
      })
      .catch((error) => console.error(error));
  }, [repo.contributors_url]);
  return (
    <div
      // whileHover={{ scale: 1.5}}
      // whileTap={{ scale: 0.8 }}
      className={`card animate__animated animate__slideInDown ${className}`}
    >
      <div className="card-inner">
        <div className="card-front gap-4">
          <div className="card-upperrow">
            <div className="card-icon">
              {/* <i className={icons}></i> */}
              <img className="card-avatar" src={repoavatar} alt="avatar" />
            </div>
          </div>
          <h1 className="card-title">{repo.name}</h1>
          <div className="flex flex-row gap-2">
            <h3 className="card-tech">Techstack:</h3>
            <i className={` ${icons} card-icon`}></i>
          </div>
          <div className="flex flex-row gap-2">
            <h3 className="card-tech">Maintainers: </h3>
            <div className="card-tech2">
              {maintainers.map((maintainer) => (
                <span key={maintainer.id}>{maintainer.login} </span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card-upperrow">
            <div className="card-icon">
              {/* <i className={icons}></i> */}
              <img className="card-avatar" src={repoavatar} alt="avatar" />
            </div>
            <div className="card-innerrow ">
              <div className="component">
                <img src={likes} alt="Example" />
                <span>{repo.stargazers_count}</span>
              </div>

              <div className="component">
                <img src={fork} alt="Example" />
                <span>{repo.forks_count}</span>
              </div>
              <div className="component">
                <img src={watch} alt="Example" />
                <span>{repo.watchers_count}</span>
              </div>
            </div>
          </div>
          <h1 className="card-title">{repo.name}</h1>
          <p className="card-description">{repo.description}</p>
          <Link
            key={repo.id}
            className="card-readmore pointer-events-auto"
            to={`/projects/${repo.id}`}
            style={{pointerEvents:'auto'}}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
