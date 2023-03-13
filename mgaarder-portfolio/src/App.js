import React from "react";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import MainContent from "./components/MainJumbo/MainContent";
// import NavBar from "./components/NavBar/NavBar";
import {ProjectCard, MainContent, NavBar, CoolCounter} from './components'
import projects from "./projects.json";

function App() {
  return (
    <div className="container">
      <NavBar />
      <MainContent />
      {projects.map((p) => (
        <ProjectCard
          id={p.id}
          title={p.title}
          gif={p.gif}
          deployed={p.deployed}
          repo={p.repo}
        />
      ))}
      <CoolCounter />
    </div>
  );
}

export default App;
