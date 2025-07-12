import React from 'react';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Kids Play Beyblade Metal Fusion Set",
      image: "https://m.media-amazon.com/images/I/71kcUe0mjiL._AC_UL400_.jpg",
      price: 599.00,
      rating: 4.5,
      reviews: 1250
    },
    {
      id: 2,
      title: "Berkeley Ice Roller With Scrubber",
      image: "https://m.media-amazon.com/images/I/61eDx+JjPxL._AC_UL400_.jpg",
      price: 799.00,
      rating: 4.2,
      reviews: 1086
    },
    {
      id: 3,
      title: "Board Games Collection",
      image: "https://m.media-amazon.com/images/I/81oC5pYhh2L._AC_UL400_.jpg",
      price: 999.00,
      rating: 4.7,
      reviews: 856
    },
    {
      id: 4,
      title: "3-D Puzzles Set",
      image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_UL400_.jpg",
      price: 449.00,
      rating: 4.4,
      reviews: 2341
    }
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5-Math.floor(product.rating))}</span>
              <span className="review-count">({product.reviews.toLocaleString()})</span>
            </div>
            <div className="product-price">
              <span className="currency">₹</span>
              <span className="amount">{product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;