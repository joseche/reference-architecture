import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import IndicatorsPage from "./pages/IndicatorsPage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container">
          <Link className="navbar-brand logo" to="/">Life Expectancy</Link>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/countries">Countries</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/indicators">Indicators</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/indicators" element={<IndicatorsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
