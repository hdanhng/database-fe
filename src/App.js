import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderManagement from './components/OrderManagement/OrderManagement';
import InsertOrders from './components/OrderManagement/OrderInsert'
import OrderUpdate from './components/OrderManagement/OrderUpdate';
import OrderDelete from './components/OrderManagement/OrderDelete';
import OrderStatus from "./components/OrderManagement/OrderStatus";
import OrderTotal from "./components/OrderManagement/OrderTotal";
import ProductSales from "./components/OrderManagement/ProductSales";
import AverageRating from "./components/OrderManagement/AverageRating";
import TongTienSoLuong from "./components/OrderManagement/OrderTotal";
import { GlobalStyle } from './GlobalStyle'; // Import styled-components GlobalStyle

const App = () => {
  return (
    <>
      <GlobalStyle /> {/* Áp dụng font toàn cục */}
      <Routes>
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/orders-insert" element={<InsertOrders />} />
        <Route path="/orders-update" element={<OrderUpdate />} />
        <Route path="/orders-delete" element={<OrderDelete />} />
        <Route path="/orders-status" element={<OrderStatus />} />
        <Route path="/orders-total" element={<OrderTotal />} />
        <Route path="/products-sales" element={<ProductSales />} />
        <Route path="/products-average-rating" element={<AverageRating />} />
        <Route path="/orders-total-quantity" element={<TongTienSoLuong />} />
      </Routes>
    </>
  );
};

export default App;
