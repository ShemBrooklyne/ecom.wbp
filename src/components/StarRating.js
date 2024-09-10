// src/components/StarRating.js
import React, { useState } from 'react';
import './StarRating.css'; // CSS for styling the stars

const StarRating = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0); // Holds the current rating
  const [hover, setHover] = useState(0); // Holds the current hover state

  // Function to update rating
  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    onRatingSelect(ratingValue); // Pass selected rating back to the parent component
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              style={{ display: 'none' }}
            />
            <svg
              className={`star ${ratingValue <= (hover || rating) ? "filled" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </label>
        );
      })}
      <span>{rating} star(s)</span> {/* Display the rating below stars */}
    </div>
  );
};

export default StarRating;