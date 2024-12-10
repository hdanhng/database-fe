import React, { useState } from "react";
import axios from "axios";
import './OrderInsert.css';

const InsertOrders = () => {
  const [formData, setFormData] = useState({
    maDonHang: "",
    maKhachHang: "",
    ngayDatHang: "",
    diaChiGiaoHang: "",
  });

  const [message, setMessage] = useState(""); // To display success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to backend using axios
      const response = await axios.post("http://localhost:8080/orders/insert", formData);

      if (response.status === 200) {
        setMessage("Order inserted successfully!");
        // Reset form after successful insertion
        setFormData({
          maDonHang: "",
          maKhachHang: "",
          ngayDatHang: "",
          diaChiGiaoHang: "",
        });
      } else {
        setMessage("An error occurred, please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Server error
        setMessage(error.response.data.message || "Backend error.");
      } else {
        // Connection error
        setMessage("Cannot connect to the server.");
      }
    }
  };

  return (
      <div className="order-insert-container">
        <h2>Insert Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <div>
              <label>Order ID:</label>
              <input
                  type="number"
                  name="maDonHang"
                  value={formData.maDonHang}
                  onChange={handleChange}
                  required
              />
            </div>
            <div>
              <label>Customer ID:</label>
              <input
                  type="number"
                  name="maKhachHang"
                  value={formData.maKhachHang}
                  onChange={handleChange}
                  required
              />
            </div>
            <div>
              <label>Order Date:</label>
              <input
                  type="date"
                  name="ngayDatHang"
                  value={formData.ngayDatHang}
                  onChange={handleChange}
                  required
              />
            </div>
            <div>
              <label>Delivery Address:</label>
              <input
                  type="text"
                  name="diaChiGiaoHang"
                  value={formData.diaChiGiaoHang}
                  onChange={handleChange}
                  required
              />
            </div>
          </div>
          <button type="submit">Insert Order</button>
        </form>
        {message && <p>{message}</p>}
      </div>
  );
};

export default InsertOrders;