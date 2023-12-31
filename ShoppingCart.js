// ShoppingCart.js

import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <ProductDetails product={product} />
          <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
