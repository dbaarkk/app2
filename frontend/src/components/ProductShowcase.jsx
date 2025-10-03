import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { products, addToCart } from '../mock';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const ProductShowcase = ({ onCartUpdate }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const currentProduct = products[currentProductIndex];
  const nextIndex = (currentProductIndex + 1) % products.length;
  const prevIndex = currentProductIndex === 0 ? products.length - 1 : currentProductIndex - 1;

  const handleProductSwitch = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentProductIndex(nextIndex);
      } else {
        setCurrentProductIndex(prevIndex);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleBuyProduct = () => {
    addToCart(currentProduct);
    onCartUpdate();
    toast({
      title: "Item added to cart",
      description: `${currentProduct.name} has been added to your cart`,
      duration: 3000,
      className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",
    });
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Description */}
          <div className="text-white space-y-6 z-20 relative">
            <h1 className={`text-5xl md:text-6xl font-bold tracking-wider transition-all duration-500 ${
              isTransitioning ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'
            }`}>
              {currentProduct.name}
            </h1>
            
            <p className={`text-lg leading-relaxed text-gray-200 transition-all duration-500 delay-100 ${
              isTransitioning ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'
            }`}>
              {currentProduct.description}
            </p>
          </div>
          
          {/* Product Image with Glow Effect */}
          <div className="relative flex items-center justify-center">
            {/* White Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img 
                src="https://customer-assets.emergentagent.com/job_hoodiehub/artifacts/zlb2ph4z_16-169081_black-with-white-glow.png"
                alt="glow effect"
                className="w-96 h-96 object-contain opacity-80"
              />
            </div>
            
            {/* Product Image - Lower z-index so buttons can be on top */}
            <div className={`relative z-5 transition-all duration-500 transform ${
              isTransitioning ? 'opacity-0 scale-90 translate-x-12' : 'opacity-100 scale-100 translate-x-0'
            }`}>
              <img 
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Button - Positioned outside product area for better accessibility */}
        <button
          onClick={() => handleProductSwitch('next')}
          className={`absolute top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-gray-100 text-black rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg ${
            currentProductIndex === 0 ? 'right-8 lg:right-16' : 'left-8 lg:left-16'
          }`}
          disabled={isTransitioning}
        >
          {currentProductIndex === 0 ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
        
        {/* Buy Button - Higher z-index to stay on top */}
        <div className="absolute bottom-12 right-8 z-40">
          <div className="space-y-4">
            <Button
              onClick={handleBuyProduct}
              className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              BUY THIS HOODIE
            </Button>
            
            <Button
              onClick={handleViewCart}
              className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              VIEW CART
            </Button>
          </div>
        </div>
      </div>
      
      <Toaster />
    </div>
  );
};

export default ProductShowcase;