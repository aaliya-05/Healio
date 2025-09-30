import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { initiatePayment } from '../services/paymentService';

const mockBookingDetails = {
    doctor: { name: 'Dr. Nimal Perera, MBBS, MD', specialty: 'Board-certified Psychiatrist', image: 'https://i.imgur.com/2s4P8oA.png' },
    appointment: { date: '22-01-2024 (Monday)', time: '10.30 am - 11.00 am' },
    fee: 1800.00,
    customer: { firstName: "Akeel", lastName: "Mohamed", email: "akeel@example.com", phone: "0771234567", address: "123 Galle Road", city: "Colombo" }
};

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingDetails = location.state?.bookingDetails || mockBookingDetails;

    useEffect(() => {
        window.payhere.onCompleted = (orderId) => navigate('/booking-successful-online', { state: { bookingDetails } });
        window.payhere.onError = (error) => alert("Payment failed. Please try again.");
    }, [navigate, bookingDetails]);

    const handleOnlinePayment = async () => {
        const paymentPayload = {
            orderId: `ORDER_${Date.now()}`, amount: bookingDetails.fee,
            items: `Appointment with ${bookingDetails.doctor.name}`, customer: bookingDetails.customer
        };
        try {
            const paymentData = await initiatePayment(paymentPayload);
            window.payhere.startPayment(paymentData);
        } catch (error) {
            alert("Could not connect to the payment service.");
        }
    };

    const handleHospitalPayment = () => navigate('/booking-successful-hospital', { state: { bookingDetails } });

    return (
        <div className="bg-slate-100 flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Payment Methods</h1>
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden">
                <div className="w-full md:w-2/5 h-64 md:h-auto"><img src={bookingDetails.doctor.image} alt={bookingDetails.doctor.name} className="w-full h-full object-cover"/></div>
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900">{bookingDetails.doctor.name}</h2>
                    <p className="text-gray-600 text-lg mt-1 mb-6">{bookingDetails.doctor.specialty}</p>
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider border-b pb-2 mb-3">Appointment Date & Time</h3>
                        <p className="text-lg text-gray-800">📅 {bookingDetails.appointment.date}</p>
                        <p className="text-lg text-gray-800">🕒 {bookingDetails.appointment.time}</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider border-b pb-2 mb-3">Consultation Fee</h3>
                        <p className="text-4xl font-extrabold text-gray-900">Rs. {bookingDetails.fee.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={handleHospitalPayment} className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg">Pay at Hospital</button>
                        <button onClick={handleOnlinePayment} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;