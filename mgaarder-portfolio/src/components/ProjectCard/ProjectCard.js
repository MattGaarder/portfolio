import React from "react";
// import ReactDOM from "react-dom";

function ProjectCard(props) {
    return (
      <div className="project-card">
        <div className="img-container">
          <img alt={props.title} src={props.gif} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>{props.title}</strong>
            </li>
            <li>
              <strong>Deployed:</strong> {props.deployed}
            </li>
            <li>
              <strong>Repository:</strong> {props.repo}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default ProjectCard