const API_URL = 'http://localhost:5000/api';

export const initiatePayment = async (paymentPayload) => {
    try {
        const response = await fetch(`${API_URL}/payment/initiate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paymentPayload),
        });
        if (!response.ok) {
            throw new Error('Failed to initiate payment from server');
        }
        return await response.json();
    } catch (error) {
        console.error("Error in payment service:", error);
        throw error;
    }
};