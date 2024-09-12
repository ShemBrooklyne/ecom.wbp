import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import FilterSidebar from "../sidebar/FilterSidebar";
import ProductCard from "../productcard/ProductCard";
import ProductDetailsPanel from "../productdetails/ProductDetailsPanel";
import products from "data/productsData";
import "./Shop.css";

const Shop = () => {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSortOption, setSelectedSortOption] = useState("");
    const [heartState, setHeartState] = useState({}); // Heart state management
    const [cartState, setCartState] = useState({}); // Cart state management

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsProductDetailsOpen(true);
    };

    const closeProductDetails = () => {
        setIsProductDetailsOpen(false);
        setSelectedProduct(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
    };

    const handleSortClick = (option) => {
        setSelectedSortOption(option);
    };

    const handleHeartClick = (productId) => {
        setHeartState(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    };

    const handleAddToCartClick = (productId) => {
        setCartState(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    };

    return (
        <div className={`shop-container ${isProductDetailsOpen ? "details-open" : ""}`}>
            <FilterSidebar />
            <div className="main-content">
                <div className="sort-and-search">
                    <div className="search-container">
                        <AiOutlineSearch className="search-icon" />
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        {searchQuery && (
                            <AiOutlineClose className="cancel-icon" onClick={handleClearSearch} />
                        )}
                    </div>
                    <div className="search-results">
                        Search results for "{searchQuery}"
                    </div>
                    <div className="sort-options">
                        {["Relevance", "Popular", "Most New", "Price"].map(option => (
                            <button
                                key={option}
                                className={`sort-button ${selectedSortOption === option ? "selected" : ""}`}
                                onClick={() => handleSortClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="product-grid">
                    {products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isHeartClicked={heartState[product.id]}
                                onHeartClick={() => handleHeartClick(product.id)}
                                isAddedToCart={cartState[product.id]}
                                onAddToCart={() => handleAddToCartClick(product.id)}
                                onClick={handleProductClick}
                            />
                        ))}
                </div>
            </div>
            {isProductDetailsOpen && selectedProduct && (
                <ProductDetailsPanel
                    selectedProduct={selectedProduct}
                    onClose={closeProductDetails}
                    isHeartActive={heartState[selectedProduct.id]}
                    onHeartClick={() => handleHeartClick(selectedProduct.id)}
                    isAddedToCart={cartState[selectedProduct.id]}
                    onAddToCart={() => handleAddToCartClick(selectedProduct.id)}
                />
            )}
        </div>
    );
};

export default Shop;