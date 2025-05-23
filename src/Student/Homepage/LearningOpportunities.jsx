import React from 'react';
import { motion } from 'framer-motion';
import { LaptopOutlined, BookOutlined, RocketOutlined } from '@ant-design/icons';

const LearningOpportunities = () => {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    visibleLeft: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hiddenRight: { opacity: 0, x: 100 },
    visibleRight: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hiddenPop: { opacity: 0, scale: 0.8 },
    visiblePop: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const opportunities = [
    {
      title: 'Skill Development',
      description: 'Access courses that focus on essential industry skills.',
      icon: <LaptopOutlined className='text-[#ff6b6b] text-3xl' />,
      variant: 'hiddenLeft',
      borderColor: '#ff6b6b',
      bgColor: '#ffecec'
    },
    {
      title: 'Project-Based Learning',
      description: 'Work on real-world projects to apply your knowledge.',
      icon: <BookOutlined className='text-[#4ecdc4] text-3xl' />,
      variant: 'hiddenPop',
      borderColor: '#4ecdc4',
      bgColor: '#e7f8f7'
    },
    {
      title: 'Personalized Paths',
      description: 'Choose learning paths tailored to your career goals.',
      icon: <RocketOutlined className='text-[#ffe66d] text-3xl' />,
      variant: 'hiddenRight',
      borderColor: '#ffe66d',
      bgColor: '#fff8e7'
    }
  ];

  return (
    <div className="bg-black p-8 rounded-lg">
<h2 
  className="text-2xl font-bold mb-6 text-center text-orange-700 shadow-lg font-[Times New Roman] hover:animate-bounce"
>
  Learning Opportunities
</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {opportunities.map((item, index) => (
          <motion.div
            key={index}
            whileInView={item.variant.replace('hidden', 'visible')}
            initial={item.variant}
            variants={cardVariants}
            className="flex flex-col items-center p-6 rounded-lg space-y-4 hover:scale-102 transition-transform hover:shadow-lg"
            style={{
              border: `8px solid ${item.borderColor}`,
              backgroundColor: item.bgColor,
              boxShadow: 'none',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div className="p-4 rounded-full mb-2" style={{ color: item.borderColor }}>
              {item.icon}
            </div>
            <h3 className="font-bold text-lg" style={{ color: item.borderColor }}>{item.title}</h3>
            <p className="text-center text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearningOpportunities;
