import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerManagement from './components/CustomerManagement';
import ProductManagement from './components/ProductManagement';
import OrderManagement from './components/OrderManagement';
import { GlobalStyle } from './GlobalStyle'; // Import styled-components GlobalStyle

const App = () => {
  return (
    <>
      <GlobalStyle /> {/* Áp dụng font toàn cục */}
      <Routes>
        <Route path="/customers" element={<CustomerManagement />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/orders" element={<OrderManagement />} />
      </Routes>
    </>
  );
};

export default App;
