import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { baseURL } from '/config';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const benefitData = [
  { icon: "🌍", title: "Global Reach", desc: "Mentor students from around the world." },
  { icon: "⏰", title: "Flexible Schedule", desc: "Teach when it suits you." },
  { icon: "🎯", title: "Real Impact", desc: "Make a difference in someone's career." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const MentorRegister = () => {
  const [resData, setResData] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/register`, values);
      if (response.data.success) {
        message.success('Registration successful!');
        toast.success('🎉 You have registered successfully!', {
          autoClose: 2000,
          theme: 'light',
          transition: Bounce,
        });
        setTimeout(() => navigate('/Mentorlog'), 2500);
        setResData(response.data.message);
      }
    } catch {
      message.error('Registration failed');
      toast.error('⚠️ Registration failed!', {
        autoClose: 2000,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden md:flex animate-fade-in">

        {/* Left Column - Benefits */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-100 to-yellow-50 p-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">Why Mentor With Us?</h2>

          <div className="grid grid-cols-1 gap-4 w-full">
            {benefitData.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="text-lg font-semibold text-orange-600">{benefit.title}</div>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-1/2 px-6 py-10">
          <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Mentor Registration</h2>

          <Form name="register" onFinish={onFinish} layout="vertical" className="space-y-4">
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="text-orange-400" />}
                placeholder="Username"
                className="rounded-xl shadow-sm hover:shadow-md transition-all"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Enter a valid email!' },
              ]}
            >
              <Input
                size="large"
                prefix={<MailOutlined className="text-orange-400" />}
                placeholder="Email"
                className="rounded-xl shadow-sm hover:shadow-md transition-all"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined className="text-orange-400" />}
                placeholder="Password"
                className="rounded-xl shadow-sm hover:shadow-md transition-all"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold shadow-lg"
              >
                Register
              </Button>
            </Form.Item>

            <div className="text-center text-sm text-gray-600">
              Already have an account?
            </div>

            <Form.Item>
              <Button
                onClick={() => navigate('/Mentorlog')}
                block
                size="large"
                className="mt-2 rounded-xl border border-orange-400 text-orange-500 hover:bg-orange-100"
              >
                Sign In
              </Button>
            </Form.Item>

            <div className="my-4">
              <GoogleLogin />
            </div>

            {resData && (
              <div className="text-center text-green-600 mt-3 text-sm">{resData}</div>
            )}
          </Form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default MentorRegister;
