import { useNavigate } from 'react-router-dom';
import CartList from './cartList';
import Slider from './slider';
import BrandSection from './brandSection';
import Product from './Product';
import WatchServices from './service';
import WhyChoose from './whyChoose';
import Testimonials from './testimonials';
import Footer from './footer';
import Navbar from './navbar';

export default function Home({
  filteredProducts,
  showCart,
  setShowCart,
  cartItems,
  setCartItems,
  addToCart,
  addToWishlist,
  setSearchTerm
}) {
  const navigate = useNavigate();

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <Navbar
        count={cartItems.length}
        handleShow={setShowCart}
        setSearchTerm={setSearchTerm}
      />

      {showCart ? (
        <CartList cart={cartItems} setCart={setCartItems} />
      ) : (
        <>
          <Slider />
          <BrandSection />
          <Product
            products={filteredProducts}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            handleViewDetails={handleViewDetails}
          />
          <WatchServices />
          <WhyChoose />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}