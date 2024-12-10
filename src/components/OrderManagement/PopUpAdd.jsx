// import React, { useState } from "react";
// import "./PopUpAdd.css";

// const Popup1 = ({ isOpen, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     maDonHang: "",
//     ngayDatHang: "",
//     tongTien: "",
//     tenKhachHang: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     onSave(formData); // Gửi dữ liệu qua hàm onSave
//     onClose(); // Đóng popup
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="popup1-overlay" onClick={onClose}>
//       <div className="popup1-container" onClick={(e) => e.stopPropagation()}>
//         <h2 className="popup1-title">Thêm Đơn hàng</h2>
//         <div className="popup1-field">
//           <label htmlFor="customerId">Mã Đơn hàng</label>
//           <input
//             type="text"
//             id="customerId"
//             name="customerId"
//             value={formData.maDonHang}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="popup1-field">
//           <label htmlFor="fullName">Ngày Đặt hàng</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.ngayDatHang}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="popup1-field">
//           <label htmlFor="phoneNumber">Tổng tiền</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.tongTien}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="popup1-field">
//           <label htmlFor="email">Tên Khách hàng</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.tenKhachHang}
//             onChange={handleChange}
//           />
//         </div>
      
//         <div className="popup1-buttons">
//           <button className="cancel-btn" onClick={onClose}>
//             Huỷ
//           </button>
//           <button className="save-btn" onClick={handleSave}>
//             Lưu
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup1;





// import React, { useState } from "react";
// import axios from "axios";
// import "./PopUpAdd.css";

// const Popup1 = ({ isOpen, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     maDonHang: "",
//     ngayDatHang: "",
//     tongTien: "",
//     tenKhachHang: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/orders/insert", formData);
//       if (response.status === 200) {
//         console.log("Order added successfully:", response.data);
//         onSave(formData); // Gửi dữ liệu qua hàm onSave để cập nhật UI
//         onClose(); // Đóng popup
//       } else {
//         console.error("Failed to add order:", response.data);
//       }
//     } catch (error) {
//       console.error("Error adding order:", error);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="popup1-overlay" onClick={onClose}>
//       <div className="popup1-container" onClick={(e) => e.stopPropagation()}>
//         <h2 className="popup1-title">Thêm Đơn hàng</h2>
//         <div className="popup1-field">
//           <label htmlFor="maDonHang">Mã Đơn hàng</label>
//           <input
//             type="text"
//             id="maDonHang"
//             name="maDonHang"
//             value={formData.maDonHang}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="popup1-field">
//           <label htmlFor="ngayDatHang">Ngày Đặt hàng</label>
//           <input
//             type="date"
//             id="ngayDatHang"
//             name="ngayDatHang"
//             value={formData.ngayDatHang}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="popup1-field">
//           <label htmlFor="tongTien">Tổng tiền</label>
//           <input
//             type="number"
//             id="tongTien"
//             name="tongTien"
//             value={formData.tongTien}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="popup1-field">
//           <label htmlFor="tenKhachHang">Tên Khách hàng</label>
//           <input
//             type="text"
//             id="tenKhachHang"
//             name="tenKhachHang"
//             value={formData.tenKhachHang}
//             onChange={handleChange}
//           />
//         </div>
      
//         <div className="popup1-buttons">
//           <button className="cancel-btn" onClick={onClose}>
//             Huỷ
//           </button>
//           <button className="save-btn" onClick={handleSave}>
//             Lưu
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup1;

import React, { useState } from "react";
import axios from "axios";
import "./PopUpAdd.css";

const Popup1 = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    maDonHang: "",
    maKhachHang: "",
    ngayDatHang: "",
    diaChiGiaoHang: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log("Sending data to backend:", formData);
      const response = await axios.post("http://localhost:8080/orders/insert", formData);
      if (response.status === 200) {
        console.log("Order added successfully:", response.data);
        onSave(formData); // Gửi dữ liệu qua hàm onSave để cập nhật UI
        onClose(); // Đóng popup
      } else {
        console.error("Failed to add order:", response.data);
      }
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup1-overlay" onClick={onClose}>
      <div className="popup1-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup1-title">Thêm Đơn hàng</h2>
        <div className="popup1-field">
          <label htmlFor="maDonHang">Mã Đơn hàng</label>
          <input
            type="text"
            id="maDonHang"
            name="maDonHang"
            value={formData.maDonHang}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="maKhachHang">Mã Khách hàng</label>
          <input
            type="text"
            id="maKhachHang"
            name="maKhachHang"
            value={formData.maKhachHang}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="ngayDatHang">Ngày Đặt hàng</label>
          <input
            type="date"
            id="ngayDatHang"
            name="ngayDatHang"
            value={formData.ngayDatHang}
            onChange={handleChange}
          />
        </div>
        <div className="popup1-field">
          <label htmlFor="diaChiGiaoHang">Địa chỉ Giao hàng</label>
          <input
            type="text"
            id="diaChiGiaoHang"
            name="diaChiGiaoHang"
            value={formData.diaChiGiaoHang}
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
