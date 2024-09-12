import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./ProductDetailsPanel.css";

const ProductDetailsPanel = ({ selectedProduct, onClose, isHeartActive, onHeartClick, isAddedToCart, onAddToCart }) => {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(true);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("Details");

    useEffect(() => {
        if (selectedProduct) {
            setIsProductDetailsOpen(true);
        } else {
            setIsProductDetailsOpen(false);
        }
    }, [selectedProduct]);

    const closeProductDetails = () => {
        setIsProductDetailsOpen(false);
        if (onClose) onClose();
    };

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleHeartClick = () => {
        onHeartClick(); // Call the parent function
    };

    const handleAddToCartClick = () => {
        onAddToCart(); // Call the parent function to toggle cart state
    };

    if (!selectedProduct) {
        return null;
    }

    const { image, relatedImages, name, description } = selectedProduct;
    const displayedImages = relatedImages.slice(0, 4); // Show up to 4 images
    const additionalImagesCount = relatedImages.length - 4;

    return (
        <div className={`product-details-panel ${isProductDetailsOpen ? "active" : ""}`}>
            <div className="close-button" onClick={closeProductDetails}>x</div>
            <img src={image} alt={name} className="product-detail-image" />
            <div className="additional-images">
                {displayedImages.map((img, index) => (
                    <div key={index} className="image-wrapper">
                        <img src={img} alt={`Related ${index}`} />
                        {index === displayedImages.length - 1 && additionalImagesCount > 0 && (
                            <div className="additional-images-overlay">
                                +{additionalImagesCount}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <h3 className="product-detail-name">{name}</h3>
            <p className="product-detail-description">
                {isDescriptionExpanded 
                    ? description
                    : `${description.substring(0, 100)}...`
                }
                <span 
                    className="read-more" 
                    onClick={toggleDescription}
                >
                    {isDescriptionExpanded ? " Read Less" : " Read More"}
                </span>
            </p>
            <div className="details-tabs">
                <button 
                    className={`tab-button ${activeTab === "Details" ? "active" : ""}`} 
                    onClick={() => handleTabClick("Details")}
                >
                    Details
                </button>
                <button 
                    className={`tab-button ${activeTab === "Reviews" ? "active" : ""}`} 
                    onClick={() => handleTabClick("Reviews")}
                >
                    Reviews (10)
                </button>
            </div>
            <div className="product-detail-actions">
                <button 
                    className={`love-heart ${isHeartActive ? "active" : ""}`} 
                    onClick={handleHeartClick}
                >
                    {isHeartActive ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
                <button 
                    className={`add-to-cart ${isAddedToCart ? 'added' : ''}`} 
                    onClick={handleAddToCartClick}
                >
                    {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsPanel;
