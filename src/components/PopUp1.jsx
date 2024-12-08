import React, { useState } from "react";
import "./PopUp1.css";

const Popup1 = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    customerId: "100001",
    fullName: "James Smith",
    phoneNumber: "0809123456",
    email: "jamessmith@example.com",
    customerPoints: "10",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData); // Gửi dữ liệu qua hàm onSave
    onClose(); // Đóng popup
  };

  if (!isOpen) return null;

  return (
    <div className="popup1-overlay" onClick={onClose}>
      <div className="popup1-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup1-title">Cập nhật Thông tin Khách hàng</h2>
        <div className="popup1-field">
          <label htmlFor="customerId">Mã Khách hàng</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="fullName">Họ tên</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="phoneNumber">Số điện thoại</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="customerPoints">Điểm Khách hàng</label>
          <input
            type="text"
            id="customerPoints"
            name="customerPoints"
            value={formData.customerPoints}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Huỷ
          </button>
          <button className="save-btn" onClick={handleSave}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup1;
