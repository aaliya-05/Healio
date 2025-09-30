// frontend/src/pages/BookingSuccessHospital.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSuccessHospital = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { bookingDetails } = location.state || {};

    if (!bookingDetails) {
        return <div className="p-10 text-center">No booking details found.</div>;
    }

    return (
        <div className="bg-gradient-to-br from-white to-blue-100 flex flex-col" style={{minHeight: 'calc(100vh - 150px)'}}>
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 className="text-4xl font-bold text-green-600">Booking Confirmed!</h1>
                <p className="text-xl text-gray-700 mt-4 max-w-md">You have successfully booked an appointment with <strong>{bookingDetails.doctor.name.split(',')[0]}</strong></p>
                <button onClick={() => navigate('/')} className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-16 rounded-lg">Done</button>
            </main>
            <footer className="bg-blue-900 text-white text-center p-5 text-lg">
                <p><strong>Please arrive 15 minutes before your appointment</strong> to complete the payment at the hospital reception.</p>
            </footer>
        </div>
    );
};

export default BookingSuccessHospital;