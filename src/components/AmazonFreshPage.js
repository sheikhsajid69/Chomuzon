import React, { useState, useEffect, useContext } from 'react';
import './AmazonFreshPage.css';
import { CartContext } from '../context/CartContext';
import { 
  freshBannerSlides, 
  groceryCategories, 
  personalCareCategories, 
  seasonsSpecialJuices, 
  seasonsSpecialSunscreen, 
  cookingEssentials,
  dalAndPulses,
  oilAndGhee,
  coffeeAndTea,
  biscuits,
  formatPriceForCart 
} from '../data/freshProducts';

const AmazonFreshPage = () => {
  const { addToCart } = useContext(CartContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSlideChange((currentSlide + 1) % freshBannerSlides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handle slide transition animation
  const handleSlideChange = (newIndex) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTimeout(() => {
        setIsSliding(false);
      }, 50);
    }, 300);
  };

  // Manual navigation
  const goToSlide = (index) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
    }
  };

  const goToPrevSlide = () => {
    const newIndex = currentSlide === 0 ? freshBannerSlides.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentSlide + 1) % freshBannerSlides.length;
    handleSlideChange(newIndex);
  };

  const handleAddToCart = (product, sectionTitle) => {
    const cartProduct = {
      id: `${sectionTitle.replace(/\s+/g, '-').toLowerCase()}-${product.id}`,
      name: product.name,
      price: formatPriceForCart(product.price),
      image: product.image,
      category: sectionTitle,
    };
    addToCart(cartProduct);
    alert(`${product.name} added to cart!`);
  };

  const renderProductCard = (product, sectionTitle) => (
    <div key={product.id} className="fresh-product-card">
      {product.discount && <span className="fresh-product-discount">{product.discount}</span>}
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="fresh-product-image" />
        <div className="product-overlay">
          <button onClick={() => handleAddToCart(product, sectionTitle)} className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="fresh-product-info">
        <h4 className="fresh-product-name">{product.name}</h4>
        <p className="fresh-product-price">
          ₹{product.price}
          {product.originalPrice && <span className="fresh-product-original-price">₹{product.originalPrice}</span>}
        </p>
      </div>
    </div>
  );

  // Add this updated Dal and Pulses array before the return statement
  const updatedDalAndPulses = [
    {
      id: 'dp1',
      name: 'Organic Toor Dal',
      price: '149',
      originalPrice: '199',
      discount: '25% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/61HA0lc+dHL.AC_SL240_.jpg'
    },
    {
      id: 'dp2',
      name: 'Premium Moong Dal',
      price: '129',
      originalPrice: '169',
      discount: '24% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71iJt-aYbZL.AC_SL240_.jpg'
    },
    {
      id: 'dp3',
      name: 'Organic Chana Dal',
      price: '139',
      originalPrice: '179',
      discount: '22% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71I3BB5Rl6L.AC_SL240_.jpg'
    },
    {
      id: 'dp4',
      name: 'Premium Masoor Dal',
      price: '159',
      originalPrice: '199',
      discount: '20% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/61WNwggdyBL.AC_SL240_.jpg'
    },
    {
      id: 'dp5',
      name: 'Organic Urad Dal',
      price: '169',
      originalPrice: '219',
      discount: '23% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/91nZuaJTrnL.AC_SL240_.jpg'
    },
    {
      id: 'dp6',
      name: 'Premium Rajma',
      price: '189',
      originalPrice: '239',
      discount: '21% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/61NZt0SHUgL.AC_SL240_.jpg'
    },
    {
      id: 'dp7',
      name: 'Organic Kabuli Chana',
      price: '179',
      originalPrice: '229',
      discount: '22% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71NyVmFwlhL.AC_SL240_.jpg'
    },
    {
      id: 'dp8',
      name: 'Premium Black Chana',
      price: '149',
      originalPrice: '189',
      discount: '21% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71qaAOC2caL.AC_SL240_.jpg'
    },
    {
      id: 'dp9',
      name: 'Organic Green Moong',
      price: '159',
      originalPrice: '209',
      discount: '24% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/61oHN5JVeJL.AC_SL240_.jpg'
    },
    {
      id: 'dp10',
      name: 'Premium Mixed Dal',
      price: '199',
      originalPrice: '249',
      discount: '20% off',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/71+YH6EVKyL.AC_SL240_.jpg'
    }
  ];

  return (
    <div className="amazon-fresh-page">
      {/* Minimalist Banner Slider */}
      <section className="fresh-banner-slider">
        <div className="fresh-slider-container">
          {freshBannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`fresh-slide ${index === currentSlide ? 'active' : ''} ${isSliding ? 'sliding' : ''}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                transition: isSliding ? 'none' : 'transform 0.5s ease-in-out'
              }}
            >
              <img src={slide.image} alt={slide.alt} className="fresh-slide-image" />
              <div className="fresh-slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="fresh-slider-arrow prev" onClick={goToPrevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="fresh-slider-arrow next" onClick={goToNextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="fresh-slider-dots">
          {freshBannerSlides.map((_, index) => (
            <button
              key={index}
              className={`fresh-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Cashback Banner */}
      <section className="fresh-cashback-banner">
        <div className="fresh-cashback-content">
          <span className="fresh-cashback-icon">%</span>
          <div className="fresh-cashback-text">
            <h2>Flat <span>₹350 cashback*</span></h2>
            <p>*T&C apply</p>
          </div>
        </div>
        <button className="fresh-collect-now-btn">Collect Now &gt;</button>
      </section>

      {/* Groceries & Food Section */}
      <section className="fresh-category-section">
        <h2>Groceries & food</h2>
        <div className="fresh-category-grid">
          {groceryCategories.map(category => (
            <div key={category.id} className="fresh-category-card">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beauty & Personal Care Section */}
      <section className="fresh-category-section">
        <h2>Beauty & personal care</h2>
        <div className="fresh-category-grid">
          {personalCareCategories.map(category => (
            <div key={category.id} className="fresh-category-card">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Season's Special - Juices */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Season's special - Juices</h2>
          <a href="#" className="fresh-see-all">See all &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {seasonsSpecialJuices.map(product => renderProductCard(product, "Juices"))}
        </div>
      </section>

      {/* Season's Special - Sunscreen */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Season's special - Sunscreen</h2>
          <a href="#" className="fresh-see-all">See all &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {seasonsSpecialSunscreen.map(product => renderProductCard(product, "Sunscreen"))}
        </div>
      </section>

      {/* Cooking Essentials Section - Updated with new images */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Cooking essentials</h2>
          <a href="#" className="fresh-see-all">See all &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {updatedCookingEssentials.map(product => renderProductCard(product, "Cooking Essentials"))}
        </div>
      </section>

      {/* Dal & Pulses Section - Updated with new images */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Dal & pulses</h2>
          <a href="#" className="fresh-see-all">See all &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {updatedDalAndPulses.map(product => renderProductCard(product, "Dal & Pulses"))}
        </div>
      </section>

      {/* Oil & Ghee Section - Updated with new images */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Oil & ghee</h2>
          <a href="#" className="fresh-see-all">See all &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {updatedOilAndGhee.map(product => renderProductCard(product, "Oil & Ghee"))}
        </div>
      </section>

      {/* Coffee & Tea Section - Updated with new images */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Coffee & Tea</h2>
          <a href="#" className="fresh-see-all">See Coffee & Tea &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {updatedCoffeeAndTea.map(product => renderProductCard(product, "Coffee & Tea"))}
        </div>
      </section>

      {/* Biscuits Section - Updated with new images */}
      <section className="fresh-products-section">
        <div className="fresh-products-header">
          <h2>Biscuits</h2>
          <a href="#" className="fresh-see-all">See Biscuits &gt;</a>
        </div>
        <div className="fresh-products-carousel">
          {updatedBiscuits.map(product => renderProductCard(product, "Biscuits"))}
        </div>
      </section>

      {/* ... existing code ... */}
    </div>
  );
};

export default AmazonFreshPage;

const updatedCookingEssentials = [
  {
    id: 'ce1',
    name: 'Premium Cooking Oil',
    price: '249',
    originalPrice: '299',
    discount: '17% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/91sjEAy2I4L.AC_SL240_.jpg'
  },
  {
    id: 'ce2',
    name: 'Organic Spice Collection',
    price: '399',
    originalPrice: '499',
    discount: '20% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61XTBnVY8ML.AC_SL240_.jpg'
  },
  {
    id: 'ce3',
    name: 'Gourmet Rice Selection',
    price: '199',
    originalPrice: '249',
    discount: '20% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81JmTiQA68L.AC_SL240_.jpg'
  },
  {
    id: 'ce4',
    name: 'Premium Flour Pack',
    price: '129',
    originalPrice: '159',
    discount: '19% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81iej1TS6RL.AC_SL240_.jpg'
  },
  {
    id: 'ce5',
    name: 'Gourmet Salt Collection',
    price: '179',
    originalPrice: '229',
    discount: '22% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71PWhguzXkL.AC_SL240_.jpg'
  },
  {
    id: 'ce6',
    name: 'Organic Herbs Set',
    price: '299',
    originalPrice: '349',
    discount: '14% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61fV8xIUXlL.AC_SL240_.jpg'
  },
  {
    id: 'ce7',
    name: 'Premium Pasta Collection',
    price: '219',
    originalPrice: '279',
    discount: '21% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81N-mEgb7VL.AC_SL240_.jpg'
  },
  {
    id: 'ce8',
    name: 'Gourmet Sauce Pack',
    price: '349',
    originalPrice: '399',
    discount: '13% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71kmCqHua1L.AC_SL240_.jpg'
  },
  {
    id: 'ce9',
    name: 'Organic Cooking Essentials',
    price: '499',
    originalPrice: '599',
    discount: '17% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/91REmKyE84L.AC_SL240_.jpg'
  }
];

const updatedOilAndGhee = [
  {
    id: 'og1',
    name: 'Premium Olive Oil',
    price: '499',
    originalPrice: '599',
    discount: '17% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81FbVYZJYyL.AC_SL240_.jpg'
  },
  {
    id: 'og2',
    name: 'Organic Coconut Oil',
    price: '349',
    originalPrice: '429',
    discount: '19% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61A1MNF8b2L.AC_SL240_.jpg'
  },
  {
    id: 'og3',
    name: 'Pure Mustard Oil',
    price: '199',
    originalPrice: '249',
    discount: '20% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71WBHionksL.AC_SL240_.jpg'
  },
  {
    id: 'og4',
    name: 'Refined Sunflower Oil',
    price: '159',
    originalPrice: '199',
    discount: '20% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61rcMYf0tpL.AC_SL240_.jpg'
  },
  {
    id: 'og5',
    name: 'Pure Cow Ghee',
    price: '549',
    originalPrice: '649',
    discount: '15% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61mPDxeUokL.AC_SL240_.jpg'
  },
  {
    id: 'og6',
    name: 'Organic Sesame Oil',
    price: '299',
    originalPrice: '379',
    discount: '21% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71BKqHBVfFL.AC_SL240_.jpg'
  },
  {
    id: 'og7',
    name: 'Cold Pressed Groundnut Oil',
    price: '279',
    originalPrice: '329',
    discount: '15% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/51dAFGjEDqL.AC_SL240_.jpg'
  },
  {
    id: 'og8',
    name: 'Buffalo Ghee',
    price: '499',
    originalPrice: '599',
    discount: '17% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81gBShBlfOL.AC_SL240_.jpg'
  },
  {
    id: 'og9',
    name: 'Rice Bran Oil',
    price: '229',
    originalPrice: '279',
    discount: '18% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/618iMTypIrL.AC_SL240_.jpg'
  },
  {
    id: 'og10',
    name: 'Organic Ghee',
    price: '599',
    originalPrice: '699',
    discount: '14% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71n0Vd4ZBoL.AC_SL240_.jpg'
  }
];

const updatedCoffeeAndTea = [
  {
    id: 'ct1',
    name: 'Classic Instant Coffee',
    price: '199',
    originalPrice: '249',
    discount: '20% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/5109sLDpkvL.AC_SL240_.jpg'
  },
  {
    id: 'ct2',
    name: 'Premium Green Tea',
    price: '149',
    originalPrice: '199',
    discount: '25% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61Xzj6pJDGL.AC_SL240_.jpg'
  },
  {
    id: 'ct3',
    name: 'Herbal Tea Blend',
    price: '179',
    originalPrice: '229',
    discount: '22% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61z40Qqq-eL.AC_SL240_.jpg'
  },
  {
    id: 'ct4',
    name: 'Strong Black Coffee',
    price: '249',
    originalPrice: '299',
    discount: '17% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61pAgx5VCkL.AC_SL240_.jpg'
  },
  {
    id: 'ct5',
    name: 'Assam Tea Pack',
    price: '129',
    originalPrice: '159',
    discount: '19% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81VtX7W6VKL.AC_SL240_.jpg'
  },
  {
    id: 'ct6',
    name: 'South Indian Filter Coffee',
    price: '299',
    originalPrice: '349',
    discount: '14% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61SKDtdo8sL.AC_SL240_.jpg'
  },
  {
    id: 'ct7',
    name: 'Darjeeling Tea',
    price: '219',
    originalPrice: '279',
    discount: '21% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71OexQTz4-L.AC_SL240_.jpg'
  },
  {
    id: 'ct8',
    name: 'Organic Black Tea',
    price: '179',
    originalPrice: '229',
    discount: '22% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61pCi0XAemL.AC_SL240_.jpg'
  },
  {
    id: 'ct9',
    name: 'Classic Tea Bags',
    price: '99',
    originalPrice: '129',
    discount: '23% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/514akAhuCTL.AC_SL240_.jpg'
  },
  {
    id: 'ct10',
    name: 'Premium Coffee Beans',
    price: '349',
    originalPrice: '399',
    discount: '13% off',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61gdOrCX8BL.AC_SL240_.jpg'
  }
];

const updatedBiscuits = [
  {
    id: 'b1',
    name: 'Butter Cookies',
    price: '99',
    originalPrice: '129',
    discount: '23% off',
    image: 'https://m.media-amazon.com/images/I/81c0jxRWx3L._AC_UL320_.jpg'
  },
  {
    id: 'b2',
    name: 'Chocolate Cream Biscuits',
    price: '79',
    originalPrice: '99',
    discount: '20% off',
    image: 'https://m.media-amazon.com/images/I/71cw2JLKmvL._AC_UL320_.jpg'
  },
  {
    id: 'b3',
    name: 'Marie Gold',
    price: '59',
    originalPrice: '79',
    discount: '25% off',
    image: 'https://m.media-amazon.com/images/I/71ITQKMgEJL._AC_UL320_.jpg'
  },
  {
    id: 'b4',
    name: 'Digestive Biscuits',
    price: '89',
    originalPrice: '119',
    discount: '25% off',
    image: 'https://m.media-amazon.com/images/I/61m7bY5QG6L._AC_UL320_.jpg'
  },
  {
    id: 'b5',
    name: 'Oats Cookies',
    price: '109',
    originalPrice: '139',
    discount: '22% off',
    image: 'https://m.media-amazon.com/images/I/61BLfXsvmBL._AC_UL320_.jpg'
  },
  {
    id: 'b6',
    name: 'Jeera Biscuits',
    price: '69',
    originalPrice: '89',
    discount: '22% off',
    image: 'https://m.media-amazon.com/images/I/61YiLw5MLiL._AC_UL320_.jpg'
  },
  {
    id: 'b7',
    name: 'Cashew Cookies',
    price: '119',
    originalPrice: '149',
    discount: '20% off',
    image: 'https://m.media-amazon.com/images/I/71t9lKPkJOL._AC_UL320_.jpg'
  },
  {
    id: 'b8',
    name: 'Fruit Biscuits',
    price: '99',
    originalPrice: '129',
    discount: '23% off',
    image: 'https://m.media-amazon.com/images/I/61IhdI0oN8L._AC_UL320_.jpg'
  },
  {
    id: 'b9',
    name: 'Salted Crackers',
    price: '89',
    originalPrice: '109',
    discount: '18% off',
    image: 'https://m.media-amazon.com/images/I/71bufOt9zAL._AC_UL320_.jpg'
  },
  {
    id: 'b10',
    name: 'Wheat Biscuits',
    price: '79',
    originalPrice: '99',
    discount: '20% off',
    image: 'https://m.media-amazon.com/images/I/81rxulFBZoL._AC_UL320_.jpg'
  },
  {
    id: 'b11',
    name: 'Coconut Biscuits',
    price: '109',
    originalPrice: '139',
    discount: '22% off',
    image: 'https://m.media-amazon.com/images/I/71w2b73ACvL._AC_UL320_.jpg'
  },
  {
    id: 'b12',
    name: 'Honey Oat Cookies',
    price: '129',
    originalPrice: '159',
    discount: '19% off',
    image: 'https://m.media-amazon.com/images/I/81MdF4B3F1L._AC_UL320_.jpg'
  }
];

