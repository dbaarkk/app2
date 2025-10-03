import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { getCartItems } from './mock';

function App() {
  const [cartItems, setCartItems] = useState(getCartItems());

  const updateCart = () => {
    setCartItems([...getCartItems()]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<ProductShowcase onCartUpdate={updateCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart onCartUpdate={updateCart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;