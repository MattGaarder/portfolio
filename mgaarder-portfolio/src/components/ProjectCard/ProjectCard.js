import React from "react";
import "./ProjectCard.css"
// import ReactDOM from "react-dom";

function ProjectCard(props) {
  console.log(props)
    return (
      <div
        className={`project-container ${
          props.id % 2 === 0 ? "right-render" : "left-render"
        }`}
      >
        <div className="img-container">
          <img className="project-gif" alt={props.title} src={props.gif} />
        </div>
        <div className="content">
          <div className="text-content">
            <h1 className="title">
              <strong>{props.title}</strong>
            </h1>
            <p>
              A command-line application that dynamically generates a
              professional README.md file from a user's input using node.js and
              the npm inquirer package; a collection of common interactive
              command line user interfaces.
            </p>
            <p>
              A command-line application that dynamically generates a
              professional README.md file from a user's input using node.js and
              the npm inquirer package; a collection of common interactive
              command line user interfaces.
            </p>
            {/* <ul>
              <li>
                Tech 1
              </li>
              <li>
                Tech 2
              </li>
              <li>
                Tech 3
              </li>
              <li>
                Tech 4
              </li>
              <li>
                Tech 5
              </li>
            </ul> */}
            <ul>
              <li>
                <strong className="title">{props.title}</strong>
              </li>
              <li>
                <strong className="deployed-link">Deployed:</strong>{" "}
                {props.deployed}
              </li>
              <li>
                <strong className="repo-link">Repository:</strong> {props.repo}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ProjectCard