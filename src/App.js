import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/wishlist';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDetails from './components/UserDetails';
import "./App.css";
import Viewdetail from './components/viewdetail';

function App() {
  const [products] = useState([
    {
      id: 1,
      product: 'Analog Watch',
      price: 2835,
      image: '/images/analog-watch-1845547_640.jpg',
      manufacturer: 'Titan',
      offers: '20% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
     {
      id: 2,
      product: 'Digital Watch',
      price: 1499,
      image: '/images/watch-7434946_640.jpg',
      manufacturer: 'Casio',
      offers: '10% Instant Discount with UPI',
      description: 'Stylish digital watch with LED backlight.'
    },
    {
      id: 3,
      product: 'Luxury Watch',
      price: 5999,
      image: '/images/watch-1315744_640.jpg',
      manufacturer: 'Titan',
      offers: '20% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 4,
      product: 'Digital Watch',
      price: 1299,
      image: '/images/watch-7434946_640.jpg',
      manufacturer: 'Titan',
      offers: '20% Off + 20% discount on Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 5,
      product: 'Smart Watch',
      price: 4599,
      image: '/images/watch-7469601_640.jpg',
      manufacturer: 'Titan',
      offers: 'Buy 2 Get 30% off',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 6,
      product: 'Chronograph Watch',
      price: 3299,
      image: '/images/wristwatch-6409941_640.jpg',
      manufacturer: 'Titan',
      offers: '20% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 7,
      product: 'Sports Watch',
      price: 1999,
      image: '/images/analog-watch-1869928_640.jpg',
      manufacturer: 'Titan',
      offers: 'Available for free shipping ',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 8,
      product: 'Classic Watch',
      price: 2499,
      image: '/images/apple-watch-4028102_640.jpg',
      manufacturer: 'Titan',
      offers: '40% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 9,
      product: 'Elegant Watch',
      price: 3799,
      image: '/images/watch-6578013_640.jpg',
      manufacturer: 'Titan',
      offers: '30% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 10,
      product: 'Minimalist Watch',
      price: 1599,
      image: '/images/watch-7072553_640.jpg',
      manufacturer: 'Titan',
      offers: '10% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 11,
      product: 'Vintage Watch',
      price: 2899,
      image: '/images/wristwatch-407096_640.jpg',
      manufacturer: 'Titan',
      offers: 'Buy 3 Get 48% Off',
      description: 'Elegant analog watch perfect for casual wear.'
    },
    {
      id: 12,
      product: 'Premium Watch',
      price: 4999,
      image: '/images/timepiece-7103973_640.jpg',
      manufacturer: 'Titan',
      offers: '20% Off + Free Shipping',
      description: 'Elegant analog watch perfect for casual wear.'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [wishlistItems, setWishlistItems] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [role, setRole] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    const savedStatus = localStorage.getItem('isRegistered') === 'true';
    if (savedRole && savedStatus) {
      setRole(savedRole);
      setIsRegistered(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = product => {
    setCartItems(prev => {
      const exist = prev.find(i => i.id === product.id);
      return exist
        ? prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...product, quantity: 1 }];
    });
    alert('Added to cart');
  };

  const addToWishlist = product => {
    setWishlistItems(prev => prev.some(i => i.id === product.id) ? prev : [...prev, product]);
    alert('Added to wishlist');
  };

  const removeFromWishlist = id => {
    setWishlistItems(prev => prev.filter(i => i.id !== id));
    alert('Removed from wishlist');
  };

  const handleRegister = registeredRole => {
    setRole(registeredRole);
    setIsRegistered(true);
    localStorage.setItem('role', registeredRole);
    localStorage.setItem('isRegistered', 'true');
  };

  const handleLogin = loggedRole => {
    setRole(loggedRole);
    setIsRegistered(true);
    localStorage.setItem('role', loggedRole);
    localStorage.setItem('isRegistered', 'true');
  };

  const filteredProducts = products.filter(p =>
    p.product.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <Routes>
      <Route path="/register" element={<Register onRegister={handleRegister} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      
      {isRegistered ? (
        <>
          <Route 
            path="/home" 
            element={
              <Home
                filteredProducts={filteredProducts}
                showCart={showCart}
                setShowCart={setShowCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                wishlistItems={wishlistItems}
                setSearchTerm={setSearchTerm}
              />
            } 
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlistItems}
                addToCart={addToCart}
                removeFromWishlist={removeFromWishlist}
              />
            }
          />
          {role === 'admin' && (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/userdetails" element={<UserDetails />} />
            </>
          )}
          <Route 
          path="/product/:id" 
                    element={<Viewdetail products={products} />} 
/>
        </>
      ) : (
        <Route path="*" element={<Navigate to="/register" replace />} />
      )}
    </Routes>
  );
}

export default App;