import React, { useState } from "react";
import axios from "axios";

const InsertOrders = () => {
  const [formData, setFormData] = useState({
    maDonHang: "",
    maKhachHang: "",
    ngayDatHang: "",
    diaChiGiaoHang: "",
  });

  const [message, setMessage] = useState(""); // Để hiển thị thông báo thành công hoặc lỗi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Gửi dữ liệu đến backend bằng axios
      const response = await axios.post("http://localhost:8080/orders/insert", formData);

      if (response.status === 200) {
        setMessage("Đơn hàng đã được thêm thành công!");
        // Reset form sau khi thêm thành công
        setFormData({
          maDonHang: "",
          maKhachHang: "",
          ngayDatHang: "",
          diaChiGiaoHang: "",
        });
      } else {
        setMessage("Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      if (error.response) {
        // Lỗi từ phía server
        setMessage(error.response.data.message || "Lỗi từ backend.");
      } else {
        // Lỗi kết nối
        setMessage("Không thể kết nối đến server.");
      }
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Thêm Đơn Hàng Mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mã Đơn Hàng:</label>
          <input
            type="number"
            name="maDonHang"
            value={formData.maDonHang}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mã Khách Hàng:</label>
          <input
            type="number"
            name="maKhachHang"
            value={formData.maKhachHang}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ngày Đặt Hàng:</label>
          <input
            type="date"
            name="ngayDatHang"
            value={formData.ngayDatHang}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Địa Chỉ Giao Hàng:</label>
          <input
            type="text"
            name="diaChiGiaoHang"
            value={formData.diaChiGiaoHang}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Thêm Đơn Hàng</button>
      </form>
      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default InsertOrders;
