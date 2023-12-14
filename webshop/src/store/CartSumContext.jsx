// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartSumContext = createContext();

// Create a provider component
const CartSumProvider = ({ children }) => {
  const [cartSum, setCartSum] = useState('light');

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};

// Create a custom hook to consume the context
const useCartSum = () => {
  const context = useContext(CartSumContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { CartSumProvider, useCartSum };