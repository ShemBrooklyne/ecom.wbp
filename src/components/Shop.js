import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import ProductDetailsPanel from "./ProductDetailsPanel";
import "./Shop.css";

const Shop = () => {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSortOption, setSelectedSortOption] = useState("");


    // Sample products data 
    const products = [
        {
            id: 1,
            name: "Product 1",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/30",
                "https://via.placeholder.com/30",
                "https://via.placeholder.com/30",
                "https://via.placeholder.com/30",
                "https://via.placeholder.com/30"
            ],
            description: "This is a detailed description of Product 1. It may be long and should have a read more option if it's too lengthy."
        },
        {
            id: 2,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 3,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 4,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 5,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 6,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 7,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 8,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 9,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
        {
            id: 10,
            name: "Product 2",
            image: "https://via.placeholder.com/150",
            relatedImages: [
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60",
                "https://via.placeholder.com/60"
            ],
            description: "This is a description for Product 2."
        },
    ];

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
                <div className="products-container">
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="column show">
                <ProductDetailsPanel selectedProduct={selectedProduct} onClose={closeProductDetails} />
            </div>
        </div>
    );
};

export default Shop;