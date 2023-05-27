import React from "react";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import MainContent from "./components/MainJumbo/MainContent";
// import NavBar from "./components/NavBar/NavBar";
import {ProjectCard, MainContent, NavBar, CoolCounter, ProgressBar} from './components'
import projects from "./projects.json";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Thoughts from "./pages/Thoughts";
import Something from "./pages/Something";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/thoughts" element={<Thoughts />} /> 
          <Route path="/something" element={<Something />} />
        </Routes>
      <MainContent />
      <div className="grid-container">
        {projects.map((p) => (
          <ProjectCard
            id={p.id}
            title={p.title}
            images={p.images}
            deployed={p.deployed}
            repo={p.repo}
            summary={p.summary}
            technology={p.technology}
          />
        ))}
      </div>
      {/* <CoolCounter />
      <ProgressBar /> */}
    </>
  );
}

export default App;
