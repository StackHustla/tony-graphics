import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./Gallery";
import Footer from "./assets/Footer";
import { useState } from "react";

const themes = {
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  dark: {
    backgroundColor: '#2c2c2c',
    color: '#ffffff',
  },
  funky: {
    backgroundColor: 'ff69b4',
    color: '#ffffff',
  },
};

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-3 bg-white sticky-top">
  <div className="container"> {/* changed container-fluid to container */}
    <a className="navbar-brand" href="#">
      <h3 className="fs-2 fw-bolder ">Created By Tony T</h3>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarNav"
    >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <div id="work">
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
