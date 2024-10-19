import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  const handleViewProduct = () => {
    // Logic for viewing the product, such as redirecting to the thank you page
    window.location.href = '/thank-you';
  };

  const handleAddToCart = () => {
    // Logic for adding the product to the cart, such as opening a modal
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="product-actions">
        <button className="view-button" onClick={handleViewProduct}>
          View Product
        </button>
        <button className="add-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
