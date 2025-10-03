import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Navigation = ({ cartItemCount }) => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center">
      <Link to="/" className="text-4xl font-bold text-white hover:text-gray-300 transition-colors">
        OBSY
      </Link>
      
      <div className="flex items-center space-x-8 text-white font-medium">
        <Link 
          to="/contact" 
          className={`hover:text-gray-300 transition-colors text-lg tracking-wide ${
            location.pathname === '/contact' ? 'text-gray-300' : ''
          }`}
        >
          CONTACT
        </Link>
        
        <Link 
          to="/cart" 
          className={`flex items-center space-x-2 hover:text-gray-300 transition-colors text-lg tracking-wide ${
            location.pathname === '/cart' ? 'text-gray-300' : ''
          }`}
        >
          <ShoppingBag size={20} />
          <span>CART</span>
          {cartItemCount > 0 && (
            <span className="bg-white text-black rounded-full px-2 py-1 text-sm font-bold">
              {cartItemCount}
            </span>
          )}
        </Link>
        
        <Link 
          to="/about" 
          className={`hover:text-gray-300 transition-colors text-lg tracking-wide ${
            location.pathname === '/about' ? 'text-gray-300' : ''
          }`}
        >
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;