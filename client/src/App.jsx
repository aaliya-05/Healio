import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PaymentPage from './pages/PaymentPage';
import BookingSuccessHospital from './pages/BookingSuccessHospital';
import BookingSuccessOnline from './pages/BookingSuccessOnline';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PaymentPage />} /> 
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/booking-successful-hospital" element={<BookingSuccessHospital />} />
            <Route path="/booking-successful-online" element={<BookingSuccessOnline />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;