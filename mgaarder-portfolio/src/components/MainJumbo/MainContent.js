import React from "react"
import "./MainContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';



// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import AknNoBkg from '../assets/mattBnW.png'

function MainContent() {
  return (
    <>
      <div className="jumbo">
        <div className="jumbo-content">
          <h1 className="jumbo-header">Hi, I'm Matt,</h1>
          <h1 className="jumbo-subheader">Creator of Things.</h1>
          <h2 className="jumbo-subsubheader">
            Thank you for visiting my portfolio!
          </h2>
          <h2>Below are some of the important links.</h2>
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </div>
          <h2>
            Alternatively, continue exploring to see <br></br> some of the
            projects I am most proud of.
          </h2>
          <ul className="important"></ul>
        </div>
      </div>
    </>
  );
}

export default MainContent;
