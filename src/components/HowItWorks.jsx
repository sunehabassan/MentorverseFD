import React from 'react';
import { UserAddOutlined, SearchOutlined, MessageOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <UserAddOutlined className="!text-4xl !text-orange-400 hover:!text-orange-300 transition-colors duration-300 drop-shadow" />,
    title: 'Sign Up',
    description: 'Create your free account and set up your profile in minutes.',
    direction: 'left',
  },
  {
    icon: <SearchOutlined className="!text-4xl !text-orange-400 hover:!text-orange-300 transition-colors duration-300 drop-shadow" />,
    title: 'Find a Mentor',
    description: 'Browse through our mentor directory and choose based on your goals.',
    direction: 'bottom',
  },
  {
    icon: <MessageOutlined className="!text-4xl !text-orange-400 hover:!text-orange-300 transition-colors duration-300 drop-shadow" />,
    title: 'Start Learning',
    description: 'Connect with your mentor and start your personalized mentorship journey.',
    direction: 'right',
  },
];

const directionVariants = {
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  bottom: { y: 100, opacity: 0 },
  top: { y: -100, opacity: 0 },
};

const HowItWorks = () => {
  return (
    <motion.div
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-center text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-orange-300 mb-10 drop-shadow-lg tracking-wide"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        How MentorVerse Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative group transition-all duration-500"
            initial={directionVariants[step.direction]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
          >
            {/* Outer gradient border with shape morph */}
            <div className="p-[4px] bg-gradient-to-r from-blue-500 via-orange-300 to-slate-900 transition-all duration-500 rounded-[2rem_0_2rem_0] group-hover:rounded-[0_2rem_0_2rem] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {/* Inner card with matching shape morph */}
              <div className="bg-gray-900 p-6 h-full transition-all duration-500 rounded-[2rem_0_2rem_0] group-hover:rounded-[0_2rem_0_2rem]">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-orange-300 mb-2 drop-shadow">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;
