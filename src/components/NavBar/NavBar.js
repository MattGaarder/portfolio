import React, { useState, useEffect }  from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
};

    return (
      <>
        <header>
          <nav className={`nav-nav ${scrolled ? "scrolled" : ""}`}>
            <p className="name" onClick={scrollToTop}>Matt Gaarder</p>
            <ul className="nav-items">
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/thoughts">Thoughts</CustomLink>
              <CustomLink to="/something">Something</CustomLink>
            </ul>
            <div className="link-icons">
              <a href="https://github.com/MattGaarder" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/matteus-gaarder-991494178/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faLinkedin} /></a>
              <a href="https://twitter.com/JelloAudible" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faTwitter} /></a>
              <a href="/GAARDER-CV.pdf" download>
                <FontAwesomeIcon className="nav-icon pdf" icon={faFilePdf} />
              </a>
            </div>
          </nav>
        </header>
      </>
    );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar