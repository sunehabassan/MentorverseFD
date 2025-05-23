import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { CgProfile } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiLogOut } from "react-icons/fi";
const Studentheader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [username, setUsername] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showFormPrompt, setShowFormPrompt] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const formFilled = localStorage.getItem("formFilled");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setIsFormFilled(formFilled === "true");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleFormLinkClick = () => {
    if (!isFormFilled) {
      setShowFormPrompt(true);
    } else {
      navigate("/StudentProfileForm");
    }
  };

  return (
    <header
      className={`w-full bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500  font-serif text-orange-500 shadow-md z-50 ${animate ? "animate-bounce" : ""
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 flex-wrap gap-4 lg:gap-0">
        <div className="flex items-center gap-3">
          <img src="./public/icon.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl md:text-4xl text-orange-500 font-bold">
            MentorVerse
          </h1>
        </div>

        <ul className="hidden lg:flex flex-wrap items-center gap-6 text-slate-200 text-lg font-medium">
          {[
            { name: "Home", path: "/homestu" },
            { name: "My Mentors", path: "/mymentors" },
            { name: "Mentors", path: "/MentorCard" },
            { name: "Contact Us", path: "/Contactstu" },
            { name: "Feedback", path: "/Feedbacks" },

          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:scale-110 hover:text-blue-400 transition-transform"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleFormLinkClick}
              className="hover:scale-110 hover:text-blue-400 transition-transform"
            >
              Form
            </button>
          </li>
        </ul>

        {username && (
          <div ref={dropdownRef} className="relative">
            <motion.div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-white bg-black px-2 py-2 rounded-xl shadow-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            ><h1>Welcome</h1>
              <CgProfile className="text-2xl text-blue-400" />
              <span className="font-bold text-lg text-blue-700 capitalize">
                {username}
              </span>
            </motion.div>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                >
                  <ul className="flex flex-col">
                    <li
                      className="flex items-center gap-1 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        navigate("/StudentProfileView");
                        setIsDropdownOpen(false);
                      }}
                    ><FiUser className="text-blue-500" />
                      <span className="text-blue-500" >Profile</span>
                    </li>
                    <li
                      className="flex items-center gap-1 px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                      onClick={handleLogout}
                    > <FiLogOut className="text-red-500" />
                      <span>Logout</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </nav>

      <Modal
        open={showFormPrompt}
        onCancel={() => setShowFormPrompt(false)}
        onOk={() => navigate("/StudentProfileForm")}
        okText="Fill Form"
        cancelText="Cancel"
      >
        <h3>
          If Your form is not filled yet OR You want to update✏ your profile.
        </h3>
        <p className="text-blue-600">
          Please fill it to continue using the platform effectively.📈
        </p>
      </Modal>
    </header>
  );
};

export default Studentheader;
