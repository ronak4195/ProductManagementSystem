import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductSearch from '../components/ProductSearch';
import ProductForm from '../components/ProductForm';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useState({ name: '', category: '' });
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 });
  
  const fetchProducts = useCallback(async (page = 1) => {
    try {
      const response = await axios.get('http://localhost:4000/api/products', {
        params: { ...searchParams, page },
      });
      setProducts(response.data.products);
      setPagination({ currentPage: page, totalPages: response.data.totalPages });
    } catch (error) {
      console.error(error);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h1>Product Management API</h1>
      <h2>Search for a product using it's name or category</h2>
      <ProductSearch setSearchParams={setSearchParams} />
      <h2>List of products</h2>
      <ProductList products={products} fetchProducts={fetchProducts} pagination={pagination} />
      <h2>Add a product</h2>
      <ProductForm fetchProducts={fetchProducts} />
      <h2>Search for a product using ID</h2>
      <Link to="/byid">
        <button>Search Product by ID</button>
      </Link>
    </div>
  );
}

export default HomePage;
