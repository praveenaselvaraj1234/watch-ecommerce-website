import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
     <footer className="watch-footer">
      <div className="footer-main">
        <div className="footer-column">
          <h3><span>J</span>UST <span>T</span>IMEZ</h3>
          <p>Premium watches for those who value time</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube/></a>
            <a href="#"><FaTwitter/></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Special Offers</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 JUST TIMEZ. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer