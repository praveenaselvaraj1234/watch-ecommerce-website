import React from 'react'
import "../App.css"

const BrandSection = () => {
  return (
    
    <div className="brand-section">
      <div className="brand-content">
        <h2>Timeless Craftsmanship</h2>
        <p className="brand-tagline">Precision. Elegance. Legacy.</p>
        <p className="brand-description">
          Since 1985, <strong>Just Timez</strong> has been redefining luxury watches with unparalleled craftsmanship. 
          Each timepiece is a blend of cutting-edge technology and timeless design, made for those who appreciate 
          the art of precision. Whether it's a classic dress watch or a sporty chronograph, Timez delivers 
          excellence in every detail.
        </p>
        <button className="explore-btn">Explore Our Collection</button>
      </div>
      <div className="brand-image">
        <img 
          src="/images/rolex-1327169_640.jpg" 
          alt="Timez Luxury Watch" 
        />
      </div>
      
    </div>

  )
}

export default BrandSection