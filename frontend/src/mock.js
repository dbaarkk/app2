// Mock data for OBSY hoodie brand

export const products = [
  {
    id: 'eclipse-mantle',
    name: 'ECLIPSE MANTLE',
    description: 'Embrace the allure of mystery with the "Eclipse Mantle" - a striking black hoodie robe designed for those who stride confidently through the shadows. This garment exudes understated power with its flowing cut, oversized hood, and matching belt closure. The intense black fabric captures an enigmatic vibe, inviting you to express your bold and adventurous side, whether indoors or out.',
    image: 'https://customer-assets.emergentagent.com/job_a2066223-0f39-4d44-93f3-f1409411c594/artifacts/g4kumexn_Gemini_Generated_Image_rg64qvrg64qvrg64%20%281%29.png',
    price: 149.99,
    color: 'black'
  },
  {
    id: 'luminous-shroud',
    name: 'LUMINOUS SHROUD',
    description: 'Step into immaculate comfort with the "Luminous Shroud" - a pure white hoodie robe blending serene minimalism with timeless elegance. Crafted from soft, premium fabric, this piece features a deep hood, adjustable drawstrings, and a relaxed silhouette secured by a belted waist. The crisp white hue symbolizes clarity and renewal, making this hoodie perfect for moments when tranquility and style converge.',
    image: 'https://customer-assets.emergentagent.com/job_a2066223-0f39-4d44-93f3-f1409411c594/artifacts/fitopb9v_Gemini_Generated_Image_pc1td3pc1td3pc1t%20%281%29.png',
    price: 149.99,
    color: 'white'
  }
];

export const brandInfo = {
  name: 'OBSY',
  tagline: 'Embrace the Mystery',
  about: 'OBSY is a revolutionary hoodie brand that transcends conventional streetwear boundaries. Founded on the principle that clothing should be an extension of one\'s inner mystique, we craft premium hoodies that embody both comfort and character. Each piece in our collection is meticulously designed to offer unparalleled quality while maintaining an air of enigmatic sophistication. Our hoodies are more than garments; they are statements of individuality, crafted for those who dare to stand apart from the crowd.',
  mission: 'To create exceptional hoodies that blend luxury comfort with mysterious elegance, empowering individuals to express their unique identity through premium streetwear.',
  contact: 'obsysupport@gmail.com'
};

// Mock cart functionality
let cartItems = [];

export const addToCart = (product) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  return cartItems;
};

export const getCartItems = () => cartItems;

export const removeFromCart = (productId) => {
  cartItems = cartItems.filter(item => item.id !== productId);
  return cartItems;
};

export const updateQuantity = (productId, quantity) => {
  const item = cartItems.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
  }
  return cartItems;
};

export const getCartTotal = () => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const clearCart = () => {
  cartItems = [];
  return cartItems;
};