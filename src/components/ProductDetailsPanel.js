import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./ProductDetailsPanel.css";

const ProductDetailsPanel = ({ selectedProduct, onClose, isHeartActive, onHeartClick }) => {
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

    if (!selectedProduct) {
        return null;
    }

    return (
        <div className={`product-details-panel ${isProductDetailsOpen ? "active" : ""}`}>
            <div className="close-button" onClick={closeProductDetails}>x</div>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-detail-image" />
            <div className="additional-images">
                {selectedProduct.relatedImages.slice(0, 4).map((image, index) => (
                    <img key={index} src={image} alt={`Related ${index}`} />
                ))}
                {selectedProduct.relatedImages.length > 4 && (
                    <span className="additional-count">+{selectedProduct.relatedImages.length - 4}</span>
                )}
            </div>
            <h3 className="product-detail-name">{selectedProduct.name}</h3>
            <p className="product-detail-description">
                {isDescriptionExpanded 
                    ? selectedProduct.description
                    : `${selectedProduct.description.substring(0, 100)}...`
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
                    className="add-to-cart" 
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsPanel;