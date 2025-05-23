import React from 'react';
import { Form, Input, Button } from 'antd';
import { baseURL } from "/config";
import { toast, Bounce, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';



const Contact = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/contact`, {
        name: values.name,
        email: values.email,
        message: values.message,
      });
  
      if (response.data.success) {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          transition: Bounce,
        });
        setTimeout(() => navigate('/'), 3000);
      }
    } catch (error) {
      console.error("Contact Error:", error.response?.data || error.message);
      toast.error('Message failed to send.', {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
    }
  };
  

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-slate-300 px-4">
        <div className="bg-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-lg border border-orange-500 hover:shadow-white">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">Contact Us</h2>

          <Form layout="vertical" onFinish={onFinish} className="space-y-4">
            <Form.Item
              label={<span className="text-orange-500 font-semibold">Full Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input
                className="bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500 focus:ring-2 transition-all duration-300 outline-none"
                placeholder="Your Name"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-orange-500 font-semibold">Email</span>}
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Invalid email format!' },
              ]}
            >
              <Input
                className="bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500 focus:ring-2 transition-all duration-300 outline-none"
                placeholder="Your Email"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-orange-500 font-semibold">Message</span>}
              name="message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <Input.TextArea
                rows={4}
                className="bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500 focus:ring-2 transition-all duration-300 outline-none"
                placeholder="Your Message"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-orange-500 text-black font-bold rounded-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default Contact;
