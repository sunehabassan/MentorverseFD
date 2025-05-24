import { Card } from 'antd';
import { motion } from 'framer-motion';
import { TrophyOutlined, StarOutlined, SmileOutlined } from '@ant-design/icons';

const stories = [
  {
    id: 1,
    icon: <TrophyOutlined className="!text-white !text-3xl" />,
    title: 'Career Growth',
    borderGradient: 'from-yellow-400 via-pink-400 to-red-500',
    glow: 'shadow-yellow-300/50'
  },
  {
    id: 2,
    icon: <StarOutlined className="!text-white !text-3xl" />,
    title: 'Mentor Excellence',
    borderGradient: 'from-orange-400 via-pink-500 to-purple-500',
    glow: 'shadow-orange-300/50'
  },
  {
    id: 3,
    icon: <SmileOutlined className="!text-white !text-3xl" />,
    title: 'Life Transformation',
    borderGradient: 'from-green-400 via-cyan-400 to-blue-500',
    glow: 'shadow-green-300/50'
  }
];

const galleryImages = [
  'https://img.freepik.com/free-vector/virtual-graduation-ceremony_23-2148569137.jpg?uid=R176324598&ga=GA1.1.1232304014.1695974050&w=740',
  'https://img.freepik.com/free-vector/online-learning-education-with-international-recognized-degree-diploma-certificate-colorful-cartoon-composition-graduates-desktop-textbooks_1284-27828.jpg?uid=R176324598&ga=GA1.1.1232304014.1695974050&w=740',
  'https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-laptop_23-2148572914.jpg?uid=R176324598&ga=GA1.1.1232304014.1695974050&w=740'
];

const cardVariants = {
  hidden: (direction) => ({ ...direction, scale: 0.9 }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
};

export const SuccessStories = () => (
  <section className="!bg-gradient-to-r !from-gray-800 !via-gray-600 !to-orange-500 !py-24 !px-6 !min-h-screen">
    <div className="!max-w-7xl !mx-auto !flex !flex-col md:!flex-row !items-start !gap-12">
      
      {/* Left Column: Slanted Success Cards */}
      <div className="!flex-1 !flex !flex-col !gap-10">
        {stories.map((story, index) => {
          const marginLeft = index === 0 ? 'ml-2' : index === 1 ? 'ml-8' : 'ml-16';

          return (
            <motion.div
              key={story.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={{ x: index === 0 ? -100 : index === 1 ? 0 : 100, opacity: 0 }}
              className={`!hover:-translate-y-2 !transition !duration-500 ${story.glow} ${marginLeft}`}
            >
              <div className={`!p-[2px] !rounded-full !bg-gradient-to-r ${story.borderGradient}`}>
                <Card
                  bordered={false}
                  className="!bg-white/10 !backdrop-blur-lg !text-white !p-8 !rounded-full !h-50 !flex !flex-col !items-center !justify-between"
                >
                  <div className="!w-16 !h-16 !rounded-full !bg-white/20 !flex !items-center !justify-center !mb-2 !shadow-inner">
                    {story.icon}
                  </div>
                  <h3 className="!text-lg !font-bold !tracking-wide !border-b-2 !border-white/30 !pb-1">
                    {story.title}
                  </h3>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Column: Picture Gallery */}
      <div className="!flex-1 !flex !flex-col !gap-6">
        <h2 className="!text-3xl !font-bold !text-white !mb-4 !text-center md:!text-left">
          📸 Moments That Matter
        </h2>
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="!overflow-hidden !rounded-xl !shadow-lg"
          >
            <img
              src={src}
              alt={`Success Moment ${index + 1}`}
              className="!w-full !h-48 !object-cover !rounded-xl !transition-all !duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
