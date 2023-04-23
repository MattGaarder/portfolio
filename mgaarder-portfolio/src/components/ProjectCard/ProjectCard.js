import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// import ReactDOM from "react-dom";

function ProjectCard(props) {
  console.log(props);
  return (
    <>
      <nav className="nav-3"></nav>
      <div className={`project-container ${
          props.id % 2 === 0 ? "right-render" : "left-render"
        }`}>
        <div className="img-container">
          <img className="project-gif" alt={props.title} src={props.gif} />
        </div>
        <div className="content">
          <div className="text-content">
            <h1 className="title">
              <strong>{props.title}</strong>
            </h1>
            <p className="description">{props.summary}</p>
          </div>
          <div className="technologies">
            {props.technology.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
            <p>||</p>
            <ul>
              <a href={props.repo} target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
