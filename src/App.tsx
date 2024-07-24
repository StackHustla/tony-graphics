import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Createdby from "./assets/CreatedBy.png";
import Gallery from "./Gallery";
import Footer from "./assets/Footer";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-3 bg-white sticky-top">
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
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="work">
        <Gallery />
      </div>
      <div><Footer/></div>
     {/*  <footer className="footer">
        <div className="social">
            <a href="#" target="_blank"><i className='bx bxl-linkedin'></i></a>
            <a href="#" target="_blank"><i className='bx bxl-github'></i></a>
            <a href="#" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
            <a href="https://www.beatstars.com/tonytintheplace" target="_blank"><i className='bx bxs-music'></i></a>
        </div>
        <p className="copyright">
            © Antonio Moore | All Rights Reserved
        </p>
    </footer> */}
    </>
  );
}

export default App;
