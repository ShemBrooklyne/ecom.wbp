import React from 'react';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa'; // Icons for cart, heart, and profile
import brandIcon from "../assets/images/oyotee_logo.png";
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
        <li><a href="/shop">Shop</a></li>
        <li><a href="/plant-care">Plant Care</a></li>
        <li><a href="/workshops">Workshops</a></li>
        <li><a href="/blogs">Blogs</a></li>
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