import React from "react";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import MainContent from "./components/MainJumbo/MainContent";
// import NavBar from "./components/NavBar/NavBar";
import {ProjectCard, MainContent, NavBar } from './components'
import projects from "./projects.json";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Thoughts from "./pages/Thoughts";
import Something from "./pages/Something";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/thoughts" element={<Thoughts />} /> 
          <Route path="/something" element={<Something />} />
        </Routes>
      {/* <CoolCounter />
      <ProgressBar /> */}
    </>
  );
}

export default App;
