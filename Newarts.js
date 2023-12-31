// Newarts.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './display.css';
import './Newarts.css';
import productData from './productData';
import ProductDetails from './ProductDetails'; // Import the ProductDetails component

const Newarts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Shuffle the productData array and set it in the state
    const shuffledData = shuffleArray(productData);
    setData(shuffledData);
  }, []); // Run this effect only once on mount

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredData = productData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
    );

    setData(filteredData);
  };

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const getFilledStars = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return `${filledStars}${emptyStars}`;
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const chunkedData = chunkArray(data, 4);

  return (
    <div>
      <div className="top-container">
        <h1 className="top-heading">New Artistic Collections</h1>
        <input
          className="search-bar"
          type="search"
          placeholder="Search Articles"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} />
      ) : (
        <div className="oil-paintings-container">
          {chunkedData.map((row, rowIndex) => (
            <div className="row" key={`row-${rowIndex}`}>
              {row.map((item) => (
                <div
                  className="product-card"
                  key={item.id}
                  onClick={() => handleCardClick(item)} // Add onClick handler
                >
                  <div className="image-container">
                    <center>
                      <img
                        className="card-image"
                        src={item.image}
                        alt={item.name}
                      ></img>
                    </center>
                    <div className="suit-heart">&#9829;</div>
                  </div>
                  <h6 className="card-heading">{item.name}</h6>
                  <p className="card-description">{item.description}</p>
                  <span>{item.price}</span>
                  <div className="rating">
                    {getFilledStars(item.rating)} ({item.rating})
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Newarts;

// Function to shuffle an array
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
