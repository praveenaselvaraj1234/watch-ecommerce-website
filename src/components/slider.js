import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

function Slider() {
  return (
    <div className="full-width-carousel-container">
      <Carousel controls indicators>
        {/* Slide 1 */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 full-width-slide"
            src="/images/10865897_18899295.jpg"
            alt="First slide"
          /> <Carousel.Caption className="carousel-caption-custom">
            <h3>"Every Second Counts. Make It Luxurious."</h3>
            <p>-Elevate your moments with premium timepieces.</p>
          </Carousel.Caption>
          
        </Carousel.Item>
        
        {/* Slide 2 */}
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 full-width-slide"
            src="/images/9471598_4193046.jpg"
            alt="Second slide"
          />
           <Carousel.Caption className="carousel-caption-custom">
            <h3>"Every Second Counts. Make It Luxurious."</h3>
            <p>-Elevate your moments with premium timepieces.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* Slide 3 */}
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 full-width-slide"
            src="/images/9471597_4193025.jpg" // Use different image for slide 3
            alt="Third slide"
          />
           <Carousel.Caption className="carousel-caption-custom">
            <h3>"Timeless Elegance, Precision Crafted."</h3>
            <p>– For the watch that never goes out of style.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;