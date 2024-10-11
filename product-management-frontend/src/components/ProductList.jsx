import React from 'react';

function ProductList({ products, fetchProducts, pagination }) {
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      
      <div>
        <button 
          disabled={pagination.currentPage === 1} 
          onClick={() => fetchProducts(pagination.currentPage - 1)}
        >
          Previous
        </button>
        
        <span>
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        
        <button 
          disabled={pagination.currentPage === pagination.totalPages} 
          onClick={() => fetchProducts(pagination.currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
