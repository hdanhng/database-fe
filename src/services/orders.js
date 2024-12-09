import api from './api';


export const fetchOrders = async () => {
    try {
        const response = await api.get('/orders/all');
        return response;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};


export const createOrder = async (orderData) => {
    try {
        const response = await api.post('/orders/insert', orderData);
        return response;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};


export const updateOrder = async (updateOrderData) => {
    try {
        const response = await api.put('/orders/update', updateOrderData);
        return response;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};


export const deleteOrder = async (orderId) => {
    try {
        const response = await api.delete('/orders/delete', { data: { maDonHang: orderId } });
        return response;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};


export const fetchOrdersByStatus = async (statusOfOrder) => {
    try {
        const response = await api.get('/orders/status', { data: { status: statusOfOrder }});
        return response;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};


export const fetchQuanlityAndTotalAmountOfOrder = async (orderId) => {
    try {
        const response = await api.get('/orders/status', { data: { maDonHang: orderId }});
        return response;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
