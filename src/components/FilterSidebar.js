import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      {/* Filter Title */}
      <div className="filter-title-card">
        <h3>Filter</h3>
      </div>

      {/* Categories Section */}
      <div className="filter-section">
        <h4>Categories</h4>
        <div className="filter-options">
          <label>
            <input type="checkbox" name="gardening" className="green-checkbox" /> Gardening
          </label>
          <label>
            <input type="checkbox" name="plants" className="green-checkbox" /> Plants
          </label>
          <label>
            <input type="checkbox" name="seeds" className="green-checkbox" /> Seeds
          </label>
          <label>
            <input type="checkbox" name="bulbs" className="green-checkbox" /> Bulbs
          </label>
          <label>
            <input type="checkbox" name="planters" className="green-checkbox" /> Planters
          </label>
          <label>
            <input type="checkbox" name="others" className="green-checkbox" /> Others <span className="toggle-arrow">^</span>
          </label>
        </div>
      </div>

      {/* Price Range Section */}
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-range-inputs">
          <input type="number" placeholder="Min" className="price-input" />
          <input type="number" placeholder="Max" className="price-input" />
        </div>
        <button className="set-price-btn">Set Price</button>
      </div>

      {/* Rating Section */}
      <div className="filter-section">
        <h4>Rating</h4>
        <label className="rating-label">
          <input type="checkbox" className="green-checkbox" />
          <span role="img" aria-label="4 stars">⭐⭐⭐⭐</span> above
        </label>
      </div>

      {/* Advertisement Section */}
      <div className="ad-image">
        <img src="https://via.placeholder.com/250x150" alt="Ad" className="rounded-image" />
      </div>
    </div>
  );
};

export default FilterSidebar;