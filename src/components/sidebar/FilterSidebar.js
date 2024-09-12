import React, { useState } from "react";
import "./FilterSidebar.css";
import StarRating from "../startrating/StarRating";

const FilterSidebar = () => {  // eslint-disable-next-line
    const [rating, setRating] = useState(0);

    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="column filter-sidebar">
            <div className="filter-title-card">
                <h3>Filter</h3>
            </div>
            <div className="filter-section">
                <h4>Categories</h4>
                <div className="filter-options">
                    <label>
                        <input type="checkbox" name="gardening" className="green-checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className="checkbox-text">Gardening</span>
                    </label>
                    <label>
                        <input type="checkbox" name="plants" className="green-checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className="checkbox-text">Plants</span>
                    </label>
                    <label>
                        <input type="checkbox" name="seeds" className="green-checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className="checkbox-text">Seeds</span>
                    </label>
                    <label>
                        <input type="checkbox" name="bulbs" className="green-checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className="checkbox-text">Bulbs</span>
                    </label>
                    <label>
                        <input type="checkbox" name="planters" className="green-checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className="checkbox-text">Planters</span>
                    </label>
                    <label>
                        <input type="checkbox" name="others" className="green-checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className="checkbox-text">Others <span className="toggle-arrow">^</span></span>
                    </label>                </div>
            </div>
            <div className="filter-section">
                <h4>Price Range</h4>
                <div className="price-range-inputs">
                    <input type="number" placeholder="Min" className="price-input" />
                    <input type="number" placeholder="Max" className="price-input" />
                </div>
                <button className="set-price-btn">Set Price</button>
            </div>
            <div className="filter-section">
                <h4>Rating</h4>
                <StarRating onRatingSelect={handleRatingSelect} />
            </div>
            <div className="ad-image">
                <img src="https://via.placeholder.com/250x150" alt="Ad" className="rounded-image" />
            </div>
        </div>
    );
};

export default FilterSidebar;
