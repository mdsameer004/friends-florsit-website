import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, initialOrders } from '../data/mockData';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('friends-florist-products');
    return stored ? JSON.parse(stored) : initialProducts;
  });

  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem('friends-florist-orders');
    return stored ? JSON.parse(stored) : initialOrders;
  });

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('friends-florist-products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('friends-florist-orders', JSON.stringify(orders));
  }, [orders]);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() }; // Generate simple ID
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <DataContext.Provider value={{ products, orders, addProduct, updateProduct, deleteProduct }}>
      {children}
    </DataContext.Provider>
  );
};
