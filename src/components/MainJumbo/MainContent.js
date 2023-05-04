import React from "react";
import "./MainContent.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import cleanGrey from "../../assets/clean-gray-paper.png";
// import sexyBeige from "../../assets/clean-gray-paper.png";

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
        <img className="clean-grey" src={cleanGrey} alt="background-texture"></img>
        {/* <img className="sexy-beige" src={sexyBeige}></img> */}
        <div className="mini-menu">
          <p>
            I am an aspiring <strong>front-end web developer</strong>, recently graduated from
            the <strong>Trinity College EdX Bootcamp</strong>.
          </p>
          <p>
            Please review my projects below for knowledge displayed in HTML,
            CSS, <strong>JavaScript, React</strong>, Node.js, Firebase, and much more!
          </p>
          <p>Some fun facts about me:</p>
          <ul>
            <li> I am a proficient <strong>Japanese speaker.</strong></li>
            <li> I dabble in content creation (premiere, photoshop etc.).</li>
            <li>
              But also enjoy <strong>drawing</strong> with good old fashioned pen and paper also.
            </li>
          </ul><br></br>
          <p>Please review my projects below for knowledge displayed in HTML,
            CSS Some fun facts about me:</p>
          {/* <div className="icons">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faFilePdf} />
          </div> */}
        </div>
        <div className="button">
        <button>
          Skip to the Projects
        </button>
        </div>
      </div>
    </>
  );
}

export default MainContent;
