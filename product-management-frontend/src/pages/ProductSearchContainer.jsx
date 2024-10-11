import React, { useState } from 'react';
import SearchProductById from '../components/SearchProductByID'; 
import DeleteProduct from '../components/DeleteProduct'; 
import UpdateProduct from '../components/UpdateProduct'; 
import { Link } from 'react-router-dom';

function ProductSearchContainer() {
  const [productDetails, setProductDetails] = useState(null);

  return (
    <div>
      <h1>Search Product by ID</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h2>Provide a product ID</h2>
      <SearchProductById setProductDetails={setProductDetails} />

      {productDetails && (
        <div>
          <h2>Product Details</h2>
          <p><strong>ID:</strong> {productDetails.id}</p>
          <p><strong>Name:</strong> {productDetails.name}</p>
          <p><strong>Price:</strong> ${productDetails.price}</p>
          <p><strong>Description:</strong> {productDetails.description}</p>
          <p><strong>Category:</strong> {productDetails.category}</p>
          <h2>Update product</h2>
          <UpdateProduct productId={productDetails.id} fetchProducts={() => setProductDetails(null)} />
          <h2>Delete product</h2>
          <DeleteProduct productId={productDetails.id} fetchProducts={() => setProductDetails(null)} />

          
        </div>
      )}
    </div>
  );
}

export default ProductSearchContainer;
