import { Card } from 'antd';
import { motion } from 'framer-motion';
import { DollarCircleOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import img from "../../assets/happiest.jpg";

const advantages = [
  {
    id: 1,
    icon: <DollarCircleOutlined className="text-3xl" />,
    title: 'Earn Extra Income',
    bgColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    animation: { x: -200, opacity: 0 },
    delay: 0.2
  },
  {
    id: 2,
    icon: <UserOutlined className="text-3xl" />,
    title: 'Build Your Brand',
    bgColor: 'bg-gradient-to-r from-teal-500 to-blue-500',
    animation: { y: 200, opacity: 0 },
    delay: 0.4
  },
  {
    id: 3,
    icon: <BookOutlined className="text-3xl" />,
    title: 'Enhance Your Skills',
    bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    animation: { x: 200, opacity: 0 },
    delay: 0.6
  }
];

const cardVariants = {
  hidden: (custom) => ({ ...custom, scale: 0.9 }),
  visible: (custom) => ({
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom.delay,
      duration: 0.7,
      type: 'spring',
      stiffness: 120
    }
  })
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const AdvantagesOfMentoring = () => (
  <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-12">
    
    {/* Blurred Background Image */}
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center blur-xs"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></div>

    {/* Content Container */}
    <motion.h2
      variants={headingVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl font-extrabold mb-16 tracking-widest uppercase bg-gradient-to-r from-lime-200 via-yellow-400 to-gray-900 text-transparent bg-clip-text font-sans drop-shadow-lg"
    >
      Why Mentor? Unlock Your Potential
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {advantages.map((adv) => (
        <motion.div
          key={adv.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={{ ...adv.animation, delay: adv.delay }}
          className="flex justify-center"
        >
          <Card
            bordered={false}
            className={`relative ${adv.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 text-white flex flex-col items-center justify-center w-64 h-72`}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.4)",
              backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))`
            }}
          >
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>

            {adv.icon}
            <h3 className="text-xl font-bold mt-4 tracking-wide drop-shadow-lg">
              {adv.title}
            </h3>

            <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse"></div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);
