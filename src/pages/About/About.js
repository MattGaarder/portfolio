import "./About.css";

function About({ navbarPositions }) {
  console.log(navbarPositions);
  let headerWidth = 0;
  if (
    navbarPositions.section4 &&
    navbarPositions.section2 &&
    navbarPositions.section3
  ) {
    headerWidth =
    //   navbarPositions.section2.width +
    //   navbarPositions.section3.width +
      navbarPositions.section4.width;
      console.log("this is in About.js we are taking navbarPositions and adding section 2, 3, 4 to calculate header Width. Section 2 width:" + navbarPositions.section2.width + " -- -- " + navbarPositions.section3.width + " --  " + navbarPositions.section4.width + "to calculate Headerwidth: " + headerWidth);
  }


  console.log("this is the width of the header: " + headerWidth);
  const section1Width = navbarPositions.section1?.width || 0;
  console.log("this is section1Width" + section1Width)

  return (
    <div
      className="about-grid-container"
    //   style={{ gridTemplateColumns: `${section1Width}px ${headerWidth}px` }}
    >
      <div className="row1 grid-area">
        <div className="about-container">
          <h1 className="about-title">About</h1>
        </div>
        <div className="header-container">
          Header
        </div>
      </div>
      <div
        className="row2 grid-area"
        // style={{ gridTemplateColumns: "fr 1fr" }}
      >
        <div className="main-container">Main</div>
        <div className="section-container">Section</div>
      </div>
    </div>
  );
}

export default About;
