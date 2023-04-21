import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import ReactDOM from "react-dom";

function ProjectCard(props) {
  console.log(props);
  return (
    <>
    <nav className="nav-3">
          </nav>
    <div className={`project-container ${props.id % 2 === 0 ? "right-render" : "left-render"}`}>
      <div className="img-container">
        <img className="project-gif" alt={props.title} src={props.gif} />
      </div>
      <div className="content">
        <div className="text-content">
            <h1 className="title">
                <strong>{props.title}</strong>
            </h1>
          <p className="description">{props.summary}</p>
          <ul>
              <a href={props.repo} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
              <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="project-icon" icon={faGithub} />
              </a>
            </ul>
        </div>
        <div className="technologies">
            <p>CSS</p>
            <p>Mobile-first Design</p>
            <p>Dynamic Classes</p>
            <p>jQuery</p>
            <p>React</p>

        </div>
      </div>
    </div>
    </>
  );
}

export default ProjectCard;
