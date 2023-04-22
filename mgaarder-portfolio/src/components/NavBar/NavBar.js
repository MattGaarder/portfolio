import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
      <>
        <header>
          <nav className="nav">
            <h1 className="logo">G.</h1>
            <ul className="nav-items">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
          <nav className="nav-2">
            <div className="icons nav-items-2">
            <a href="https://github.com/MattGaarder" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/matteus-gaarder-991494178/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href="https://twitter.com/JelloAudible" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
            </div>
          </nav>
        </header>
      </>
    );
}

export default NavBar