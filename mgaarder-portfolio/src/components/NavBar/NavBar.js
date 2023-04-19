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
              <FontAwesomeIcon className="icon" icon={faGithub} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <FontAwesomeIcon className="icon" icon={faFilePdf} />
            </div>
          </nav>
        </header>
      </>
    );
}

export default NavBar