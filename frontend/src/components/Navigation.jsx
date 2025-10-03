import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navigation = ({ cartItemCount }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold text-white hover:text-gray-300 transition-colors">
          OBSY
        </Link>
        
        {/* Mobile/Staggered Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors z-50"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Staggered Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8 text-white font-medium">
          {/* Close X Button */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-60"
          >
            <X size={32} />
          </button>
          
          <div className="text-6xl font-bold mb-8 tracking-wider">OBSY</div>
          
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              location.pathname === '/contact' ? 'text-gray-300' : ''
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            CONTACT
          </Link>
          
          <Link 
            to="/cart" 
            onClick={() => setIsMenuOpen(false)}
            className={`flex items-center space-x-4 text-3xl hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              location.pathname === '/cart' ? 'text-gray-300' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <ShoppingBag size={32} />
            <span>CART</span>
            {cartItemCount > 0 && (
              <span className="bg-white text-black rounded-full px-3 py-1 text-lg font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          <Link 
            to="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              location.pathname === '/about' ? 'text-gray-300' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            ABOUT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;