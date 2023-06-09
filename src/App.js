import React from "react";
import { useState, useEffect } from 'react';
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import MainContent from "./components/MainJumbo/MainContent";
// import NavBar from "./components/NavBar/NavBar";
import {ProjectCard, MainContent, NavBar } from './components'
import projects from "./projects.json";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Thoughts from "./pages/Thoughts";
import Something from "./pages/Something";
import Home from "./pages/Home";

function App() {
  const [navbarPositions, setNavbarPositions] = useState({});


  return (
    <>
      <NavBar setNavbarPositions={setNavbarPositions} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About navbarPositions={navbarPositions}/>} />
          <Route path="/thoughts" element={<Thoughts />} /> 
          <Route path="/something" element={<Something />} />
        </Routes>
      {/* <CoolCounter />
      <ProgressBar /> */}
    </>
  );
}

export default App;
