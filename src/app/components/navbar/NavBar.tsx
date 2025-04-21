"use client";

import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Tarja superior em telas pequenas / menu lateral em telas grandes */}
      <nav className="lg:fixed shadow-lg lg:left-0 lg:top-0 lg:w-64 lg:h-screen bg-gray-800 text-white shadow-lg lg:flex lg:flex-col p-6 w-full h-[60px] flex items-center justify-between">
        <div className="flex items-center justify-between w-full lg:flex-col lg:items-start">
          <h2 className="text-xl font-bold lg:mb-6">Menu</h2>
          
          {/* Menu para telas grandes (sempre visível na parte superior) */}
          <ul className="hidden lg:flex lg:flex-col lg:space-y-4 lg:mt-2">
            <li className="hover:text-blue-300 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer">About Me</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer">Services</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer">Portfolio</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer">Blogs</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer">Contact Me</li>
          </ul>
        </div>
        
        {/* Botão hamburger (visível apenas em telas pequenas) */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        {/* Menu para telas pequenas (condicional) */}
        {isMenuOpen && (
          <ul className="absolute top-[60px] left-0 right-0 bg-gray-800 p-4 shadow-lg z-20">
            <li className="hover:text-blue-300 transition-colors cursor-pointer mb-3">Home</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer mb-3">About Me</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer mb-3">Services</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer mb-3">Portfolio</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer mb-3">Blogs</li>
            <li className="hover:text-blue-300 transition-colors cursor-pointer">Contact Me</li>
          </ul>
        )}
      </nav>
    </>
  );
}