import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();
  const [data, setResponseData] = useState("");

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", values);
      if (response.data.success) {
        setResponseData(response.data.message);

        localStorage.setItem('Token', response.data.data.token)
  
        toast.success('🎉 Login successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
  
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
    } catch (error) {
      message.error("Login failed! Please check your credentials.");
  
      toast.error('❌ Login failed!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div>{data}</div>
      <div className="bg-black flex justify-center">
        <div className="p-5 border bg-gradient-to-r from-white to-gray-800 
        border-yellow-500 rounded-lg transition-transform duration-300 
        hover:scale-105 shadow-lg hover:shadow-2xl shadow-yellow-500/50">

          <h1 className="text-center text-yellow-400 underline font-bold animate-pulse text-2xl hover:shadow-2xl shadow-black">
            Login
          </h1>

          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              label={<span className="text-yellow-400 text-lg font-bold">Username</span>}
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input className="w-full bg-gray-800 text-white border border-yellow-500 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500" placeholder="Enter your username" />
            </Form.Item>

            <Form.Item
              label={<span className="text-yellow-400 text-lg font-bold">Password</span>}
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password className="w-full bg-gray-800 text-white border border-yellow-500 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500" placeholder="Enter your password" />
            </Form.Item>


            <Form.Item>
              <Button
                block
                htmlType="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
};

export default Login;
