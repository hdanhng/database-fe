import React from 'react';
import { Routes, Route } from 'react-router-dom';

import OrderManagement from './components/OrderManagement/OrderManagement';
import InsertOrders from './components/OrderManagement/OrderInsert'
import { GlobalStyle } from './GlobalStyle'; // Import styled-components GlobalStyle

const App = () => {
  return (
    <>
      <GlobalStyle /> {/* Áp dụng font toàn cục */}
      <Routes>
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/orders-insert" element={<InsertOrders />} />
      </Routes>
    </>
  );
};

export default App;
