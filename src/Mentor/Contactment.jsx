import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { baseURL } from "/config";
import { toast, Bounce, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import img from '../../src/assets/partners.png';
import { FaUserCircle, FaEnvelope, FaCommentDots, FaCheckCircle } from 'react-icons/fa';
import Mentorheader from '../components/Mentorheader';
const contactment = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ mentorEmail: '', username: '' });
  const [form] = Form.useForm(); // Create form instance

  useEffect(() => {
    const email = localStorage.getItem('mentorEmail');
    const username = localStorage.getItem('username');
    setUserData({ email, username });

    // Update form values after state is updated
    form.setFieldsValue({
      email,
      name: username,
    });

    toast.info(`Welcome back, ${username}! Drop your message`, {
      position: "top-right",
      autoClose: 3000,
      icon: <FaUserCircle className="text-orange-500" />,
      transition: Bounce,
    });
  }, [form]);

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/contact`, {
        name: userData.username,
        email: userData.email,
        message: values.message,
      });

      if (response.data.success) {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          icon: <FaCheckCircle className="text-green-500" />,
          transition: Bounce,
        });
        setTimeout(() => navigate('/homestu'), 3000);
      }
    } catch (error) {
      console.error("Contact Error:", error.response?.data || error.message);
      toast.error('Message failed to send.', {
        position: "top-right",
        autoClose: 3000,
        icon: <FaCommentDots className="text-red-500" />,
        transition: Bounce,
      });
    }
  };

  return (
   
    
   <> <Mentorheader/> <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 px-4 py-10">
     
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl font-bold text-orange-500 text-center">We are available for you. Drop your message or query!</h2>
          <img src={img} alt="img" className="h-90 w-auto object-contain" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-gray-200 p-8 rounded-2xl shadow-lg"
        >
          <div className="mb-6 bg-gray-800 text-white p-4 rounded-lg">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-2 flex items-center gap-2"
            >
              <FaEnvelope className="text-orange-500" /> <span className="font-bold">Your Email:</span> {userData.email}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <FaUserCircle className="text-orange-500" /> <span className="font-bold">Your Full Name:</span> {userData.username}
            </motion.p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
            initialValues={{
              email: userData.email,
              name: userData.username,
            }}
          >
            <Form.Item
              label={<div className="flex items-center gap-2 text-orange-500 font-semibold">
                <FaEnvelope className="text-orange-500" />
                <span>Email</span>
              </div>}
              name="email"
            >
              <Input readOnly className="bg-gray-800 text-white border border-gray-600" />
            </Form.Item>

            <Form.Item
              label={<div className="flex items-center gap-2 text-orange-500 font-semibold">
                <FaUserCircle className="text-lg" />
                <span>Full Name</span>
              </div>}
              name="name"
            >
              <Input readOnly className="bg-gray-800 text-white border border-gray-600" />
            </Form.Item>

            <Form.Item
              label={<div className="flex items-center gap-2 text-orange-500 font-semibold">
                <FaCommentDots className="text-lg" />
                <span>Message</span>
              </div>}
              name="message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <Input.TextArea rows={4} className="bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500 focus:ring-2" placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-orange-500 text-black font-bold rounded-md hover:bg-orange-600 transition-transform duration-300">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
      <ToastContainer />
    </div></>
  );
};

export default contactment;
