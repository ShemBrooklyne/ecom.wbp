    import React, { useState } from "react";
    import FilterSidebar from "./FilterSidebar";
    import ProductCard from "./ProductCard";
    import "./Shop.css";

    const Shop = () => {
        const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
        const [selectedProduct, setSelectedProduct] = useState(null);

        // Sample products data (Replace with actual data source or fetching logic)
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

        // Function to handle product click and open details panel
        const handleProductClick = (product) => {
            setSelectedProduct(product);
            setIsProductDetailsOpen(true);
        };

        // Function to close the product details panel
        const closeProductDetails = () => {
            setIsProductDetailsOpen(false);
        };

        return (
            <div className="shop-page">
                <FilterSidebar />

                {/* Container for Product Section and Details Panel */}
                <div className={`shop-content ${isProductDetailsOpen ? 'panel-open' : ''}`}>
                    {/* Middle Section: Products and Sorting */}
                    <div className="product-section">
                        <div className="sort-and-search">
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Search products..."
                            />
                            <div className="sort-options">
                                <button>Relevance</button>
                                <button>Popular</button>
                                <button>Most New</button>
                                <button>Price</button>
                            </div>
                        </div>
                        {/* Products Container */}
                        <div className="products-container">
                            <div className="product-grid">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onClick={() => handleProductClick(product)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Details Panel */}
                    {selectedProduct && (
                        <div
                            className={`product-details-panel ${isProductDetailsOpen ? "active" : ""}`}
                        >
                            <div className="close-button" onClick={closeProductDetails}>X</div>
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-detail-image" />
                            <div className="additional-images">
                                {selectedProduct.relatedImages.slice(0, 3).map((image, index) => (
                                    <img key={index} src={image} alt={`Related ${index}`} />
                                ))}
                                {selectedProduct.relatedImages.length > 3 && (
                                    <span className="additional-count">
                                        +{selectedProduct.relatedImages.length - 3}
                                    </span>
                                )}
                            </div>
                            <h3 className="product-detail-name">{selectedProduct.name}</h3>
                            <p className="product-detail-description">
                                {selectedProduct.description.length > 100 ? (
                                    <>
                                        {selectedProduct.description.substring(0, 100)}...
                                        <span className="read-more">Read More</span>
                                    </>
                                ) : (
                                    selectedProduct.description
                                )}
                            </p>
                            <div className="details-tabs">
                                <button className="tab-button active">Details</button>
                                <button className="tab-button">Reviews (10)</button> {/* Example review count */}
                            </div>
                            <div className="product-detail-actions">
                                <button className="love-heart"><span role="img" aria-label="heart">❤️</span></button>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    export default Shop;