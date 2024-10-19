import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';


const Header = () => (
  <header className="header">
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for plants..."
        className="search-bar"
      />
    </div>
    <div className="icons">
      <FaUser className="icon" title="Profile" />
      <FaShoppingCart className="icon" title="Cart" />
    </div>
  </header>
);

export default Header;
