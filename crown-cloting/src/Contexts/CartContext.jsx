import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find cart items contains product to add
  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found increment qunatity
  if (existingcartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  //return new array with modified cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartitem) => total + cartitem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
