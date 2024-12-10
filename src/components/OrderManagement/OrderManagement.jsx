import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import './OrderManagement.css';
import Popup1 from "./PopUpAdd";
import Popup3 from "./PopUp3";

const OrderManagement = () => {
  const [Order, setOrder] = useState([]);
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Delivered");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const fetchOrder = async (status) => {
    const api = "http://localhost:8080/orders/status";
    try {
      const res = await axios.post(api, { status });
      if (res.status === 200) {
        setOrder(
          res.data.result.map((order) => ({
            maDonHang: order.maDonHang,
            ngayDatHang: order.ngayDatHang,
            tongTien: order.tongTien,
            tenKhachHang: order.tenKhachHang,
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrder(selectedStatus); // Load initial orders
  }, [selectedStatus]);

  const handleOpenFilterPopup = () => {
    setFilterPopupOpen(true);
  };

  const handleCloseFilterPopup = () => {
    setFilterPopupOpen(false);
  };

  const handleOpenPopup1 = () => {
    setPopupOpen(true);
  };

  const handleClosePopup1 = () => {
    setPopupOpen(false);
  };

  return (
    <div className="customer-management">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <h1>TechPress</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/customers">Khách hàng</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/orders">Đơn hàng</Link></li>
            <li>XXX</li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <div className="banner">
        <h2>Quản lý Đơn hàng</h2>
        <p>
          <Link to="/" className="home-link">Home</Link> {'>'} Đơn hàng
        </p>
      </div>

      {/* Filter and Sort */}
      <div className="filter-sort">
        <div className="filter-section">
          <button className="filter-button" onClick={handleOpenFilterPopup}>
            <span>🔍 Lọc</span>
          </button>
        </div>
        
        <div className="actions-section">
          <button className="add-button" onClick={handleOpenPopup1}>+</button>
          <Popup1
            isOpen={isPopupOpen}
            onClose={handleClosePopup1}
            onSave={() => {}}
          />
          <button className="edit-button">✏️</button>
          <button className="delete-button">🗑️</button>
          <Popup3 />
        </div>
      </div>

      {/* Filter Popup */}
      {isFilterPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Filter by Status</h3>
            <select
              className="filter-dropdown"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Shipped">Shipped</option>
            </select>
            <div className="popup-actions">
              <button className="cancel-button" onClick={handleCloseFilterPopup}>Áp dụng</button>
            </div>
          </div>
        </div>
      )}

      {/* Order Table */}
      <div className="table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>Mã Đơn hàng</th>
              <th>Ngày Đặt hàng</th>
              <th>Tổng tiền</th>
              <th>Tên Khách hàng</th>
            </tr>
          </thead>
          <tbody>
            {Order.map((data) => (
              <tr key={data.maDonHang}>
                <td>{data.maDonHang}</td>
                <td>{data.ngayDatHang}</td>
                <td>{data.tongTien}</td>
                <td>{data.tenKhachHang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
