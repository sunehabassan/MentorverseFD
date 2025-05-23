import { Card } from 'antd';
import { motion } from 'framer-motion';
import { GlobalOutlined, DollarCircleOutlined, TeamOutlined } from '@ant-design/icons';

const reasons = [
  {
    id: 1,
    icon: <GlobalOutlined className="text-4xl text-blue-300 group-hover:text-white transition duration-300" />,
    title: 'Expand Your Influence',
    bgColor: 'from-blue-500 to-blue-700',
    animation: { x: -100, opacity: 0 }
  },
  {
    id: 2,
    icon: <DollarCircleOutlined className="text-4xl text-orange-300 group-hover:text-white transition duration-300" />,
    title: 'Monetize Your Expertise',
    bgColor: 'from-orange-500 to-orange-700',
    animation: { y: 100, opacity: 0 }
  },
  {
    id: 3,
    icon: <TeamOutlined className="text-4xl text-green-300 group-hover:text-white transition duration-300" />,
    title: 'Connect with Learners',
    bgColor: 'from-green-500 to-green-700',
    animation: { x: 100, opacity: 0 }
  }
];

const cardVariants = {
  hidden: (direction) => ({ ...direction }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

export const WhyChooseMentorverse = () => (
  <div className="p-6 flex gap-6 justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 min-h-[50vh] items-center">
    {reasons.map((reason) => (
      <motion.div
        key={reason.id}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={reason.animation}
        className="group"
      >
        <Card bordered={false} className={`bg-gradient-to-br ${reason.bgColor} p-8 rounded-2xl shadow-lg text-white flex flex-col items-center justify-center w-64 h-64 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}>
          {reason.icon}
          <h3 className="text-xl font-semibold mt-4 group-hover:text-gray-100 transition duration-300">{reason.title}</h3>
        </Card>
      </motion.div>
    ))}
  </div>
);
