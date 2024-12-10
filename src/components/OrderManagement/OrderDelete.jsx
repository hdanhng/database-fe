import React, { useState } from "react";
import axios from "axios";
import './OrderDelete.css';

const OrderDelete = () => {
    const [maDonHang, setMaDonHang] = useState("");
    const [message, setMessage] = useState(""); // To display success or error messages

    const handleChange = (e) => {
        setMaDonHang(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send data to backend using axios
            const response = await axios.delete("http://localhost:8080/orders/delete", {
                data: { maDonHang }
            });

            if (response.status === 200) {
                setMessage("Order deleted successfully!");
                // Reset form after successful deletion
                setMaDonHang("");
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
        <div className="order-delete-container">
            <h2>Delete Order</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-box">
                    <div>
                        <label>Order ID:</label>
                        <input
                            type="number"
                            name="maDonHang"
                            value={maDonHang}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Delete Order</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default OrderDelete;