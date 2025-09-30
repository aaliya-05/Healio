// frontend/src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#">HEALIO</a>
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#" className="hover:text-blue-200">Home</a></li>
          <li><a href="#" className="hover:text-blue-200">Find a Doctor</a></li>
          <li><a href="#" className="hover:text-blue-200">Appointments</a></li>
        </ul>
        <div>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-semibold py-2 px-5 rounded-full">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;