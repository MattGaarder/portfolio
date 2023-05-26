import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


import { useState } from "react";

// import ReactDOM from "react-dom";

function ProjectCard(props) {
  console.log(props);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImageIndex + 1 === props.images.length ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex - 1 < 0 ? props.images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <>
      <div className={`project-container ${props.id}`}>
        <div className="img-container">
          <button onClick={prevImage} className="prev">Prev</button>
          <img className="project-gif" alt={props.title} src={props.images[currentImageIndex]} />
          <button onClick={nextImage} className="next">Next</button>
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
            {/* <p>||</p> */}
            {/* <ul>
              <a href={props.repo} target="_blank" rel="noopener noreferrer" className="technology-icon technology-icon-github">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a href={props.deployed} target="_blank" rel="noopener noreferrer" className="technology-icon technology-icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
