import React, { useEffect, useState } from 'react';
import { Pagination, Card } from 'antd';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  UserOutlined,
  IdcardOutlined,
  CommentOutlined,
} from '@ant-design/icons';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/auth/testimonial');
        setTestimonials(res.data);
      } catch (error) {
        console.error("❌ Failed to load testimonials.");
      }
    };
    fetchTestimonials();
  }, []);

  const dummyAvatar = "https://i.pravatar.cc/150?img=";

  const mentorTestimonials = testimonials.filter(t => t.role === "Mentor");
  const studentTestimonials = testimonials.filter(t => t.role === "Student");

  const getPaginatedData = (data) => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  };

  const paginatedMentors = getPaginatedData(mentorTestimonials);
  const paginatedStudents = getPaginatedData(studentTestimonials);

  const totalPages = Math.max(
    Math.ceil(mentorTestimonials.length / pageSize),
    Math.ceil(studentTestimonials.length / pageSize)
  );

  const CardItem = (testimonial, index, color, fromLeft = true) => (
    <motion.div
      key={index}
      className="w-full md:w-11/12"
      initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${color}, 0 0 10px ${color}`, }}
    >
      <div
        className={`rounded-2xl shadow-lg p-6 text-white bg-gray-800`}
        
      >
        <div className="flex items-center space-x-4 mb-4">
          <img
            alt="avatar"
            src={`${dummyAvatar}${(index + 30) % 70}`}
            className={`rounded-full w-14 h-14 border-2`}
            style={{ borderColor: color }}
          />
          <div>
            <h4 className="text-lg font-bold flex items-center gap-2">
              <UserOutlined style={{ color }} />
              <span>{testimonial.name}</span>
            </h4>
            <p className="text-sm flex items-center gap-2" style={{ color }}>
              <IdcardOutlined />
              <span>{testimonial.role}</span>
            </p>
          </div>
        </div>
        <p className="text-gray-200 italic flex items-start gap-2 leading-relaxed">
          <CommentOutlined style={{ color }} />
          <span>"{testimonial.feedback}"</span>
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="py-16 px-6 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white">
      <motion.h2
              className="text-5xl text-center font-extrabold text-orange-300 mb-4 drop-shadow-lg tracking-wide"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
         What Our Users Say?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400 border-l-4 border-yellow-400 pl-4 flex items-center gap-2">
            <UserOutlined />
            Student Testimonials
          </h3>
          <div className="space-y-6">
            {paginatedStudents.map((testimonial, index) =>
              CardItem(testimonial, index, '#facc15', true)
            )}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-400 border-l-4 border-orange-400 pl-4 flex items-center gap-2">
            <UserOutlined />
            Mentor Testimonials
          </h3>
          <div className="space-y-6">
            {paginatedMentors.map((testimonial, index) =>
              CardItem(testimonial, index, '#f97316', false)
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          current={currentPage}
          total={totalPages * pageSize}
          pageSize={1}
          onChange={setCurrentPage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
