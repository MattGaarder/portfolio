import React from "react";
import ContactCard from "./components/ContactCard";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
  <div className="container">
    <NavBar />
    <MainContent />;
    <ContactCard />
  </div>
  )
}

export default App;
