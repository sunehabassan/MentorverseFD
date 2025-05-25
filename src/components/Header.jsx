import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome2Fill, RiInformationFill, RiContactsFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button1 from "./Button1";
import icon from "../../src/assets/icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-auto bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white shadow-lg font-serif sticky z-50">
      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt="logo"
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wide drop-shadow-lg hover:text-orange-300 transition-colors duration-300">
            MentorVerse
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl hover:text-orange-300 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 md:gap-8 text-base md:text-lg font-medium">
          {[
            { name: "Home", path: "/", icon: <RiHome2Fill className="text-xl mr-2" /> },
            { name: "About Us", path: "/aboutus", icon: <RiInformationFill className="text-xl mr-2" /> },
            { name: "Contact Us", path: "/contact", icon: <RiContactsFill className="text-xl mr-2" /> }
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="flex items-center gap-2 px-3 py-2 hover:bg-orange-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth/CTA Button */}
        <div className="hidden sm:block">
          <Button1 />
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="lg:hidden bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 absolute top-16 left-0 w-full py-4 flex flex-col items-center gap-4 text-lg font-medium shadow-lg z-50">
          {[
            { name: "Home", path: "/", icon: <RiHome2Fill className="text-xl mr-2" /> },
            { name: "About Us", path: "/aboutus", icon: <RiInformationFill className="text-xl mr-2" /> },
            { name: "Contact Us", path: "/contact", icon: <RiContactsFill className="text-xl mr-2" /> }
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-orange-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
          {/* Auth/CTA Button in mobile view */}
          <Button1 />
        </ul>
      )}

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row font-serif bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 py-8 px-6 sm:px-10 gap-6 sm:gap-10">
        {/* Left Text */}
        <div className="flex-1 text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Discover your full potential through MentorVerse's expert mentorship.
        </div>

        {/* Right Text and CTA */}
        <div className="flex-1 text-white text-sm sm:text-base">
          <p>
            "Unlock your true potential with MentorVerse — the platform that connects ambitious individuals with experienced mentors. Whether you're a student, professional, or career-changer, get personalized guidance and expert insights to accelerate your growth."
          </p>
          <Link to="/aboutus">
            <button className="text-slate-100 bg-orange-500 px-4 py-2 mt-4 rounded-lg hover:bg-orange-600 transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
