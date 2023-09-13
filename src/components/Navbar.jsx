import React from "react"
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span>Logo</span>
      <div className="links">
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/projects'>Blog</Link>
       <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
