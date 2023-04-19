import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import cleanGrey from "../../assets/clean-gray-paper.png";
import sexyBeige from "../../assets/clean-gray-paper.png"

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import AknNoBkg from '../assets/mattBnW.png'

function MainContent() {
  return (
    <>

      <div className="jumbo">

        <div className="jumbo-content">
          <h1 className="jumbo-header">Hi, I'm Matt,</h1>
          <h1 className="jumbo-subheader">Web-developer. Idea-haver. Nerd.</h1>
        </div>
        <img className="clean-grey" src={cleanGrey}></img>
        {/* <img className="sexy-beige" src={sexyBeige}></img> */}
        <div className="mini-menu">
          <h2>I am Front-End Web Development Bootcamp graduate. With demonstrable skills with (arrow to icons). Please review projects for further breakdown.<br></br>I like to doodle dumb animals- and I make silly movies for your editing needs.  </h2>
          {/* <div className="icons">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MainContent;
