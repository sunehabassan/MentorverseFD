import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Empowering mentors and learners to connect, grow, and achieve excellence through dedicated guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Contact Us</h2>
            <p className="text-gray-300">Email: support@mentorverse.com</p>
            <p className="text-gray-300">Phone: +123 456 7890</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="p-3 bg-orange-400 rounded-full hover:bg-gray-800 transition"><FaFacebookF /></a>
              <a href="#" className="p-3 bg-orange-400 rounded-full hover:bg-gray-800 transition"><FaTwitter /></a>
              <a href="#" className="p-3 bg-orange-400 rounded-full hover:bg-gray-800 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          &copy; 2025 MentorVerse. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
