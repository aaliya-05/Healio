// frontend/src/pages/BookingSuccessOnline.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSuccessOnline = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { bookingDetails } = location.state || {};

    if (!bookingDetails) {
        return <div className="p-10 text-center">No booking details found.</div>;
    }
    
    return (
        <div className="bg-gradient-to-br from-white to-blue-100 flex flex-col items-center justify-center text-center p-4" style={{minHeight: 'calc(100vh - 150px)'}}>
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
            <p className="text-xl text-gray-700 mt-4 max-w-md">Your appointment with <strong>{bookingDetails.doctor.name.split(',')[0]}</strong> is confirmed.</p>
            <button onClick={() => navigate('/')} className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-16 rounded-lg">Done</button>
        </div>
    );
};

export default BookingSuccessOnline;