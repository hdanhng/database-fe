import React, { useState } from "react";
import axios from "axios";
import "./OrderStatus.css";

const OrderStatus = () => {
    const [status, setStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        setLoading(true);
        setError("");
        setOrders([]);

        try {
            const response = await axios.get("http://localhost:8080/orders/status", {
                params: { status },
            });

            if (response.data && response.data.result) {
                setOrders(response.data.result);
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
            <h2>Get Orders by Status</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchOrders();
                }}
            >
                <div className="form-box">
                    <div>
                        <label htmlFor="status">Order Status:</label>
                        <input
                            type="text"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            placeholder="Enter order status"
                        />
                    </div>
                    <button type="submit">Fetch Orders</button>
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {orders.length > 0 && (
                <div>
                    <h3>Order Details:</h3>
                    <pre>{JSON.stringify(orders, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default OrderStatus;
