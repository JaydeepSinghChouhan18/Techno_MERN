import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div>
          <p>LET'S WORK TOGETHER</p>
          <h2>Let's work together</h2>
          <p>
            I'm open to UI/UX and frontend missions, short or long-term. Landing
            page, full product redesign, or just a second pair of eyes — let's
            talk.
          </p>
        </div>

        <div className="footer-contact">
          <a href="mailto:hello@jaydeep.dev">hello@jaydeep.dev</a>
          <a href="https://linkedin.com/in/jaydeep" target="_blank" rel="noreferrer">
            linkedin.com/in/jaydeep
          </a>
          <a href="https://github.com/jaydeep" target="_blank" rel="noreferrer">
            github.com/jaydeep
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="footer-links">
          <Link to="/#hero">Jaydeep</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/review">Reviews</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Hire me</Link>
        </div>

        <p className="footer-copy">
          © Jaydeep. All rights reserved. Developed by Laurent Begey • Distributed
          by ThemeWagon
        </p>
        <p className="footer-built-with">Built with Tailwind CSS & Alpine.js</p>
      </div>
    </footer>
  );
};

export default Footer;

