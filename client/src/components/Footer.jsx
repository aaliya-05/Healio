// frontend/src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">HEALIO</h3>
            <p className="text-gray-600 max-w-sm">
              Connecting you with trusted doctors for quality healthcare anytime, anywhere.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Specialities</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Cardiologists</a></li>
              <li><a href="#" className="hover:text-blue-600">Neurologists</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Colombo 07, Sri Lanka</li>
              <li>067 4311 877</li>
              <li>healiosl@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} HEALIO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;