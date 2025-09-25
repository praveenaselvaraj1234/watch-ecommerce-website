import React from 'react';
import '../App.css';

const Wishlist = ({ wishlistItems, addToCart, removeFromWishlist }) => {
  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.product} className="wishlist-item-image" />
              <div className="wishlist-item-details">

                <h5>{item.product}</h5>
                <p>Price: ₹{item.price}</p>
                
                <div className="wishlist-item-actions">
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                  <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
   
  );
};

export default Wishlist;