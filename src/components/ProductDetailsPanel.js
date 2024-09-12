import React, { useEffect, useState } from "react";
import "./ProductDetailsPanel.css";

const ProductDetailsPanel = ({ selectedProduct, onClose }) => {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(true);

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
                <button className="tab-button">Reviews (10)</button>
            </div>
            <div className="product-detail-actions">
                <button className="love-heart"><span role="img" aria-label="heart">❤️</span></button>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetailsPanel;
