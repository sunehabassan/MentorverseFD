import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { baseURL } from '/config';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  MailOutlined,
  UserOutlined,
  BookOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const Contact = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/api/auth/contact`, values);
      if (response.data.success) {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          transition: Bounce,
        });
        setTimeout(() => navigate('/'), 3000);
      }
    } catch (error) {
      console.error('Contact Error:', error.response?.data || error.message);
      toast.error('Message failed to send.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <main className="!min-h-screen !flex !items-center !justify-center !bg-gradient-to-r !from-gray-800 !via-gray-600 !to-orange-500 !px-4 !py-20">
        <div className="!flex !flex-col md:!flex-row !gap-10 !items-start !w-full !max-w-6xl">
          {/* Left: Contact Form */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="!w-full md:!w-1/2 !bg-white/100 !p-10 !shadow-xl"
          >
            <h2 className="!text-4xl !font-extrabold !text-center !text-transparent !bg-clip-text !bg-gradient-to-r !from-orange-500 !to-pink-500 !animate-pulse !mb-10">
              Contact Us
            </h2>
            <Form layout="vertical" onFinish={onFinish} className="!space-y-5">
              <Form.Item
                label={<span className="!font-bold !text-gray-800">Full Name</span>}
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input
                  prefix={<UserOutlined className="!text-orange-400" />}
                  placeholder="Your Name"
                  autoFocus
                  className="!bg-transparent !text-black !border-none !border-b-2 !border-pink-300 focus:!border-pink-500 focus:!shadow-none"
                />
              </Form.Item>

              <Form.Item
                label={<span className="!font-bold !text-gray-800">Email</span>}
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Invalid email format!' },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="!text-orange-400" />}
                  placeholder="Your Email"
                  className="!bg-transparent !text-black !border-none !border-b-2 !border-gray-300 focus:!border-blue-500 focus:!shadow-none"
                />
              </Form.Item>

              <Form.Item
                label={<span className="!font-bold !text-gray-800">Message</span>}
                name="message"
                rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Your Message"
                  className="!bg-transparent !text-black !border-none !border-b-2 !border-gray-300 focus:!border-purple-500 focus:!shadow-none"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="!w-full !bg-gradient-to-r !from-orange-500 !to-pink-500 !text-white !font-bold !rounded-xl !hover:scale-105 !transition-transform !duration-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form.Item>
            </Form>
          </motion.section>

          {/* Right: Info Cards */}
          <motion.section
            initial="hidden"
            whileInView="visible"
     
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            variants={fadeUp}
            className="!w-full md:!w-1/2 !text-white !space-y-10"
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="!text-3xl !font-bold !text-center !text-pink-500 !mb-4 !animate-bounce"
            >
              Empower Your Journey
            </motion.h3>

            <div className="!space-y-6">
              {[
                {
                  title: 'Find the Right Mentor',
                  icon: <TeamOutlined className="!text-2xl !text-purple-300" />,
                  desc: 'We help you connect with professionals tailored to your learning style.',
                  color: '!border-purple-600 !bg-purple-900/30',
                },
                {
                  title: 'Personalized Learning',
                  icon: <BookOutlined className="!text-2xl !text-cyan-300" />,
                  desc: 'Get matched with mentors based on your preferred courses and pace.',
                  color: '!border-cyan-600 !bg-cyan-900/30',
                },
                {
                  title: 'Learn Your Way',
                  icon: <VideoCameraOutlined className="!text-2xl !text-yellow-300" />,
                  desc: 'Choose between email, voice, or video call learning methods.',
                  color: '!border-yellow-600 !bg-yellow-900/30',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileInView="visible"
                  initial="hidden"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`!flex !items-start !gap-4 !p-5 ${item.color} !border-l-8 !rounded-xl !shadow-md`}
                >
                  {item.icon}
                  <div>
                    <h4 className="!text-xl !font-semibold !text-white">{item.title}</h4>
                    <p className="!text-sm !text-white/80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Animated Floating Images */}
              <div className="!flex !flex-wrap !justify-center !gap-6 !mt-10">
                {['con3.jpg', 'con2.jpg', 'con4.jpg', 'con5.jpg'].map((icon, i) => (
                  <motion.img
                    key={i}
                    src={icon}
                    alt={`icon-${i}`}
                    className="!w-28 !h-28 !hover:scale-110 !transition-transform !duration-300 border-4 border-pink-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 2 + i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        </div>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
