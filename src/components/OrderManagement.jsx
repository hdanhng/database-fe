import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './OrderManagement.css';
import Popup1 from "./PopUp1";
import Popup3 from "./PopUp3";

const OrderManagement = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true); // Mở popup
    };

    const handleClosePopup = () => {
        setPopupOpen(false); // Đóng popup
    };

    const handleSaveCustomer = (data) => {
        console.log("Dữ liệu đã lưu:", data); // Xử lý dữ liệu sau khi lưu
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
            <li> <Link to="/customers">Khách hàng</Link></li>
            <li> <Link to="/products">Sản phẩm</Link></li>
            <li> <Link to="/orders">Đơn hàng</Link></li>
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


    <div className="filter-sort">
      {/* Filter */}
      <div className="filter-section">
        <button className="filter-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M22.0237 7.14285H8.92846M6.5475 7.14285H2.97607M22.0237 19.0476H8.92846M6.5475 19.0476H2.97607M16.0713 13.0952H2.97607M22.0237 13.0952H18.4523M7.73798 4.7619C8.05371 4.7619 8.35652 4.88733 8.57977 5.11058C8.80303 5.33384 8.92846 5.63664 8.92846 5.95238V8.33333C8.92846 8.64906 8.80303 8.95187 8.57977 9.17512C8.35652 9.39838 8.05371 9.52381 7.73798 9.52381C7.42225 9.52381 7.11944 9.39838 6.89619 9.17512C6.67293 8.95187 6.5475 8.64906 6.5475 8.33333V5.95238C6.5475 5.63664 6.67293 5.33384 6.89619 5.11058C7.11944 4.88733 7.42225 4.7619 7.73798 4.7619V4.7619ZM7.73798 16.6667C8.05371 16.6667 8.35652 16.7921 8.57977 17.0153C8.80303 17.2386 8.92846 17.5414 8.92846 17.8571V20.2381C8.92846 20.5538 8.80303 20.8566 8.57977 21.0799C8.35652 21.3031 8.05371 21.4286 7.73798 21.4286C7.42225 21.4286 7.11944 21.3031 6.89619 21.0799C6.67293 20.8566 6.5475 20.5538 6.5475 20.2381V17.8571C6.5475 17.5414 6.67293 17.2386 6.89619 17.0153C7.11944 16.7921 7.42225 16.6667 7.73798 16.6667ZM17.2618 10.7143C17.5775 10.7143 17.8803 10.8397 18.1036 11.063C18.3268 11.2862 18.4523 11.589 18.4523 11.9048V14.2857C18.4523 14.6014 18.3268 14.9042 18.1036 15.1275C17.8803 15.3508 17.5775 15.4762 17.2618 15.4762C16.9461 15.4762 16.6433 15.3508 16.42 15.1275C16.1967 14.9042 16.0713 14.6014 16.0713 14.2857V11.9048C16.0713 11.589 16.1967 11.2862 16.42 11.063C16.6433 10.8397 16.9461 10.7143 17.2618 10.7143V10.7143Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Filter
        </button>
      </div>

      {/* Sort */}
      <div className="sort-section">
        <span>Sort by</span>
        <input
          type="text"
          placeholder="Default"
          className="sort-input"
        />
      </div>

      {/* Action buttons */}
      <div className="actions-section">
        <button className="add-button" onClick={handleOpenPopup}>+</button>
        <Popup1
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            onSave={handleSaveCustomer}
        />

        <button className="edit-button">✏️</button>
        <button className="delete-button">X</button>
        <Popup3 />
      </div>
    </div>

        <table className="customer-table">
        <thead>
            <tr>
            <th>Mã Đơn hàng</th>
            <th>Mã Khách hàng</th>
            <th>Ngày Đặt hàng</th>
            <th>Địa chỉ giao hàng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái Đơn hàng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1001</td>
            <td>10003</td>
            <td>2024-08-10</td>
            <td>123 Main St, New York, NY</td>
            <td>3499.96</td>
            <td>Delivered</td>
            </tr>
            {/* Thêm các dòng khách hàng khác */}
        </tbody>
        </table>

    </div>
  );
};

export default OrderManagement;
