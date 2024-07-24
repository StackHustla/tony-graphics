import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Createdby from "./assets/CreatedBy.png";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 className="fs-2 fw-bolder ">Created By Tony T</h3>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Gallery />
      </div>
      <div><footer></footer></div>
    </>
  );
}

export default App;
