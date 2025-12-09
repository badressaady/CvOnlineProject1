import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from '../../assets/images/logo1.png'; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const siteName = "CV Designer"; 
  const primaryTextColor = "text-black";
  const toggleMenu = () => setIsOpen(!isOpen);

  const baseLinkStyle = `hover:text-gray-600 transition-colors duration-200 ${primaryTextColor}`;
  const activeLinkStyle = "font-bold border-b-2 border-pink-700 text-pink-700";

  return (
    <header className="bg-[#F5EFE6] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
        
        
        <Link
          to="/"
          className="flex items-center space-x-3 transition hover:opacity-90"
        >
          
          <img 
            src={logo1} 
            className="h-[80px] w-auto" 
            alt="Logo du générateur de CV" 
          />
   
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
            {siteName}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-lg">
          {[
            { label: "Accueil", to: "/" },
            { label: "Éditeur", to: "/editor" },
            { label: "Templates", to: "/templates" },
            
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-pink-100 transition"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EFE9E3] shadow-inner">
          <nav className="flex flex-col space-y-3 p-4 text-lg">
            {[
              { label: "Accueil", to: "/" },
              { label: "Éditeur", to: "/editor" },
              { label: "Templates", to: "/templates" },
              
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md transition ${baseLinkStyle} ${isActive ? 'bg-pink-200/50 ' + activeLinkStyle : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};