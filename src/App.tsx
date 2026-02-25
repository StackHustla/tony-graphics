import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const THEME_KEYS = ["OMEGA", "2077", "WAVE"];

function getInitialThemeIndex() {
  try {
    const stored = localStorage.getItem("site-theme");
    if (!stored) return 0;
    const idx = THEME_KEYS.indexOf(stored);
    return idx >= 0 ? idx : 0;
  } catch (e) {
    return 0;
  }
}

function App() {
  const [themeIndex, setThemeIndex] = useState<number>(getInitialThemeIndex());

  useEffect(() => {
    const klasses = THEME_KEYS.map((k) => `theme-${k}`);
    document.documentElement.classList.remove(...klasses);
    const applied = `theme-${THEME_KEYS[themeIndex]}`;
    document.documentElement.classList.add(applied);
    try {
      localStorage.setItem("site-theme", THEME_KEYS[themeIndex]);
    } catch (e) {}
  }, [themeIndex]);

  function cycleTheme() {
    setThemeIndex((s) => (s + 1) % THEME_KEYS.length);
  }

  const themeLabel = THEME_KEYS[themeIndex];

  return (
    <>
      <nav className="navbar navbar-expand-lg mb-3 sticky-top">
        <div className="container">
          {" "}
          {/* changed container-fluid to container */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <h3 className="fs-2 fw-bolder ">Created By Tony T</h3>
            </a>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary ms-2"
              onClick={cycleTheme}
              aria-label="Cycle theme"
            >
              {themeLabel}
            </button>
          </div>
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
