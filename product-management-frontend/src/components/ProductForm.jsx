import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ fetchProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/products', {
        name,
        price,
        description,
        category,
      });
      fetchProducts();
      setName('');
      setPrice('');
      setDescription('');
      setCategory('');
      alert('Product added successfully!');
    } catch (error) {
      console.error(error);
      alert('Product could not be added!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
