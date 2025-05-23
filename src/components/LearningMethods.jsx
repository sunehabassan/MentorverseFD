import React from 'react';
import { MailOutlined, PhoneOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const methods = [
  {
    icon: <MailOutlined className="!text-4xl !text-orange-400 group-hover:!text-orange-300 transition-colors duration-300" />,
    title: 'Email Support',
    description: 'Communicate with mentors at your own pace through structured email guidance.',
    path: '/EmailCommunication',
  },
  {
    icon: <PhoneOutlined className="!text-4xl !text-orange-400 group-hover:!text-orange-300 transition-colors duration-300" />,
    title: 'Voice Calls',
    description: 'Have real-time conversations for deeper insights and flexible communication.',
    path: '/VoiceCall',
  },
  {
    icon: <VideoCameraOutlined className="!text-4xl !text-orange-400 group-hover:!text-orange-300 transition-colors duration-300" />,
    title: 'Video Sessions',
    description: 'Engage face-to-face with mentors for personalized, impactful learning.',
    path: '/VideoCall',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const LearningMethods = () => {
  return (
    <div className="relative !py-24 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-center text-white overflow-hidden">
      <motion.h2
        className="!text-5xl !font-extrabold !text-orange-300 !mb-4 tracking-wide drop-shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        Flexible Learning Methods
      </motion.h2>

      <motion.p
        className="!text-lg text-gray-200 max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Choose the communication method that fits your learning style best—whether it's detailed emails, direct voice calls, or engaging video sessions.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {methods.map((method, index) => (
          <motion.div
            key={index}
            className="group w-72 h-72 mx-auto flex flex-col justify-center items-center bg-gray-800 bg-opacity-80 shadow-xl rounded-full p-6 border border-orange-400 hover:shadow-orange-400 transition duration-300 hover:scale-105 text-center"
            initial="hidden"
            whileInView="visible"
           
            variants={cardVariants}
            custom={index}
          >
            <div className="mb-4">{method.icon}</div>
            <h3 className="text-xl font-bold text-orange-300 mb-2">{method.title}</h3>
            <p className="text-sm text-gray-300 mb-4 px-4">{method.description}</p>
            <Link to={method.path}>
              <Button className="!bg-orange-500 !hover:bg-orange-600 !text-white !rounded-xl !px-4 !py-1.5 !text-sm !border-none !shadow-md">
                Get Insights
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LearningMethods;
