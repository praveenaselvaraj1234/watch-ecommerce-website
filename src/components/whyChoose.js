import React from 'react'
import "../App.css"

const WhyChoose = () => {
  return (
    <div className="why-choose-us">
      <div className="why-choose">
        <h2>Why Choose Our Watches?</h2>

      <div className="features">
        <div className="feature-card">
          <div className="icon">👍</div>
          <h3>2-Year Warranty</h3>
          <p>Free repairs and battery replacements for 24 months</p>
        </div>

        <div className="feature-card">
          <div className="icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On all orders over ₹20,000</p>
        </div>

        <div className="feature-card">
          <div className="icon">⌚</div>
          <h3>Precision Time</h3>
          <p>Certified accurate within ±2 seconds per day</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyChoose