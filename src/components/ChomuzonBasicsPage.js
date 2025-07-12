import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ChomuzonBasicsPage.css';
import Header from './Header';
import Footer from './Footer';

const ChomuzonBasicsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState({});
  const [activeCategory, setActiveCategory] = useState('computer');

  // Computer accessories data based on the image
  const computerAccessories = [
    {
      id: 101,
      title: "Chomuzon Basics Wireless Mouse with USB Nano Receiver",
      image: "https://m.media-amazon.com/images/I/51dSVcIuHhL.AC_SX250.jpg",
      rating: 4.2,
      reviews: "2,521",
      price: 499,
      originalPrice: 799,
      discount: "38% off",
      colors: ["#000000"],
      limited: true
    },
    {
      id: 102,
      title: "Chomuzon Basics USB Type-C to USB-A 3.1 Gen 2 Cable",
      image: "https://m.media-amazon.com/images/I/51TFyNSsA0L.AC_SX250.jpg",
      rating: 4.3,
      reviews: "1,856",
      price: 399,
      originalPrice: 599,
      discount: "33% off",
      colors: [],
      limited: true
    },
    {
      id: 103,
      title: "Chomuzon Basics 4-Port USB 3.0 Hub",
      image: "https://m.media-amazon.com/images/I/31AXgvn0WhL.AC_SX250.jpg",
      rating: 4.1,
      reviews: "983",
      price: 799,
      originalPrice: 1299,
      discount: "38% off",
      colors: [],
      limited: true
    },
    {
      id: 104,
      title: "Chomuzon Basics Wireless Keyboard and Mouse Combo",
      image: "https://m.media-amazon.com/images/I/51Y8bbsgOgL.AC_SX250.jpg",
      rating: 4.2,
      reviews: "3,816",
      price: 1499,
      originalPrice: 1999,
      discount: "25% off",
      colors: ["#000000"],
      limited: true
    },
    {
      id: 105,
      title: "Chomuzon Basics USB-C to HDMI Multiport Adapter",
      image: "https://m.media-amazon.com/images/I/51zNPhfL9QL.AC_SX250.jpg",
      rating: 4.3,
      reviews: "783",
      price: 1299,
      originalPrice: 1799,
      discount: "28% off",
      colors: [],
      limited: true
    },
    {
      id: 106,
      title: "Chomuzon Basics USB-C to USB-A Female Adapter",
      image: "https://m.media-amazon.com/images/I/318fsFYdhVL.AC_SX250.jpg",
      rating: 4.4,
      reviews: "1,574",
      price: 299,
      originalPrice: 499,
      discount: "40% off",
      colors: [],
      limited: true
    },
    {
      id: 107,
      title: "Chomuzon Basics DisplayPort to HDMI Cable",
      image: "https://m.media-amazon.com/images/I/51BmSp5Jm3L.AC_SX250.jpg",
      rating: 4.3,
      reviews: "2,251",
      price: 699,
      originalPrice: 999,
      discount: "30% off",
      colors: [],
      limited: true
    },
    {
      id: 108,
      title: "Chomuzon Basics USB-C to Ethernet Adapter",
      image: "https://m.media-amazon.com/images/I/41TXEU5FlnL.AC_SX250.jpg",
      rating: 4.2,
      reviews: "584",
      price: 899,
      originalPrice: 1299,
      discount: "31% off",
      colors: [],
      limited: true
    }
  ];

  // Headphones & speakers data based on the image
  const headphonesAndSpeakers = [
    {
      id: 201,
      title: "Chomuzon Basics Bluetooth Receiver",
      image: "https://m.media-amazon.com/images/I/61Qqg+T8SUL._AC_UL320_.jpg",
      rating: 4,
      reviews: "100",
      price: 329,
      originalPrice: 499,
      discount: "34% off",
      colors: [],
      limited: true
    },
    {
      id: 202,
      title: "Chomuzon Basics Wired Earphones",
      image: "https://m.media-amazon.com/images/I/61yjoRgptdL._AC_UL320_.jpg",
      rating: 4,
      reviews: "447",
      price: 569,
      originalPrice: 799,
      discount: "29% off",
      colors: [],
      limited: true
    },
    {
      id: 203,
      title: "Chomuzon Basics Wireless Earbuds",
      image: "https://m.media-amazon.com/images/I/61QyBXsXWCL._AC_UL320_.jpg",
      rating: 3.5,
      reviews: "279",
      price: 535,
      originalPrice: 799,
      discount: "33% off",
      colors: ["#6a5acd"],
      limited: true
    },
    {
      id: 204,
      title: "Chomuzon Basics True Wireless Earbuds",
      image: "https://m.media-amazon.com/images/I/61+WYAjltpL._AC_UL320_.jpg",
      rating: 4,
      reviews: "1,075",
      price: 569,
      originalPrice: 799,
      discount: "29% off",
      colors: ["#ffffff"],
      limited: true
    },
    {
      id: 205,
      title: "Chomuzon Basics Bluetooth Earbuds",
      image: "https://m.media-amazon.com/images/I/61OfqKfGnwL._AC_UL320_.jpg",
      rating: 4,
      reviews: "575",
      price: 599,
      originalPrice: 799,
      discount: "25% off",
      colors: ["#000000"],
      limited: true
    },
    {
      id: 206,
      title: "Chomuzon Basics Bluetooth Speaker",
      image: "https://m.media-amazon.com/images/I/71Jk6xice+L._AC_UL320_.jpg",
      rating: 4,
      reviews: "149",
      price: 649,
      originalPrice: 899,
      discount: "28% off",
      colors: ["#cccccc", "#333333"],
      limited: true
    },
    {
      id: 207,
      title: "Chomuzon Basics Portable Speaker",
      image: "https://m.media-amazon.com/images/I/71Kkm5nIQgL._AC_UL320_.jpg",
      rating: 4,
      reviews: "149",
      price: 599,
      originalPrice: 799,
      discount: "25% off",
      colors: ["#333333", "#666666"],
      limited: true
    },
    {
      id: 208,
      title: "Chomuzon Basics Neckband Earphones",
      image: "https://m.media-amazon.com/images/I/71Ge7KKPQQL._AC_UL320_.jpg",
      rating: 4,
      reviews: "149",
      price: 569,
      originalPrice: 699,
      discount: "19% off",
      colors: [],
      limited: true
    },
    {
      id: 209,
      title: "Chomuzon Basics True Wireless Earbuds",
      image: "https://m.media-amazon.com/images/I/61jhJbgJLzL._AC_UL320_.jpg",
      rating: 4,
      reviews: "351",
      price: 519,
      originalPrice: 699,
      discount: "26% off",
      colors: ["#000000", "#ffffff"],
      limited: true
    }
  ];

  // Home essentials data (original products)
  const homeEssentials = [
    {
      id: 1,
      title: "Chomuzon Basics Vacuum Storage Bags",
      image: "https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_UL320_.jpg",
      rating: 4.5,
      reviews: "105,065",
      price: 1299,
      originalPrice: 1560,
      discount: "20% off",
      colors: [],
      limited: true
    },
    {
      id: 2,
      title: "Chomuzon Basics Plastic Medicine Cabinet",
      image: "https://m.media-amazon.com/images/I/71sBUPHXqFL._AC_UL320_.jpg",
      rating: 4,
      reviews: "1,444",
      price: 1049,
      originalPrice: 1260,
      discount: "20% off",
      colors: ["#cccccc", "#8b8b8b"],
      limited: true
    },
    {
      id: 3,
      title: "Chomuzon Basics Slim Rolling Storage Cart",
      image: "https://m.media-amazon.com/images/I/71sBUPHXqFL._AC_UL320_.jpg",
      rating: 4,
      reviews: "1,086",
      price: 599,
      originalPrice: 799,
      discount: "25% off",
      colors: [],
      limited: true
    },
    {
      id: 4,
      title: "Chomuzon Basics Vacuum Storage Bags Set",
      image: "https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_UL320_.jpg",
      rating: 4.5,
      reviews: "14,042",
      price: 749,
      originalPrice: 999,
      discount: "25% off",
      colors: [],
      limited: true
    },
    {
      id: 5,
      title: "Chomuzon Basics Plastic Closet Organizer",
      image: "https://m.media-amazon.com/images/I/81Lz7JnBWOL._AC_UL320_.jpg",
      rating: 4,
      reviews: "98,936",
      price: 1698,
      originalPrice: 2260,
      discount: "25% off",
      colors: ["#e8d9c5", "#8b8b8b", "#333333", "#654321", "#000000"],
      limited: true
    },
    {
      id: 6,
      title: "Chomuzon Basics - Multipurpose Drawer Organizer",
      image: "https://m.media-amazon.com/images/I/71sBUPHXqFL._AC_UL320_.jpg",
      rating: 4,
      reviews: "29,571",
      price: 400,
      originalPrice: 499,
      discount: "20% off",
      colors: [],
      limited: false
    },
    {
      id: 7,
      title: "Chomuzon Basics 30 Piece Velvet Hangers",
      image: "https://m.media-amazon.com/images/I/81Lz7JnBWOL._AC_UL320_.jpg",
      rating: 4,
      reviews: "44,124",
      price: 530,
      originalPrice: 699,
      discount: "30% off",
      colors: [],
      limited: false
    },
    {
      id: 8,
      title: "Chomuzon Basics Plastic Clothes Hangers",
      image: "https://m.media-amazon.com/images/I/81Lz7JnBWOL._AC_UL320_.jpg",
      rating: 4,
      reviews: "6,024",
      price: 406,
      originalPrice: 499,
      discount: "20% off",
      colors: [],
      limited: false
    }
  ];

  // Categories
  const categories = [
    { id: "computer", name: "Computer accessories", discount: "Up to 70% off" },
    { id: "headphones", name: "Headphones & speakers", discount: "Starting ₹499" },
    { id: "home", name: "Home essentials", discount: "Min. 50% off" }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    alert(`${product.title} added to cart!`);
  };

  const handleColorSelect = (productId, color) => {
    setSelectedColor({
      ...selectedColor,
      [productId]: color
    });
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  // Get products based on active category
  const getProductsByCategory = () => {
    switch(activeCategory) {
      case 'computer':
        return computerAccessories;
      case 'headphones':
        return headphonesAndSpeakers;
      case 'home':
      default:
        return homeEssentials;
    }
  };

  // Get category title based on active category
  const getCategoryTitle = () => {
    const category = categories.find(cat => cat.id === activeCategory);
    return `${category.name} | ${category.discount}`;
  };

  return (
    <div className="basics-page">
      <Header />
      
      {/* Banner */}
      <div className="basics-banner">
        <img 
          src="https://m.media-amazon.com/images/G/31/img23/PB/Sep23/Amazon_basics/rev/Banner_1500x300.jpg" 
          alt="Chomuzon Basics Banner" 
          className="basics-full-banner"
        />
      </div>
      
      {/* Category Navigation */}
      <div className="category-navigation">
        {categories.map(category => (
          <div 
            key={category.id} 
            className={`category-nav-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
      
      {/* Category Section */}
      <div className="basics-category-section">
        <h2>{getCategoryTitle()}</h2>
        
        {/* Products Grid */}
        <div className="products-grid">
          {getProductsByCategory().map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="amazon-basics-label">
                  <span>amazon basics</span>
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="review-count">{product.reviews}</span>
                </div>
                <div className="product-price">
                  <span className="current-price">₹{product.price}</span>
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="discount">({product.discount})</span>
                </div>
                {product.colors.length > 0 && (
                  <div className="product-colors">
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className={`color-option ${selectedColor[product.id] === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(product.id, color)}
                      >
                        {selectedColor[product.id] === color && <i className="fas fa-check"></i>}
                      </div>
                    ))}
                  </div>
                )}
                {product.limited && (
                  <div className="limited-deal">Limited time deal</div>
                )}
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChomuzonBasicsPage;