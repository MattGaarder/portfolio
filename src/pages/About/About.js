import "./About.css"





function About({ navbarPositions}) {
    console.log(navbarPositions)
    let headerWidth = 0;
    if(navbarPositions.section4 && navbarPositions.section2 && navbarPositions.section3){
      headerWidth = navbarPositions.section2.width + navbarPositions.section3.width + navbarPositions.section4.width;
    }
    console.log("this is the width: " + headerWidth)
    return (
    <div className="about-grid-container">
        <div className="about-container" style={{width: navbarPositions.section1?.width}}>
            <p className="p-element">1</p>
        </div>
        <div className="header-container" style={{width: `${headerWidth}px`}}>
            <p className="p-element">2</p>
        </div>
        <div className="main-container">
            <p className="p-element">3</p>
        </div>
        <div className="about-container4 section-container">
            <p className="p-element">4</p>
        </div>
    </div>
    )
}

export default About;