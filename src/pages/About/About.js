import "./About.css"





function About({ navbarPositions}) {
    console.log(navbarPositions)
    let headerWidth = 0;
    if(navbarPositions.section4 && navbarPositions.section2 && navbarPositions.section3){
      headerWidth = navbarPositions.section2.width + navbarPositions.section3.width + navbarPositions.section4.width;
    }
    console.log("this is the width: " + headerWidth)
    const section1Width = navbarPositions.section1?.width || 0;
    const gridTemplateColumns = `${section1Width}px ${headerWidth}px`;
    return (
    <div className="about-grid-container" style={{gridTemplateColumns}}>
        <div className="about-container grid-area" style={{width: `${section1Width}px`}}>About
        </div>
        <div className="header-container grid-area" style={{width: `${headerWidth}px`}}>Header
        </div>
        <div className="main-container grid-area" style={{width: `50px`}}>Main
        </div>
        <div className="section-container grid-area" style={{width: `100px`}}>Section
        </div>
    </div>
    )
}

export default About;