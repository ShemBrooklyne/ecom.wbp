import React, { useState } from 'react';
import './ProductCard.css';
import StarRating from './StarRating';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ProductCard = ({ product, onClick }) => {
    const [isHeartClicked, setHeartClicked] = useState(false);
    const [isAddedToCart, setAddedToCart] = useState(false);

    const handleHeartClick = (e) => {
        e.stopPropagation();
        setHeartClicked(!isHeartClicked);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        setAddedToCart(true);
    };

    return (
        <div className="product-card" onClick={() => onClick(product)}>
            <div className="image-wrapper">
                <img
                    src={product.image || 'https://via.placeholder.com/150'}
                    alt={product.name}
                    className="product-image"
                />
                <button
                    onClick={handleHeartClick}
                    className={`heart-icon ${isHeartClicked ? 'clicked' : ''}`}
                >
                    {isHeartClicked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
                </button>
            </div>
            <h3 className="product-name">{product.name || 'Product Name'}</h3>
            <div className="product-rating">
                <StarRating rating={product.rating || 0} />
            </div>
            <div className="product-footer">
                <div className="product-price">
                    <span>Price: </span>${(product.price || 0).toFixed(2)}
                </div>
                <button
                    className={`add-to-cart ${isAddedToCart ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {isAddedToCart ? 'Added' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;