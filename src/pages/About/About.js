import "./About.css"

function About({ navbarPositions}) {
    return (
    <div className="about-grid-container">
        <div className="about-container" id="content1" style={{marginLeft: navbarPositions.section1?.left, marginRight: navbarPositions.section1?.right}}>
            <div className="grid-area-1">1</div>
        </div>
        <div className="about-container" id="content2" style={{marginLeft: navbarPositions.section2?.left, marginRight: navbarPositions.section2?.right}}>
            <div className="grid-area-2">2</div>
        </div>
        <div className="about-container" id="content3" style={{marginLeft: navbarPositions.section3?.left, marginRight: navbarPositions.section3?.right}}>
            <div className="grid-area-3">3</div>
        </div>
        <div className="about-container" id="content4" style={{marginLeft: navbarPositions.section4?.left, marginRight: navbarPositions.section4?.right}}>
            <div className="grid-area-4">4</div>
        </div>
    </div>
    )
}

export default About;