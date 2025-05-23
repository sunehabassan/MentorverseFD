import { Card } from 'antd';
import { motion } from 'framer-motion';
import { DollarCircleOutlined, ContainerOutlined, ShareAltOutlined } from '@ant-design/icons';

const incomeSources = [
  {
    id: 1,
    icon: <DollarCircleOutlined className="text-4xl text-yellow-200 drop-shadow-lg" />,
    title: 'Session Fees',
    bgColor: 'from-yellow-500 to-orange-500',
    animation: { x: -100, opacity: 0 }
  },
  {
    id: 2,
    icon: <ContainerOutlined className="text-4xl text-green-200 drop-shadow-lg" />,
    title: 'Course Subscriptions',
    bgColor: 'from-green-500 to-teal-500',
    animation: { y: 100, opacity: 0 }
  },
  {
    id: 3,
    icon: <ShareAltOutlined className="text-4xl text-blue-200 drop-shadow-lg" />,
    title: 'Referral Bonuses',
    bgColor: 'from-blue-500 to-indigo-500',
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

export const IncomeSources = () => (
  <div className="flex gap-6 justify-center pt-40 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500">
    {incomeSources.map((source) => (
      <motion.div
        key={source.id}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={source.animation}
        className="hover:scale-105 transform transition duration-300"
      >
        <Card bordered={false} className={`bg-gradient-to-br ${source.bgColor} p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center w-64 h-64 border border-transparent hover:border-white hover:shadow-2xl`}
          style={{ backdropFilter: 'blur(5px)', transition: 'border-color 0.3s' }}>
          {source.icon}
          <h3 className="text-lg font-semibold mt-4 drop-shadow-lg">{source.title}</h3>
        </Card>
      </motion.div>
    ))}
  </div>
);
