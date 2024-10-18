import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    const productExists = cart.some((item) => item.id === product.id);

    if (!productExists) {
      setCart([...cart, product]);
    } else {
      // console.log("Product is already in the cart");
      alert("Product is already in the cart and duplicates will not been added!")
    }
  };

  // Function to remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price of the cart
  const cartSubtotal = cart.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, itemCount: cart.length, cartSubtotal }}>
      {children}
    </CartContext.Provider>
  );
};
