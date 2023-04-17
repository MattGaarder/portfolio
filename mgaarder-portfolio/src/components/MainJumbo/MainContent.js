import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import cleanGrey from "../../assets/clean-gray-paper.png";

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import AknNoBkg from '../assets/mattBnW.png'

function MainContent() {
  return (
    <>
      <img className="clean-grey" src={cleanGrey}></img>
      <div className="jumbo">
        <div className="jumbo-content">
          <h1 className="jumbo-header">Hi, I'm Matt,</h1>
          <h1 className="jumbo-subheader">Creator of Things.</h1>
        </div>
        <div>
          <h2 className="jumbo-mini">
            Thank you for visiting my portfolio!
          </h2>
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
