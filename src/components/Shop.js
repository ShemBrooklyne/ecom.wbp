import React, { useState } from 'react';
import StarRating from './StarRating'; // Ensure you have this component
import { FaSearch, FaTimes } from 'react-icons/fa'; // Official icons for search and cancel
import './Shop.css'; // Ensure you have the CSS file for styling

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortSelect = (sortOption) => {
    setSelectedSort(sortOption);
  };

  return (
    <div className="shop">
      {/* Search Bar */}
      <div className="search-bar-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && <FaTimes className="cancel-icon" onClick={() => setSearchQuery('')} />}
        </div>
      </div>

      {/* Search Results Text */}
      <div className="search-results-text">
        <p>Search result for "<span id="search-query">{searchQuery}</span>"</p>
      </div>

      {/* Sort Options */}
      <div className="sort-options">
        {['Relevance', 'Popular', 'Most New', 'Price'].map(option => (
          <button
            key={option}
            className={`sort-option ${selectedSort === option ? 'selected' : ''}`}
            onClick={() => handleSortSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="product-cards">
        {/* Example Product Card */}
        <div className="card">
          <img src="https://via.placeholder.com/200x150" alt="Product Image" className="card-image" />
          <div className="card-content">
            <h4 className="card-title">Product Name</h4>
            <StarRating onRatingSelect={() => {}} /> {/* Implement rating selection as needed */}
            <div className="card-price">
              <p className="price-label">Price:</p>
              <p className="price-value">$XX.XX</p>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        {/* Repeat .card as needed for more products */}
      </div>
    </div>
  );
};

export default Shop;