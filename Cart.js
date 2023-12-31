// Cart.js
import React from 'react';
import './cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <div>
        <h2>Shopping Cart</h2>
         <marquee id="mar"><i><h2>**Keep knowing about our Website**Art G@llerry** thankyou**</h2></i></marquee>
	      <img src=""/>
         <div class="container">
         <div class="inner">
            <h2 class="head">Your product added successfully to cart</h2><br/>
            <a href="/home"><button > Home</button></a>
            <a href="/display"><button>View More</button></a>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Cart;
