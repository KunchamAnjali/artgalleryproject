// Cart.js
import React from 'react';
import './buy.css';

const buy = ({ cartItems }) => {
  return (
    <div>
      <div>
        <h2>Shopping Cart</h2>
         <marquee id="mar"><i><h2>**Keep knowing about our Website**Art G@llerry** thankyou**</h2></i></marquee>
	      <img src=""/>
         <div class="container">
         <div class="inner">
            <h2 class="head">Your Product</h2><br/>
            <a href="/diplay"><button >view More</button></a>
            <a href="/payment"><button>payment</button></a>
        </div>
    </div>
      </div>
    </div>
  );
};

export default buy;
