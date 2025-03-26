import React, { useState } from 'react';
import { ShoppingCart, User, Heart, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Cart Section */}
        <div className="cart">
          <ShoppingCart size={24} color="#D9D9D9" />
        </div>

        {/* User Section */}
        <div className="user">
          <User size={24} color="#D9D9D9" />
        </div>
      </div>

      {/* Hamburger Menu Section */}
      <div className="navbar-right">
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'bar1-active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar2-active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar3-active' : ''}`}></span>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        {/* Heart and Search Buttons */}
        <div className="menu-icons">
          <button className="menu-icon-button">
            <Heart size={24} color="#3B3B3B" />
          </button>
        </div>

        {/* Other Menu Buttons */}
        <button className="menu-button">Dino Den</button>
        <button className="menu-button">Our Story</button>
        <button className="menu-button">Fresh Fossils</button>
        <button className="menu-button">Roaring Styles</button>
        <button className="menu-button">Roar About Us</button>
        <button className="menu-button">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
