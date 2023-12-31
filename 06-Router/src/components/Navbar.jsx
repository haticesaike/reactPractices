import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      <NavLink to="history">History</NavLink>
    </nav>
  );
}

export default Navbar;
