import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { CgProfile } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiLogOut, FiEdit } from "react-icons/fi";
import axios from "axios";
import { baseURL } from "/config";

const MentorHeader = () => {
  const [mentorProfile, setMentorProfile] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const mentorEmail = localStorage.getItem("mentorEmail");
    if (!mentorEmail) return;

    axios
      .get(`${baseURL}/api/auth/mentor/${mentorEmail}`)
      .then((response) => {
        if (response.data.success) {
          setMentorProfile(response.data.data);
        }
      })
      .catch(() => console.error("Error fetching mentor profile"));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/Homementor" },
    { name: "My Students", path: "/Mystudents" },
    { name: "Requests", path: "/MentorRequests" },
    { name: "Contact Us", path: "/Contactment" },
    { name: "Add Courses", path: "/Courses" },
    { name: "Journey", path: "/MentorProfileForm" },
    { name: "Feedback", path: "/Feedback" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 p-4 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/public/icon.png" alt="logo" className="w-12 h-12 rounded-full shadow-lg" />
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-md">MentorVerse</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-lg font-semibold text-white">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-orange-300 hover:scale-105 transition-all duration-300">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Profile Dropdown */}
        <div ref={dropdownRef} className="relative">
          <motion.div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-sky-700 px-4 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-orange-500 hover:shadow-xl transition-all"
          >
            <h1 className="font-bold text-white">
              {mentorProfile ? `Hello, ${mentorProfile.fullName}` : "Account"}
            </h1>
            <CgProfile className="text-2xl text-orange-300" />
          </motion.div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden z-50"
              >
                <ul className="flex flex-col">
                  {mentorProfile ? (
                    <>
                      <li
                        className="flex items-center gap-2 px-4 py-2 hover:bg-sky-100 cursor-pointer"
                        onClick={() => {
                          navigate("/MentorProfile");
                          setIsDropdownOpen(false);
                        }}
                      >
                        <FiUser className="text-sky-500" /> Profile
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="flex items-center gap-2 px-4 py-2 hover:bg-sky-100 cursor-pointer"
                        onClick={() => {
                          navigate("/MentorProfileForm");
                          setIsDropdownOpen(false);
                        }}
                      >
                        <FiEdit className="text-orange-500" /> Complete Profile
                      </li>
                    </>
                  )}

                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                    onClick={handleLogout}
                  >
                    <FiLogOut className="text-red-500" /> Logout
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default MentorHeader;
