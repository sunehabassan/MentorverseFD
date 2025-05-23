import React from 'react';
import { Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { UserAddOutlined, LoginOutlined, FormOutlined, MessageOutlined, VideoCameraOutlined } from '@ant-design/icons';
import img from "../../assets/adv.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const HowToBecomeMentor = () => (
  <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500  h-[85vh] ">
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card bordered={true} className="!bg-white !border-orange-300 !border !p-4 !rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <UserAddOutlined className="!text-xl !text-blue-500" />
          <h2 className="!text-lg !font-bold">Step 1: Registration</h2>
        </div>
        <p>Create your account and verify your email to get started as a mentor.</p>
        <Button type="primary" className="!mt-2 !bg-blue-500 !border-none !hover:bg-blue-600">Register Now</Button>
      </Card>
    </motion.div>

    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card bordered={true} className="!bg-white !border-orange-400 !border !p-4 !rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <LoginOutlined className="!text-xl !text-orange-500" />
          <h2 className="!text-lg !font-bold">Step 2: Login</h2>
        </div>
        <p>Access your mentor dashboard to start managing your profile and requests.</p>
        <Button type="primary" className="!mt-2 !bg-orange-500 !border-none !hover:bg-orange-600">Login</Button>
      </Card>
    </motion.div>

    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card bordered={true} className="!bg-white !border-orange-500 !border !p-4 !rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <FormOutlined className="!text-xl !text-purple-500" />
          <h2 className="!text-lg !font-bold">Step 3: Complete Information Form</h2>
        </div>
        <p>Fill out the complete mentor information form to provide your details and preferences.</p>
        <Button type="primary" className="!mt-2 !bg-purple-500 !border-none !hover:bg-purple-600">Fill Form</Button>
      </Card>
    </motion.div>

    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card bordered={true} className="!bg-white !border-orange-600 !border !p-4 !rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <MessageOutlined className="!text-xl !text-green-500" />
          <h2 className="!text-lg !font-bold">Step 4: Manage Requests</h2>
        </div>
        <p>Go to the Requests page in the header to view, accept, or reject student requests.</p>
        <Button type="primary" className="!mt-2 !bg-green-500 !border-none !hover:bg-green-600">View Requests</Button>
      </Card>
    </motion.div>

    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card bordered={true} className="!bg-white !border-orange-700 !border !p-4 !rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <VideoCameraOutlined className="!text-xl !text-red-500" />
          <h2 className="!text-lg !font-bold">Step 5: Start Your Class</h2>
        </div>
        <p>Begin your sessions with students in your preferred mode (video, chat, etc.).</p>
        <Button type="primary" className="!mt-2 !bg-red-500 !border-none !hover:bg-red-600">Start Class</Button>
      </Card>
    </motion.div>

    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card bordered={true} className="!bg-white !border-orange-800 !flex !justify-center !items-center">
        <img src={img} alt="Work" className="!w-200 !h-24 !object-cover !rounded-lg !shadow-lg" />
      </Card>
    </motion.div>
  </div>
);
