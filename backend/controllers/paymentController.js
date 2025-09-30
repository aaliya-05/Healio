const crypto = require('crypto');

const generatePayhereHash = (orderId, amount) => {
    const merchantId = process.env.PAYHERE_MERCHANT_ID;
    const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;
    const currency = 'LKR';
    const amountFormatted = parseFloat(amount).toFixed(2);
    const prehash = merchantId + orderId + amountFormatted + currency + crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
    return crypto.createHash('md5').update(prehash).digest('hex').toUpperCase();
};

const initiatePayment = (req, res) => {
    const { orderId, amount, items, customer } = req.body;
    if (!orderId || !amount || !items || !customer) {
        return res.status(400).json({ error: 'Missing required payment data' });
    }
    const hash = generatePayhereHash(orderId, amount);
    const paymentDetails = {
        sandbox: true,
        merchant_id: process.env.PAYHERE_MERCHANT_ID,
        return_url: 'http://localhost:5173/booking-successful-online',
        cancel_url: 'http://localhost:5173/payment',
        notify_url: 'http://your-backend.com/api/payment/notify',
        order_id: orderId,
        items: items,
        amount: parseFloat(amount).toFixed(2),
        currency: 'LKR',
        first_name: customer.firstName,
        last_name: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        country: 'Sri Lanka',
        hash: hash
    };
    res.status(200).json(paymentDetails);
};

module.exports = {
    initiatePayment,
};