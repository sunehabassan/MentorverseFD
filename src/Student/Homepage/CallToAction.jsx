import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/fetchcourses");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-6 rounded-lg text-center shadow-lg bg-opacity-80 w-3/4 md:w-1/2 lg:w-1/3 duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-white hover:text-red-500  ">
        Explore More Courses
      </h2>
      <p className="text-lg font-semibold text-red-500 mb-4 hover:text-white transition-colors duration-300">
        Expand your skillset with our curated courses and connect with experienced mentors.
      </p>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          className="! !text-red-500 !bg-transparent !font-bold !hover:bg-red-600 !hover:text-white !transition-colors !duration-300 !rounded-full !px-6 !py-2"
          onClick={handleNavigate}
        >
          View All Courses
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
