import React from "react";
import "./MainContent.css";

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import selfport from "../../assets/image-assets/noBackSelfPort.png"

function MainContent() {
  return (
    <>
      <div className="jumbo">
        <img className="selfport" src={selfport} alt="background-texture"></img>
      </div>
      <div className="hero">
          <h1 className="jumbo-subheader">Front-End Development, illustration,</h1>
          <h1 className="jumbo-subheader-2">React & Creative Suite</h1>
      </div>
    </>
  );
}

export default MainContent;
