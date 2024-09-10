import React, { useState } from 'react';
import StarRating from './StarRating';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Official icons for search and cancel
import './Shop.css';

const products = [
    // Sample product data
    {
        id: 1,
        name: "Product 1",
        image: "https://via.placeholder.com/200x150",
        smallImages: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
        ],
        description: "This is a detailed description of Product 1. It may be long and should have a read more option if it's too lengthy.",
        rating: 4,
        price: "$99.99"
    },
    {
        id: 1,
        name: "Product 1",
        image: "https://via.placeholder.com/200x150",
        smallImages: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
        ],
        description: "This is a detailed description of Product 1. It may be long and should have a read more option if it's too lengthy.",
        rating: 4,
        price: "$99.99"
    },
    {
        id: 1,
        name: "Product 1",
        image: "https://via.placeholder.com/200x150",
        smallImages: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
        ],
        description: "This is a detailed description of Product 1. It may be long and should have a read more option if it's too lengthy.",
        rating: 4,
        price: "$99.99"
    },
    {
        id: 1,
        name: "Product 1",
        image: "https://via.placeholder.com/200x150",
        smallImages: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
        ],
        description: "This is a detailed description of Product 1. It may be long and should have a read more option if it's too lengthy.",
        rating: 4,
        price: "$99.99"
    }
    // Add more products as needed
];

const Shop = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSort, setSelectedSort] = useState('');
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [expandedDescriptions, setExpandedDescriptions] = useState({}); // To track which descriptions are expanded

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSortSelect = (sortOption) => {
        setSelectedSort(sortOption);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsDetailsVisible(true);
    };

    const handleCloseDetails = () => {
        setIsDetailsVisible(false);
    };

    const toggleDescription = (productId) => {
        setExpandedDescriptions((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    };

    const renderSmallImages = (images) => {
        const visibleImages = images.slice(0, 4);
        const additionalImagesCount = images.length - 4;

        return (
            <div className="details-small-images">
                {visibleImages.map((img, index) => (
                    <img key={index} src={img} alt={`Related ${index}`} className="small-image" />
                ))}
                {additionalImagesCount > 0 && (
                    <div className="small-image additional-images">
                        <span>+{additionalImagesCount}</span>
                    </div>
                )}
            </div>
        );
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
                {products.map(product => (
                    <div
                        key={product.id}
                        className="card"
                        onClick={() => handleProductClick(product)}
                    >
                        <img src={product.image} alt="Product" className="card-image" />
                        <div className="card-content">
                            <h4 className="card-title">{product.name}</h4>
                            <StarRating onRatingSelect={() => { }} /> {/* Implement rating selection as needed */}
                            <div className="card-price">
                                <p className="price-label">Price:</p>
                                <p className="price-value">{product.price}</p>
                            </div>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product Details Panel */}
            {selectedProduct && isDetailsVisible && (
                <div className="details-panel">
                    <button className="close-btn" onClick={handleCloseDetails}>X</button>
                    <img src={selectedProduct.image} alt="Product" className="details-image" />
                    {renderSmallImages(selectedProduct.smallImages)}
                    <h3 className="details-title">{selectedProduct.name}</h3>
                    <p className="details-description">
                        {expandedDescriptions[selectedProduct.id]
                            ? selectedProduct.description
                            : `${selectedProduct.description.substring(0, 100)}... `}
                        {selectedProduct.description.length > 100 && (
                            <a
                                href="#!"
                                className="read-more"
                                onClick={() => toggleDescription(selectedProduct.id)}
                            >
                                {expandedDescriptions[selectedProduct.id] ? 'Read less' : 'Read more'}
                            </a>
                        )}
                    </p>
                    <div className="details-tabs">
                        <button className="tab-button active">Details</button>
                        <button className="tab-button">Reviews (10)</button> {/* Example review count */}
                    </div>
                    <div className="details-actions">
                        <button className="heart-btn">❤️</button>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;
