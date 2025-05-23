import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/advantages.jpg';
import { UserOutlined, CodeOutlined, RiseOutlined, TeamOutlined } from '@ant-design/icons';

const AdvantagesCards = () => {
  const advantages = [
    { title: 'Personalized Mentorship', description: 'Get guidance from experienced mentors tailored to your learning path.', icon: <UserOutlined className='text-orange-500 text-3xl' /> },
    { title: 'Skill Development', description: 'Improve your technical and soft skills through targeted courses.', icon: <CodeOutlined className='text-orange-500 text-3xl' /> },
    { title: 'Career Growth', description: 'Learn industry-relevant skills to excel in your career.', icon: <RiseOutlined className='text-orange-500 text-3xl' /> },
    { title: 'Networking Opportunities', description: 'Connect with professionals and expand your network.', icon: <TeamOutlined className='text-orange-500 text-3xl' /> }
  ];

  return (
    <div className="flex items-center gap-8 bg-gradient-to-b from-orange-200 to-blue-200 p-8 rounded-lg">
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <img src={img} alt="Advantages" className="w-full h-130 object-cover rounded-lg shadow-lg" />
      </motion.div>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 grid grid-cols-2 gap-6"
      >
        {advantages.map((adv, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-6 bg-white rounded-full shadow-lg hover:bg-gradient-to-r from-orange-400 to-blue-400 hover:text-white"
          >
            <div className="bg-gradient-to-r from-orange-400 to-blue-400 p-4 rounded-full mb-2">
              {adv.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800 shadow-sm">{adv.title}</h3>
            <p className="text-center text-gray-600">{adv.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdvantagesCards;