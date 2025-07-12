import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';
import './HomeImprovementPage.css';

const HomeImprovementPage = () => {
  const { addToCart } = useContext(CartContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Categories based on the image
  const categories = [
    { id: 1, name: "Bathroom", image: "https://m.media-amazon.com/images/I/51dSVcIuHhL.AC_SX250.jpg" },
    { id: 2, name: "Home safety", image: "https://m.media-amazon.com/images/I/51TFyNSsA0L.AC_SX250.jpg" },
    { id: 3, name: "Cleaning", image: "https://m.media-amazon.com/images/I/31AXgvn0WhL.AC_SX250.jpg" },
    { id: 4, name: "Ladders", image: "https://m.media-amazon.com/images/I/51Y8bbsgOgL.AC_SX250.jpg" },
    { id: 5, name: "Tools", image: "https://m.media-amazon.com/images/I/51zNPhfL9QL.AC_SX250.jpg" },
    { id: 6, name: "Electricals", image: "https://m.media-amazon.com/images/I/318fsFYdhVL.AC_SX250.jpg" },
    { id: 7, name: "Kitchen", image: "https://m.media-amazon.com/images/I/51BmSp5Jm3L.AC_SX250.jpg" },
    { id: 8, name: "Paints", image: "https://m.media-amazon.com/images/I/41TXEU5FlnL.AC_SX250.jpg" },
    { id: 9, name: "Hardware", image: "https://m.media-amazon.com/images/I/51dSVcIuHhL.AC_SX250.jpg" }
  ];

  // Banner slide for Hindware promotion
  const bannerSlides = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/51dSVcIuHhL.AC_SX250.jpg",
      title: "hindware",
      description: "Up to 30% off | Brand Days | 18th - 19th May"
    }
  ];

  // Products based on the image
  const products = [
    {
      id: 'hi1',
      name: 'GM 2041 Trio 2 Pin Flex Box',
      price: '409',
      originalPrice: '599',
      discount: '35% off',
      image: 'https://m.media-amazon.com/images/I/51dSVcIuHhL.AC_SX250.jpg',
      rating: 4.5,
      reviews: '2,704'
    },
    {
      id: 'hi2',
      name: 'Scotch-Brite Rubber Kitchen Gloves',
      price: '150',
      originalPrice: '199',
      discount: '25% off',
      image: 'https://m.media-amazon.com/images/I/51TFyNSsA0L.AC_SX250.jpg',
      rating: 4.0,
      reviews: '1,456'
    },
    {
      id: 'hi3',
      name: 'Goldmedal Curve Plus Angle Holder',
      price: '155',
      originalPrice: '199',
      discount: '25% off',
      image: 'https://m.media-amazon.com/images/I/31AXgvn0WhL.AC_SX250.jpg',
      rating: 4.0,
      reviews: '1,641'
    },
    {
      id: 'hi4',
      name: 'Goldmedal Spike 3-Pin Multiplug',
      price: '105',
      originalPrice: '149',
      discount: '29% off',
      image: 'https://m.media-amazon.com/images/I/51Y8bbsgOgL.AC_SX250.jpg',
      rating: 4.2,
      reviews: '4,481'
    },
    {
      id: 'hi5',
      name: 'Stanley 10-151-5 Basic Cutter',
      price: '45',
      originalPrice: '59',
      discount: '25% off',
      image: 'https://m.media-amazon.com/images/I/51zNPhfL9QL.AC_SX250.jpg',
      rating: 4.3,
      reviews: '3,232'
    },
    {
      id: 'hi6',
      name: 'ABRO Roller Master Tape',
      price: '51',
      originalPrice: '75',
      discount: '32% off',
      image: 'https://m.media-amazon.com/images/I/318fsFYdhVL.AC_SX250.jpg',
      rating: 4.1,
      reviews: '108'
    },
    {
      id: 'hi7',
      name: 'Asian Paints EzyCR8 Trunk Set',
      price: '555',
      originalPrice: '899',
      discount: '38% off',
      image: 'https://m.media-amazon.com/images/I/51BmSp5Jm3L.AC_SX250.jpg',
      rating: 4.0,
      reviews: '502'
    },
    {
      id: 'hi8',
      name: 'QUBO 16A WiFi + BT Smart Plug',
      price: '799',
      originalPrice: '1,499',
      discount: '45% off',
      image: 'https://m.media-amazon.com/images/I/41TXEU5FlnL.AC_SX250.jpg',
      rating: 4.1,
      reviews: '2,951'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      price: parseFloat(product.price),
      category: 'Home Improvement'
    });
    alert(`${product.name} added to cart!`);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <>
      <Header />
      <div className="home-improvement-page">
        {/* Category Navigation */}
        <div className="categories-section">
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Slider */}
        <div className="banner-slider">
          {bannerSlides.map((slide, index) => (
            <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          <div className="slider-dots">
            {bannerSlides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <h2>Lowest prices on everyday home essentials</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.discount && <span className="discount-badge">{product.discount}</span>}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <div className="rating-stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="review-count">{product.reviews}</span>
                  </div>
                  <div className="price-info">
                    <span className="current-price">₹{product.price}</span>
                    <span className="original-price">₹{product.originalPrice}</span>
                  </div>
                  {product.id === 'hi6' && (
                    <div className="limited-deal">Limited time deal</div>
                  )}
                  <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeImprovementPage;