import React, { useState } from "react";
import "./FilterSidebar.css";
import StarRating from "../startrating/StarRating";
import ad from "../../assets/images/ad.jpg"

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
                <h4><b>Categories</b></h4>
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
                <h4><b>Price Range</b></h4>
                <div className="price-range-inputs">
                    <input type="number" placeholder="Min" className="price-input" />
                    <input type="number" placeholder="Max" className="price-input" />
                </div>
                <button className="set-price-btn">Set Price</button>
            </div>
            <div className="filter-section">
                <h4><b>Rating</b></h4>
                <StarRating onRatingSelect={handleRatingSelect} />
            </div>
            <div className="ad-container">
                <div className="ad-image">
                    <img src={ad} alt="Ad" className="rounded-image" />
                </div>
                <div className="overlay">
                    <h4 className="overlay-title"><b>GET 30% OFF    </b></h4>
                    <p className="overlay-text">Share your referral code and get a discount!</p>
                    <button className="share-button">Share</button>
                </div>
            </div>

        </div>
    );
};

export default FilterSidebar;
