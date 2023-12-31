// ProductDetails.js

import React from 'react';
import './ProductDetails.css';
import { Link } from 'react-router-dom';

const CollectionProductDetails = ({ product }) => {
  return (
    <div>
      <div className='image-container'>
        <img src={product.image} alt={product.name} className='product-image' />
      </div>
      <div className='details-container'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        {/* Add to Cart and Buy Now buttons */}
        <div className='buttons-container'>
            <Link to="/cart"><button className='buttons'>Add to Cart</button></Link>
            <Link to="/cart"><button className='buttons'>Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionProductDetails;
