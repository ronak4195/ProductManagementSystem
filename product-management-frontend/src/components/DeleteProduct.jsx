import React from 'react';
import axios from 'axios';

function DeleteProduct({ productId, fetchProducts }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${productId}`);
      alert('Product deleted successfully!');
      fetchProducts(); 
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteProduct;
