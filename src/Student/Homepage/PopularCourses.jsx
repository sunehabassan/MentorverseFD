import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import img from '../../assets/tech.jpg';
import { CodeOutlined, DatabaseOutlined, RobotOutlined, CloudOutlined } from '@ant-design/icons';

const PopularCourses = () => {
  const courses = [
    { title: 'Web Development', description: 'Learn full-stack web development.', icon: <CodeOutlined className='text-purple-500 text-3xl' /> },
    { title: 'Data Analysis', description: 'Master data analysis using Python.', icon: <DatabaseOutlined className='text-blue-500 text-3xl' /> },
    { title: 'AI & Machine Learning', description: 'Build predictive models with AI.', icon: <RobotOutlined className='text-green-500 text-3xl' /> },
    { title: 'Cloud Computing', description: 'Explore cloud infrastructure and services.', icon: <CloudOutlined className='text-orange-500 text-3xl' /> }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-700 to-red-200 p-8 rounded-lg  flex items-center gap-8">
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 grid grid-cols-2 gap-4"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:bg-gradient-to-r from-purple-400 to-blue-400 hover:text-white"
          >
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-4 rounded-full mb-2">
              {course.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800 shadow-sm">{course.title}</h3>
            <p className="text-center text-gray-600">{course.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <img src={img} alt="Popular Courses" className="w-full h-100 object-cover rounded-lg shadow-lg" />
      </motion.div>
    </div>
  );
};

export default PopularCourses;