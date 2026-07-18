import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>  &nbsp;
      <Link to="/home/about">About</Link> &nbsp;
      <Link to="/home/contact">Contact</Link> &nbsp;
      <Link to="/home/blog">Blog</Link> &nbsp;

    </div>
  );
};

export default Navbar;
