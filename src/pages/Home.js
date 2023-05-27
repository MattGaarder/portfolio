import React from "react";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import MainContent from "./components/MainJumbo/MainContent";
// import NavBar from "./components/NavBar/NavBar";
import {ProjectCard, MainContent, NavBar } from '../components/'
import projects from "../projects.json";
// import MainContent from "./pages/MainContent";

function Home() {
  return (
    <>
      <NavBar />
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
    </>
  );
}

export default Home;