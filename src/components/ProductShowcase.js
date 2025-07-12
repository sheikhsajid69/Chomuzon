import React, { useContext } from 'react';
import './ProductShowcase.css';
import { CartContext } from '../context/CartContext';

const ProductShowcase = () => {
  const { addToCart } = useContext(CartContext);
  
  // Consolidated product list with no duplications
  const products = [
    {
      id: 'new1',
      name: 'boAt Wireless Headphones',
      price: '1,499',
      category: 'Electronics',
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_1x._SY304_CB564383870_.jpg'
    },
    {
      id: 'new2',
      name: 'Premium Yoga mat',
      price: '2,999',
      category: 'Fitness',
      image: 'https://m.media-amazon.com/images/I/61bd7MzEwML._AC_UL320_.jpg'
    },
    {
      id: 'new3',
      name: 'Wireless Gaming Headset',
      price: '3,499',
      category: 'Gaming',
      image: 'https://m.media-amazon.com/images/I/71TGsK2R3CL._AC_UY218_.jpg'
    },
    {
      id: 4,
      name: "Hand Grip Strengthener",
      price: "₹1,499",
      image: "https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_UL400_.jpg", 
      category: "Sports"
    },
    {
      id: 7,
      name: "Wooden Office Set",
      price: "$79.99",
      image: "https://m.media-amazon.com/images/I/71k6ifp-15L._AC_SL1500_.jpg",
      category: "Home Office"
    },
    {
      id: 8,
      name: "Dumble Set",
      price: "$199.99",
      image: "https://th.bing.com/th/id/OIP.kJ7Z1AQLP08aGp8f3CMQ2AAAAA?cb=iwp2&rs=1&pid=ImgDetMain",
      category: "Fitness"
    },
    {
      id: 9,
      name: "Premium Mat",
      price: "$49.99",
      image: "https://cdn1.productnation.co/stg/sites/1/626bb7ae8b6a6.jpeg",
      category: "Home"
    },
    {
      id: 10,
      name: "Wooden Cupboard",
      price: "$25.99",
      image: "https://i.pinimg.com/originals/9c/82/8c/9c828cadba0265e4fa82cbbdcaf3f1b0.jpg",
      category: "Furniture"
    },
    {
      id: 11,
      name: "Garden Set",
      price: "$34.99",
      image: "https://i5.walmartimages.com/asr/10956e96-a674-49da-a4e9-92d72c7aa984_2.01ceef014f490695780901cbdf5b744b.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      category: "Garden"
    },
    {
      id: 13,
      name: "Smart Watch",
      price: "$129.99",
      image: "https://m.media-amazon.com/images/I/61SSVxTSs3L._AC_UL400_.jpg",
      category: "Electronics"
    },
    {
      id: 15,
      name: "Coffee Maker",
      price: "$89.99",
      image: "https://m.media-amazon.com/images/I/71TGsK2R3CL._AC_UY218_.jpg",
      category: "Appliances"
    }
  ];

  // Handle add to cart click
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-showcase">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <span className="category">{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;