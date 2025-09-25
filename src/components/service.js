import React from 'react';
import '../App.css';

const WatchServices = () => {
  return (
     <div className="services-section">
      <h2><span>J</span>ust <span>T</span>imez Watch Services</h2>
      <p className="subtitle">Premium care for your timepiece</p>
      
      <div className="services-container">
        {/* Service 1 */}
        <div className="service-circle">
          <div className="circle-icon">⌚</div>
          <h3>Straps</h3>
          <p>Luxury replacements</p>
        </div>

        {/* Service 2 */}
        <div className="service-circle">
          <div className="circle-icon">⏱️</div>
          <h3>Battery</h3>
          <p>Quick & reliable</p>
        </div>

        {/* Service 3 */}
        <div className="service-circle">
          <div className="circle-icon">✨</div>
          <h3>Polishing</h3>
          <p>Restore shine</p>
        </div>

        {/* Service 4 */}
        <div className="service-circle">
          <div className="circle-icon">🔧</div>
          <h3>Repair</h3>
          <p>Expert servicing</p>
        </div>

        {/* Service 5 */}
        <div className="service-circle">
          <div className="circle-icon">💧</div>
          <h3>Waterproof</h3>
          <p>Seal protection</p>
        </div>
      </div>
    </div>
  );
};

export default WatchServices;