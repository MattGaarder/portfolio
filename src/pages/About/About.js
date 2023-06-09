import "./About.css"

function About({ navbarPositions}) {
    return (
    <div className="about-grid-container">
        <div className="about-container1" id="content1" style={{marginLeft: navbarPositions.section1?.left, marginRight: navbarPositions.section1?.right}}>
            1
        </div>
        <div className="about-container2" id="content2" style={{marginLeft: navbarPositions.section2?.left, marginRight: navbarPositions.section2?.right}}>
            2
        </div>
        <div className="about-container3" id="content3" style={{marginLeft: navbarPositions.section3?.left, marginRight: navbarPositions.section3?.right}}>
            3
        </div>
        <div className="about-container4" id="content4" style={{marginLeft: navbarPositions.section4?.left, marginRight: navbarPositions.section4?.right}}>
            4
        </div>
    </div>
    )
}

export default About;