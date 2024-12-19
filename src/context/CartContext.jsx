import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState([]);

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
  }, [cart]);

  // add to cart
  const addToCart = (item) => {
    const itemID = item._id;
    const existingItem = cart.find((cartItem) => cartItem._id === itemID);

    if (existingItem) {
      // If item already exists in cart, update its amount
      const updatedCart = cart.map((cartItem) =>
        cartItem._id === itemID
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If item does not exist in cart, add it with amount 1
      const newItem = { ...item, amount: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
    // open the cart sidebar
    setIsOpen(true);
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item._id !== id;
    });
    setCart(newCart);
  };

  // handle input
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    // find the item in the cart by id
    const cartItem = cart.find((item) => {
      return item._id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item._id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
  };

  // handle select
  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item._id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item._id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  // cart total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.regularPrice * c.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        total,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
