import { Card } from 'antd';
import { motion } from 'framer-motion';
import { DollarCircleOutlined, ContainerOutlined, ShareAltOutlined } from '@ant-design/icons';

const incomeSources = [
  {
    id: 1,
    icon: <DollarCircleOutlined className="!text-3xl !text-yellow-300 !drop-shadow-md" />,
    title: 'Session Fees',
    bgColor: 'from-yellow-400 to-pink-500',
    borderColor: 'border-yellow-300'
  },
  {
    id: 2,
    icon: <ContainerOutlined className="!text-3xl !text-green-300 !drop-shadow-md" />,
    title: 'Course Subscriptions',
    bgColor: 'from-green-400 to-cyan-500',
    borderColor: 'border-green-300'
  },
  {
    id: 3,
    icon: <ShareAltOutlined className="!text-3xl !text-blue-300 !drop-shadow-md" />,
    title: 'Referral Bonuses',
    bgColor: 'from-blue-400 to-violet-500',
    borderColor: 'border-blue-300'
  }
];

const cardVariants = {
  hidden: (direction) => ({ ...direction, opacity: 0 }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
};

export const IncomeSources = () => (
  <section className="!bg-gradient-to-r !from-gray-800 !via-gray-600 !to-orange-500 !py-24 !px-6 !overflow-x-auto">
    <div className="!max-w-7xl !mx-auto !grid !grid-cols-1 md:!grid-cols-2 !items-center !gap-16">
      
      {/* Left: Stair-Step Cards */}
      <div className="!relative !h-[420px] !w-[500px] md:!w-[500px] !mx-auto">
        {incomeSources.map((source, index) => (
          <motion.div
            key={source.id}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            custom={{ x: -100 * (2 - index) }}
         
            className="!absolute"
            style={{
              left: `${index * 100}px`,
              top: `${index * 100}px`,
              zIndex: 10 - index
            }}
          >
            <Card
              bordered={false}
              className={`!bg-gradient-to-br ${source.bgColor} !p-6 !rounded-xl !shadow-lg !w-56 !h-52 !border-2 ${source.borderColor} !relative hover:!shadow-[0_0_15px] hover:!shadow-white`}
              style={{ backdropFilter: 'blur(6px)' }}
            >
              {/* Icon at top-right */}
              <div className="!absolute !top-3 !right-3">
                {source.icon}
              </div>

              {/* Title text at the bottom */}
              <div className="!absolute !bottom-4 !left-1/2 !-translate-x-1/2">
                <h3 className="!text-white !font-bold !text-center !drop-shadow-md !text-base">
                  {source.title}
                </h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Right: Heading and Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
       
        className="!text-white !text-center md:!text-left"
      >
        <h2 className="!text-4xl !font-bold !mb-6 !drop-shadow-lg">
          <span className="!border-b-4 !border-pink-400 !pb-2">Mentor Income Sources</span>
        </h2>
        <p className="!text-lg !mb-8 !max-w-md">
          Unlock your earnings through flexible options like session fees, course subscriptions, and referral bonuses.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3704/3704191.png"
          alt="Income Illustration"
          className="!w-72 !mx-auto md:!mx-0 !drop-shadow-xl"
        />
      </motion.div>
    </div>
  </section>
);
