import React from "react";
import ContactCard from "./components/ContactCard";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  return <>
    <NavBar />
    <MainContent />;
    <ContactCard />
  </>
}

export default App;
