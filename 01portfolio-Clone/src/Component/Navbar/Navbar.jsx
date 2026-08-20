import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container container">
        <div className="logo">
           Career <span> Dossier</span> 
        </div>

        <div className="pages">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/review">Review</Link> */}
          <Link to="/blog">Blog</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </div>

        <div className="nav-right">
          <button className="hire-btn">Hire me </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
