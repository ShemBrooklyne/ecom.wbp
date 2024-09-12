import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active styling
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
import brandIcon from "../../assets/images/oyotee_logo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section: Logo/Icon and Brand Name */}
      <div className="navbar-left">
        <img src={brandIcon} alt="Brand Icon" className="brand-icon" />
        <span className="brand-name">OYOTEE</span>
      </div>

      {/* Center Section: Navigation Links */}
      <ul className="navbar-center">
        <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
        <li><NavLink to="/plant-care" activeClassName="active">Plant Care</NavLink></li>
        <li><NavLink to="/workshops" activeClassName="active">Workshops</NavLink></li>
        <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
      </ul>

      {/* Right Section: Icons (Cart, Heart, Profile) */}
      <div className="navbar-right">
        <FaShoppingCart className="icon" />
        <FaHeart className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
