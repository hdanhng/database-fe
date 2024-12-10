import React, { useState } from "react";
import axios from "axios";
import "./OrderStatus.css"; // Sử dụng CSS đã cung cấp trước đó

const AverageRating = () => {
    const [productId, setProductId] = useState("");
    const [averageRating, setAverageRating] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchAverageRating = async () => {
        setLoading(true);
        setError("");
        setAverageRating(null);

        try {
            const response = await axios.get("http://localhost:8080/products/average-rating", {
                params: { maSanPham: productId },
            });

            if (response.data && response.data.result) {
                setAverageRating(response.data.result.average);  // Cập nhật từ 'average' thay vì 'diemTrungBinh'
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
            <h2>Get Product Average Rating</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchAverageRating();
                }}
            >
                <div className="form-box">
                    <div>
                        <label htmlFor="productId">Product ID:</label>
                        <input
                            type="number"
                            id="productId"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            placeholder="Enter product ID"
                        />
                    </div>
                    <button type="submit">Fetch Average Rating</button>
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {averageRating !== null && (
                <div>
                    <h3>Average Rating:</h3>
                    <p>{averageRating}</p>
                </div>
            )}
        </div>
    );
};

export default AverageRating;
