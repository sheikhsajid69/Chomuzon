import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import ProductShowcase from './components/ProductShowcase';
import Register from './components/Register';
import TodoPage from './components/TodoPage';
import ProfilePage from './components/ProfilePage';
import AmazonFreshPage from './components/AmazonFreshPage';
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';
import ChomuzonPayPage from './components/ChomuzonPayPage';
import ChomuzonPlayPage from './components/ChomuzonPlayPage';
import ChomuzonBasicsPage from './components/ChomuzonBasicsPage';
import HomeImprovementPage from './components/HomeImprovementPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/fresh" element={<AmazonFreshPage />} />
            <Route path="/pay" element={<ChomuzonPayPage />} />
            <Route path="/play" element={<ChomuzonPlayPage />} />
            <Route path="/basics" element={<ChomuzonBasicsPage />} />
            <Route path="/home-improvement" element={<HomeImprovementPage />} />
            <Route path="/" element={
              <>
                <Header />
                <main className="main-content">
                  <ImageSlider />
                  <ProductShowcase />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

<Route path="/" element={
  <>
    <Header />
    <main className="main-content">
      <ImageSlider />
      <ProductShowcase />
    </main>
    <Footer />
  </>
} />