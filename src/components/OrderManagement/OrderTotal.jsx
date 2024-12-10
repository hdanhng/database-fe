import React, { useState } from "react";
import axios from "axios";
import "./OrderStatus.css"; // CSS như đã cung cấp trước đó

const TongTienSoLuong = () => {
    const [maDonHang, setMaDonHang] = useState("");
    const [tongTien, setTongTien] = useState(null);
    const [tongSoLuong, setTongSoLuong] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchTongTienSoLuong = async () => {
        setLoading(true);
        setError("");
        setTongTien(null);
        setTongSoLuong(null);

        try {
            const response = await axios.get("http://localhost:8080/orders/tong-tien-so-luong", {
                params: { maDonHang },
            });

            if (response.data && response.data.result) {
                setTongTien(response.data.result.tongTien);  // Lấy tổng tiền từ kết quả
                setTongSoLuong(response.data.result.tongSoLuong);  // Lấy tổng số lượng từ kết quả
            } else {
                setError("No data found");
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="order-status-container">
            <h2>Get Total Amount and Quantity for Order</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchTongTienSoLuong();
                }}
            >
                <div className="form-box">
                    <div>
                        <label htmlFor="maDonHang">Order ID:</label>
                        <input
                            type="number"
                            id="maDonHang"
                            value={maDonHang}
                            onChange={(e) => setMaDonHang(e.target.value)}
                            placeholder="Enter order ID"
                        />
                    </div>
                    <button type="submit">Fetch Total Amount and Quantity</button>
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {tongTien !== null && tongSoLuong !== null && (
                <div>
                    <h3>Order Details:</h3>
                    <p>Total Amount: {tongTien}</p>
                    <p>Total Quantity: {tongSoLuong}</p>
                </div>
            )}
        </div>
    );
};

export default TongTienSoLuong;
