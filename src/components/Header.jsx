import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { RiHome2Fill, RiInformationFill, RiContactsFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button1 from "./Button1";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-auto bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white shadow-lg font-serif sticky z-50">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img src="./public/icon.png" alt="logo" className="w-12 h-12 border-2 border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide drop-shadow-lg hover:text-orange-300 transition-colors duration-300">MentorVerse</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl hover:text-orange-300 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
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
        <Button1 />
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="lg:hidden bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500  absolute top-16 left-0 w-full py-4 flex flex-col items-center gap-4 text-lg font-medium shadow-lg z-50">
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
        </ul>
      )}

      {/* Header Section */}
      <div className='flex flex-auto font-serif bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 py-6 px-10'>
        <div className='flex-1 text-3xl text-white font-bold pr-10'>
          Discover your full potential through MentorVerse's expert mentorship.
        </div>
        <div className='flex-1 pl-5 pr-5'>
          <p className='text-sm text-white'>"Unlock your true potential with MentorVerse — the platform that connects ambitious individuals with experienced mentors. Whether you're a student, professional, or career-changer, get personalized guidance and expert insights to accelerate your growth."</p>
          <Link to="/aboutus"><button className='text-slate-100 bg-orange-500 px-3 py-1 mt-2 rounded-lg hover:bg-orange-600 transition-all duration-300'>Explore More</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
