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
      navbarPositions.section2.width +
      navbarPositions.section3.width +
      navbarPositions.section4.width;
  }
  console.log("this is the width: " + headerWidth);
  const section1Width = navbarPositions.section1?.width || 0;

  return (
    <div
      className="about-grid-container"
      style={{ gridTemplateColumns: `${section1Width}px ${headerWidth}px` }}
    >
      <div className="row1 grid-area">
        <div
          className="about-container"
          style={{ width: `${section1Width}px` }}
        >
          About
        </div>
        <div className="header-container" style={{ width: `${headerWidth}px` }}>
          Header
        </div>
      </div>
      <div
        className="row2 grid-area"
        style={{ gridTemplateColumns: "2fr 1fr" }}
      >
        <div className="main-container">Main</div>
        <div className="section-container">Section</div>
      </div>
    </div>
  );
}

export default About;
