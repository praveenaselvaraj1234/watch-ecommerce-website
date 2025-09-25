import React from 'react';
import '../App.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
      <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      
      <div className="testimonial-cards">
        <div className="testimonial">
          <div className="quote"><i> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></i>
          <br />
            "My Timez watch has been incredibly reliable. The craftsmanship is outstanding!"</div>
          <div className="author">- Sarah J.</div>
        </div>
        
        <div className="testimonial">
          <div className="quote"><i> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></i>
          <br />
            "The perfect blend of style and precision. I get compliments every time I wear it."</div>
          <div className="author">- Michael T.</div>
        </div>
        
        <div className="testimonial">
          <div className="quote"><i> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></i>
          <br />
            "Excellent customer service and fast delivery. Will definitely buy again."</div>
          <div className="author">- Priya K.</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;