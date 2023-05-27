import React, { useState, useEffect }  from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5 ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []); // Empty dependency array to run only on mount and unmount

  let navbarClasses = ['nav-nav'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
    return (
      <>
        <header>
          <nav className={`nav-nav ${scrolled ? "scrolled" : ""}`}>
            <p className="name">Matt Gaarder</p>
            <ul className="nav-items">
              <p>About</p>
              <p>Thoughts</p>
              <p>Projects</p>
            </ul>
            <div className="link-icons">
              <a href="https://github.com/MattGaarder" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/matteus-gaarder-991494178/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faLinkedin} /></a>
              <a href="https://twitter.com/JelloAudible" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faTwitter} /></a>
              <FontAwesomeIcon className="nav-icon pdf" icon={faFilePdf} />
            </div>
          </nav>
          {/* <nav className="nav-2">
            <div className="icons nav-items-2">
            <a href="https://github.com/MattGaarder" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/matteus-gaarder-991494178/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href="https://twitter.com/JelloAudible" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
            </div>
          </nav> */}
        </header>
      </>
    );
}

export default NavBar