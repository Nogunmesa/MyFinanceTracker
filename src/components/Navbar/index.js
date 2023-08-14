import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarElements.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/index" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/setup" className="nav-link">Set Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/transactions" className="nav-link">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
