import React from "react";
import "./ProjectCard.css"
// import ReactDOM from "react-dom";

function ProjectCard(props) {
  console.log(props)
    return (
      // <div className={`project-card project-${props.id}`}>
      <div className={props.id % 2 === 0 ? "leftRender" : "rightRender"}>
        <div className="img-container">
          <img className="project-gif" alt={props.title} src={props.gif} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong className="title">{props.title}</strong>
            </li>
            <li>
              <strong className="deployed-link">Deployed:</strong> {props.deployed}
            </li>
            <li>
              <strong className="repo-link">Repository:</strong> {props.repo}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default ProjectCard