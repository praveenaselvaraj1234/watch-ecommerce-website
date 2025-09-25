import "../App.css";
import { FaShoppingCart, FaUserCircle, FaSearch, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleSearchChange = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <div id="navbar-container">
      <div>
        <marquee behavior="scroll" direction="left">
          🎉 Special Offers: 20% off on all watches this week! • Free shipping on orders above ₹20,000 • New collection arriving soon! 🎉
        </marquee>
      </div>
      <nav id="navbar">
        <div id="brand">
            <h4>
              <span>J</span>UST <span>T</span>IMEZ
            </h4>
        </div>
        <div id="search-container">
          <i><FaSearch /></i>
          <input
            type="text"
            placeholder="Search Watch..."
            onChange={handleSearchChange}
          />
        </div>
        <div id="nav-detail">
          <Link id="nav-detail-link" to="/" onClick={() => props.handleShow(false)}> Home</Link>
          <div>About</div>
          <div>Contact</div>
          <Link id="nav-detail-link" to="/wishlist"><FaHeart/>  Wishlist</Link>
          <div id="cart-sup" onClick={() => props.handleShow(true)}>
            <FaShoppingCart />
            <sup>{props.count}</sup>Item(s)
          </div>
          <div id="logo">
            <FaUserCircle />
          </div>
        </div>
      </nav>


      <div id="navbar-dropdowns">
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("kids")}
          onMouseLeave={handleMouseLeave}
        >
          Kids
          {activeDropdown === "kids" && (
            <div className="dropdown-content">
              <a href="kids">Smart Watches</a>
              <a href="kids">Analog Watches</a>
              <a href="kids">Digital Watches</a>
              <a href="kids">Cartoon Watches</a>
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("women")}
          onMouseLeave={handleMouseLeave}
        >
          Women
          {activeDropdown === "women" && (
            <div className="dropdown-content">
              <a href="women">Luxury Watches</a>
              <a href="women">Casual Watches</a>
              <a href="women">Modern Watches</a>
              <a href="women">Sport Watches</a>
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("men")}
          onMouseLeave={handleMouseLeave}
        >
          Men
          {activeDropdown === "men" && (
            <div className="dropdown-content">
              <a href="men">Chronograph Watch</a>
              <a href="men">Digital Watch</a>
              <a href="men">Analog Watch</a>
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          Services
          {activeDropdown === "services" && (
            <div className="dropdown-content">
              <a href="services">Repairs</a>
              <a href="services">Battery Replacement</a>
              <a href="services">Strap Change</a>
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("warranty")}
          onMouseLeave={handleMouseLeave}
        >
          Check Warranty
          {activeDropdown === "warranty" && (
            <div className="dropdown-content">
              <a href="warranty">Warranty Status</a>
              <a href="warranty">Extend Warranty</a>
              <a href="warranty">Warranty Terms</a>
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;     