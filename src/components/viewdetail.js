import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaHeart } from 'react-icons/fa';
import "../App.css"

const Viewdetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  const originalPrice = Math.round(product.price * 1.2);
  const discount = Math.round((originalPrice - product.price) / originalPrice * 100);

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        <FaArrowLeft /> Back to Products
      </button>
      
      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.product} />
        </div>
        
        <div className="detail-info">
          <h2>{product.product}</h2>
          
          <div className="price-section">
            <span className="current-price">₹{product.price.toLocaleString()}</span>
            <span className="original-price">₹{originalPrice.toLocaleString()}</span>
            <span className="discount-badge">{discount}% off</span>
          </div>
          
          <div className="detail-meta">
            {product.manufacturer && (
              <p><strong>Brand:</strong> {product.manufacturer}</p>
            )}
            {product.description && (
              <p><strong>Description:</strong> {product.description}</p>
            )}
          </div>
          
          {product.offers && (
            <div className="offers-section">
              <h3>Available offers</h3>
              <ul>
                <li>{product.offers}</li>
                <li>Special Price Get extra 5% off (price inclusive of discount)</li>
                <li>Partner OfferSign up for Pay Later and get Gift Card worth ₹100</li>
              </ul>
            </div>
          )}
          
          <div className="action-buttons">
            <button className="btn-primary">
              <FaShoppingCart /> ADD TO CART
            </button>
            <button className="btn-secondary">
              <FaHeart /> WISHLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdetail;