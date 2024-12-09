import api from './api';


export const fetchProductSales = async (quanlity) => {
    try {
        const response = await api.get('/products/product-sales', {data: {quanlity: quanlity}});
        return response;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};


export const fetchAverageRating = async (productId) => {
    try {
        const response = await api.get('/products/average-rating', {data: {maSanPham: productId}});
        return response;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};