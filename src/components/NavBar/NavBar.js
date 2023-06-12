import React, { useState, useEffect }  from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({ setNavbarPositions }) {
  useEffect(() => {
    const positions = {};
    let totalWidth = 0;

  
    [1, 2, 3, 4].forEach((section) => {
      const element = document.getElementById(`section${section}`);
      const rect = element.getBoundingClientRect();
      console.log(rect)
      totalWidth += rect.width;
      console.log("this is the iterated total width: " + totalWidth);
      positions[`section${section}`] = rect;
    });
    console.log(positions)
    console.log("Total Width: ", totalWidth);
    setNavbarPositions(positions);
  }, []);

  // Here's what happened in this useEffect:
  // It's called after the component output has been rendered to the DOM.
  // We create an empty positions object.
  // We use forEach to loop over each navbar section.
  // For each section, we get the element with the corresponding ID from the DOM.
  // We call getBoundingClientRect on the element to get its position and size.
  // We store this information in the positions object.
  // Finally, we call setNavbarPositions to update our state with the positions.
  


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

const navigate = useNavigate();

  const handleNameClick = () => {
    scrollToTop();
    navigate('/');
  };

    return (
      <>
        <>
          <nav className={`nav-nav nav-grid-container ${scrolled ? "scrolled" : ""}`}>
            <p className="name" id="section1" onClick={handleNameClick}>Gaarder</p>
            <ul className="nav-items" id="section2">
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/thoughts">Thoughts</CustomLink>
              <CustomLink to="/something">Something</CustomLink>
            </ul>
            <div className="mode" id="section3">
              <p>Mode</p>
            </div>
            <div className="link-icons" id="section4">
              <a href="https://github.com/MattGaarder" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/matteus-gaarder-991494178/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faLinkedin} /></a>
              <a href="https://twitter.com/JelloAudible" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nav-icon" icon={faTwitter} /></a>
              <a href="/GAARDER-CV.pdf" download>
                <FontAwesomeIcon className="nav-icon pdf" icon={faFilePdf} />
              </a>
            </div>
          </nav>
        </>
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