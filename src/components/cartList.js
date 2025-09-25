import React from 'react';
import "../App.css"

const CartList = ({ cart, setCart }) => {
  const handleQuantityChange = (id, change) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleDelete = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = subtotal > 2000 ? 0 : 40;
  const platformFee = 28;
  const totalAmount = subtotal + deliveryCharge + platformFee;
  const discount = Math.round(subtotal * 0.1);
  const amountPayable = totalAmount - discount;

  return (
    <div className="cart-root">
      <h2 className="cart-title">My Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="items-section">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-img-container">
                  <img src={item.image} alt={item.product} />
                </div>
                <div className="item-details">
                  <h3>{item.product}</h3>
                  <p className="brand">{item.manufacturer || 'Generic Brand'}</p>
                  <p className="price">₹{item.price.toLocaleString()}</p>
                  
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, -1)} className="qty-btn minus">
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="qty-btn plus">
                      +
                    </button>
                  </div>
                  
                  <div className="action-buttons">
                    <button onClick={() => handleDelete(item.id)} className="remove-btn">
                      Remove
                    </button>
                    <button className="wishlist-btn">Move to Wishlist</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="price-summary">
            <div className="price-card">
              <h3>Price Details</h3>
              <div className="price-row">
                <span>Price ({cart.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="price-row">
                <span>Discount</span>
                <span className="discount">-₹{discount.toLocaleString()}</span>
              </div>
              <div className="price-row">
                <span>Delivery Charges</span>
                <span>{deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}</span>
              </div>
              <div className="price-row">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>
              <div className="divider"></div>
              <div className="total-row">
                <span>Total Amount</span>
                <span>₹{amountPayable.toLocaleString()}</span>
              </div>
              <p className="savings">You will save ₹{discount.toLocaleString()} on this order</p>
              <button className="checkout-btn">PLACE ORDER</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;