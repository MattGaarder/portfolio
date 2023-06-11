import "./About.css"





function About({ navbarPositions}) {
    console.log(navbarPositions)
    let headerWidth = 0;
    if(navbarPositions.section4 && navbarPositions.section2 && navbarPositions.section3){
      headerWidth = navbarPositions.section2.width + navbarPositions.section3.width + navbarPositions.section4.width;
    }
    console.log("this is the width: " + headerWidth)
    const section1Width = navbarPositions.section1?.width || 0;
    const gridTemplateColumns = `${section1Width}px ${headerWidth}px ${headerWidth}px auto`;
    return (
    <div className="about-grid-container" style={{gridTemplateColumns}}>
        <div className="about-container" style={{width: `${section1Width}px`}}>
        </div>
        <div className="header-container" style={{width: `${headerWidth}px`}}>
        </div>
        <div className="main-container">
        </div>
        <div className="about-container4 section-container">
        </div>
    </div>
    )
}

export default About;