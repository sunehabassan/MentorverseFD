import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import {
  UsergroupAddOutlined,
  RiseOutlined,
  BulbOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import expert from '../../src/assets/expert.jpg';
import communities from '../../src/assets/communities.png';

const benefits = [
  {
    title: 'Expert Guidance',
    icon: <BulbOutlined className="!text-4xl !text-yellow-400 drop-shadow" />,
    description: 'Learn from seasoned mentors with real-world experience in your field.',
    img: expert,
  },
  {
    title: 'Career Growth',
    icon: <RiseOutlined className="!text-4xl !text-green-300 drop-shadow" />,
    description: 'Get personalized advice to advance or pivot your career path.',
    img: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=400&q=60',
  },
  {
    title: 'Flexible Access',
    icon: <ClockCircleOutlined className="!text-4xl !text-blue-300 drop-shadow" />,
    description: 'Connect with mentors at your own pace and on your own time.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=60',
  },
  {
    title: 'Supportive Community',
    icon: <UsergroupAddOutlined className="!text-4xl !text-pink-300 drop-shadow" />,
    description: 'Join an engaging network of learners and inspiring mentors.',
    img: communities,
  },
];

// Directions: left, bottom, right, top
const motionDirections = [
  { x: -50, opacity: 0 },
  { y: 50, opacity: 0 },
  { y: 50, opacity: 0 },
  { y: -50, opacity: 0 },
];

const BenefitsSection = () => {
  return (
    // <motion.div
    //   className="!pt-12 !pb-20 !px-4 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500  !text-center"
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true, amount: 0.2 }}
    //   transition={{ duration: 0.8, ease: 'easeOut' }}
    // >
    //   <motion.h2
    //     className="!text-4xl !text-orange-300 !font-bold !mb-4 drop-shadow-lg"
    //     initial={{ scale: 0.9, opacity: 0 }}
    //     whileInView={{ scale: 1, opacity: 1 }}
    //     transition={{ duration: 0.7 }}
    //   >
    //     Why Choose MentorVerse?
    //   </motion.h2>

    //   <p className="!max-w-2xl !mx-auto !text-gray-200 !mb-12 !text-lg">
    //     Discover how MentorVerse empowers your personal and professional growth with meaningful mentorship.
    //   </p>

    //   <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 !gap-6 !max-w-7xl !mx-auto">
    //     {benefits.map((benefit, index) => (
    //       <motion.div
    //         key={index}
    //         className={`!w-full !relative ${index % 2 === 0 ? '!mt-0' : '!mt-8'}`}
    //         initial={motionDirections[index % motionDirections.length]}
    //         whileInView={{ x: 0, y: 0, opacity: 1 }}
          
    //         transition={{ duration: 0.6, ease:"backOut" }}
    //       >
    //         <div className="!rounded-2xl !p-[4px] animate-border-spin !bg-[length:300%_300%] !bg-gradient-to-r !from-blue-500 !via-yellow-300 !to-orange-600 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
    //           <Card
    //             bordered={false}
    //             className="!min-h-[320px] !bg-gray-900 !rounded-2xl !overflow-hidden !p-0 !shadow-lg hover:!shadow-2xl !transition-all !duration-300"
    //           >
    //             <div
    //               className="!h-32 !w-full !bg-cover !bg-center"
    //               style={{ backgroundImage: `url(${benefits.img})` }}
    //             />
    //             <div className="!flex !flex-col !items-center !text-center !space-y-3 !py-6 !px-4">
    //               {benefit.icon}
    //               <h3 className="!text-xl !font-extrabold !text-white drop-shadow">{benefits.title}</h3>
    //               <p className="!text-sm !text-gray-300">{benefits.description}</p>
    //             </div>
    //           </Card>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </motion.div>
    <><DIV>hW=e==</DIV></>
  );
};

export default BenefitsSection;
