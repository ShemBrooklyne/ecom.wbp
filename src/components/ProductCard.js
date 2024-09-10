import React from 'react';
import './ProductCard.css';
import StarRating from './StarRating';

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={() => onClick(product)}>
            <img
                src={product.image || 'https://via.placeholder.com/150'}
                alt={product.name}
                className="product-image"
            />
            <h3 className="product-name">{product.name || 'Product Name'}</h3>
            <p className="product-price">${(product.price || 0).toFixed(2)}</p>
            <div className="product-rating">
                <StarRating rating={product.rating || 0} />
            </div>
        </div>
    );
};

export default ProductCard;