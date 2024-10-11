import React, { useState } from 'react';
import axios from 'axios';

function SearchProductById({ setProductDetails }) {
  const [id, setId] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products/${id}`);
      setProductDetails(response.data);
      alert('Product found!');
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Product not found');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchProductById;
