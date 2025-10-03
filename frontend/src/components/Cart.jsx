import React, { useState, useEffect } from 'react';
import { getCartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } from '../mock';
import { Button } from './ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';

const Cart = ({ onCartUpdate }) => {
  const [cartItems, setCartItems] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
    setCartItems(getCartItems());
    onCartUpdate();
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
      duration: 2000,
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
    setCartItems(getCartItems());
    onCartUpdate();
  };

  const handleCheckout = () => {
    // Mock checkout - will be connected to Stripe later
    toast({
      title: "Checkout",
      description: "Stripe integration will be connected here",
      duration: 3000,
    });
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
    onCartUpdate();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      duration: 2000,
    });
  };

  const total = getCartTotal();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      <div className="relative z-10 min-h-screen px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-white">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-4">
              CART
            </h1>
            <div className="flex items-center justify-center text-gray-300">
              <ShoppingBag size={24} className="mr-2" />
              <span className="text-xl">{cartItems.length} item(s)</span>
            </div>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={96} className="mx-auto mb-6 text-gray-500" />
              <h2 className="text-3xl font-bold mb-4 text-gray-400">No items in cart</h2>
              <p className="text-gray-500 text-lg mb-8">Your cart is empty. Add some items to get started!</p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-300 text-lg">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                        >
                          <Minus size={16} />
                        </Button>
                        
                        <span className="text-xl font-bold w-12 text-center">{item.quantity}</span>
                        
                        <Button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          onClick={() => handleRemoveItem(item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:text-red-300 hover:bg-red-400 hover:bg-opacity-10 mt-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>\n                    </div>
                  </div>
                ))}
              </div>
              
              {/* Cart Summary */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold">Total:</span>
                  <span className="text-3xl font-bold">${total.toFixed(2)}</span>
                </div>
                
                <div className="space-y-4">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
                  >
                    CHECKOUT (Stripe Integration Coming Soon)
                  </Button>
                  
                  <Button
                    onClick={handleClearCart}
                    variant="outline"
                    className="w-full bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Toaster />
    </div>
  );
};

export default Cart;