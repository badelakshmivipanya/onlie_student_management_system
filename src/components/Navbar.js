// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Online Student Management App</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/students/add" className="navbar-link">Add Student</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
