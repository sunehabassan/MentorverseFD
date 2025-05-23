import { Card } from 'antd';
import { motion } from 'framer-motion';
import { TrophyOutlined, StarOutlined, SmileOutlined } from '@ant-design/icons';

const stories = [
  {
    id: 1,
    icon: <TrophyOutlined className="text-4xl text-yellow-500 mb-2" />,
    title: 'Career Growth',
    bgColor: 'bg-white',
    borderColor: 'border-yellow-500',
    animation: { x: -100, opacity: 0 }
  },
  {
    id: 2,
    icon: <StarOutlined className="text-4xl text-orange-500 mb-2" />,
    title: 'Mentor Excellence',
    bgColor: 'bg-white',
    borderColor: 'border-orange-500',
    animation: { y: 100, opacity: 0 }
  },
  {
    id: 3,
    icon: <SmileOutlined className="text-4xl text-green-500 mb-2" />,
    title: 'Life Transformation',
    bgColor: 'bg-white',
    borderColor: 'border-green-500',
    animation: { x: 100, opacity: 0 }
  }
];

const cardVariants = {
  hidden: (direction) => ({ ...direction, scale: 0.9 }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15
    }
  }
};

export const SuccessStories = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 min-h-screen">
    {stories.map((story) => (
      <motion.div
        key={story.id}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={story.animation}
        className="hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        <Card 
          bordered={false} 
          className={`${story.bgColor} p-8 rounded-lg shadow-lg text-gray-800 flex flex-col items-center justify-center w-full h-72 border-2 ${story.borderColor}`} 
        >
          {story.icon}
          <h3 className="text-xl font-semibold mt-4 tracking-wide">
            {story.title}
          </h3>
        </Card>
      </motion.div>
    ))}
  </div>
);
