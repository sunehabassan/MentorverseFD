import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { baseURL } from "/config";
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';

const App = () => {
  const [resData, setResData] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/register`, values);
      if (response.data.success) {
        message.success('Registration successful!');
        setResData(response.data.message);
        toast.success('🎉 You have registered successfully!', {
          autoClose: 2000,
          theme: 'light',
          transition: Bounce,
        });
        setTimeout(() => navigate('/Mentorlog'), 2500);
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
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 border border-orange-200 
        bg-white hover:bg-orange-50 transform hover:scale-105 animate-fade-in"
      >
        <h2 className="text-center text-3xl font-bold text-orange-500 mb-6 relative">
          Mentor Registration
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-16 h-1 bg-orange-300 rounded-full"></span>
        </h2>

        <Form name="register" onFinish={onFinish} layout="vertical">
          <Form.Item
            label={<span className="text-gray-700 font-medium">Username</span>}
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input placeholder="JohnDoe" className="hover:border-orange-400" />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 font-medium">Email</span>}
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Enter a valid email!' },
            ]}
          >
            <Input placeholder="john@example.com" className="hover:border-orange-400" />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="********" className="hover:border-orange-400" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 text-white font-semibold border-none transition-all duration-300"
            >
              Register
            </Button>
          </Form.Item>

          <div className="text-center text-sm text-gray-600 mt-2">
            Already have an account?
          </div>

          <Form.Item>
            <Button
              onClick={() => navigate('/Mentorlog')}
              block
              className="mt-2 border border-orange-500 text-orange-500 hover:bg-orange-100 transition-all"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
            <GoogleLogin/>
        {resData && (
          <div className="text-center text-green-600 mt-3 text-sm">{resData}</div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
