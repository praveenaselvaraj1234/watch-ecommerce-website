import React from 'react';
import '../App.css';
import { FaEye, FaHeart, } from 'react-icons/fa';

const Product = ({ products, addToCart, addToWishlist, handleViewDetails }) => {
  return (
    <div id="product">
      {products.map((product, index) => (
        <div key={product.id} id="main-box">
          <div id="product-cart">
            <span className="badge">Best Seller</span>
            <img src={product.image} alt={product.product} />
            <h5>{product.product}</h5>
            <div className="price-block">
              {/* tofixed is used for round of the number */}
              <span className="original-price">₹{(product.price * 1.2).toFixed(0)}</span>
              <span className="offer-price">₹{product.price}</span>
            </div>
            <p>{product.offers}</p>

            <div className="product-actions">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <div className="wihlist" onClick={() => addToWishlist(product)}>
                <i><FaHeart /></i> Add to Wishlist
              </div>
              <div className="detialed-cart" onClick={() => handleViewDetails(product)}>
                <i><FaEye /></i> View Details
              </div> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
