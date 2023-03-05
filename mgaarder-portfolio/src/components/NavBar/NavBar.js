import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
      <>
        <header>
          <nav className="nav">
            <h1>Gaarder</h1>
            <ul className="nav-items">
              <li>About</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </header>
      </>
    );
}

export default NavBar