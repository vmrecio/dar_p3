import React, { useContext } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const listCartItems = () => {
    return cart;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, listCartItems }}>
      {children}
    </CartContext.Provider>
  );

};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContext;
export { CartProvider, useCart };
