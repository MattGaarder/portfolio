import "./About.css";

function About() {
  return (
    <div
      className="about-grid-container"
    >
      <div className="about-container">
        <h1 className="about-title">About</h1>
      </div>
      <div className="header-container">
        <div className="proficiencies">
          <div className="code proficiency">
            <h1>Code</h1>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript, jQuery</li>
              <li>React, Node.js</li>
            </ul>
          </div>
          <div className="creative proficiency">
            <h1>Creative</h1>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript, jQuery</li>
              <li>React, Node.js</li>
            </ul>
          </div>
          <div className="misc proficiency">
            <h1>Misc</h1>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript, jQuery</li>
              <li>React, Node.js</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-container">
        <h1>Profile</h1>
        <p>Background in education. I taught English and maths at an international school in Tokyo for three years with the JET programme - the Japanese Government's official international exchange and English-teaching programme, and am a proficient Japanese speaker. I also have experience teaching Film and Video production at Digital Media Academy, a Stanford programme. I have recently become deeply fascinated with programming and have developed skills with HTML5, CSS3, JavaScript, jQuery, React.js, ES6, Node, and a range of other technologies. My strengths are attention to detail, proficiency in prioritizing tasks, and my ability to solve problems efficiently. I am looking forward to making an impact in this industry!</p>
      </div>
      <div className="section-container">Section</div>
    </div>
  );
}

export default About;
