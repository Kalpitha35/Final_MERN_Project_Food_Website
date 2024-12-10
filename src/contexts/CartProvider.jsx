import React, { createContext, useContext, useState } from 'react';

// Create CartContext to share cart state across components
export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCartContext = () => useContext(CartContext);

// CartProvider component to wrap the app and provide the cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from sessionStorage (if exists)
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add an item to the cart and save it to sessionStorage
  const addToCart = (food) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, food];
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Optionally: Add a method to clear the cart
  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
