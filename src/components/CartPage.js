import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CartPage.css';
import { CartContext } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const getItemPrice = (price) => {
    if (typeof price === 'string') {
      // Handle both ₹ and $ prefixes
      return parseFloat(price.replace(/[₹$,]/g, ''));
    }
    return price;
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate a checkout process
    setTimeout(() => {
      alert('Order placed successfully!');
      // Clear cart and redirect to home page
      cartItems.forEach(item => removeFromCart(item.id));
      navigate('/');
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="empty-cart">
          <i className="fas fa-shopping-cart cart-icon"></i>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="continue-shopping">Continue Shopping</Link>
        </div>
        <Footer />
      </>
    );
  }

  const subtotal = cartItems.reduce((total, item) => 
    total + (getItemPrice(item.price) * item.quantity), 0
  );
  
  const shipping = subtotal > 1000 ? 0 : 50; // Free shipping over ₹1000
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
        
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">₹{getItemPrice(item.price).toFixed(2)}</p>
                  <p className="item-category">{item.category}</p>
                  
                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                        disabled={isCheckingOut}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                        disabled={isCheckingOut}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                      disabled={isCheckingOut}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                  
                  <div className="item-total">
                    ₹{(getItemPrice(item.price) * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((count, item) => count + item.quantity, 0)} items):</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping & Handling:</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Order Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
            </button>
            <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;