import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './display.css';
import './display.css';
import products from './products';
import CollectionProductDetails from './CollectionProductDetails'; // Import the ProductDetails component

const Display = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredData = products.filter((item) =>
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
        <h1 className="top-heading">Artistic Collections</h1>
        <input
          className="search-bar"
          type="search"
          placeholder="Search Articles"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {selectedProduct ? (
        <CollectionProductDetails product={selectedProduct} />
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

export default Display;
