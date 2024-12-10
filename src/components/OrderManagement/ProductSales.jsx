import React, { useState } from "react";
import axios from "axios";
import "./OrderStatus.css"; // Bạn có thể sử dụng CSS này để tạo kiểu cho giao diện

const ProductSales = () => {
    const [quality, setQuality] = useState("");
    const [salesData, setSalesData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchProductSales = async () => {
        setLoading(true);
        setError("");
        setSalesData([]);

        try {
            const response = await axios.get("http://localhost:8080/products/product-sales", {
                params: { quality },
            });

            if (response.data && response.data.result) {
                setSalesData(response.data.result);
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
            <h2>Get Product Sales</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchProductSales();
                }}
            >
                <div className="form-box">
                    <div>
                        <label htmlFor="quality">Min Sales Quality:</label>
                        <input
                            type="number"
                            id="quality"
                            value={quality}
                            onChange={(e) => setQuality(e.target.value)}
                            placeholder="Enter minimum sales quantity"
                        />
                    </div>
                    <button type="submit">Fetch Product Sales</button>
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {salesData.length > 0 && (
                <div>
                    <h3>Sales Data:</h3>
                    <ul>
                        {salesData.map((product, index) => (
                            <li key={index}>
                                <strong>{product.tenSanPham}</strong>: {product.soLuong} sold, Total Sales: {product.totalSales}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductSales;
