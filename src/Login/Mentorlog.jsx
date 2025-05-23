import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Mentorlog = () => {
  const navigate = useNavigate();
  const [data, setResponseData] = useState("");

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/Mentorlog", values);
      if (response.data.success) {
        setResponseData(response.data.message);

        const { token, username, email} = response.data.data;

        // ✅ Save token, username, and email to localStorage
        localStorage.setItem('mentorToken', token);
        localStorage.setItem('username', username);
        localStorage.setItem('mentorEmail', email);
        // localStorage.setItem("MentorId",mentorId)

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
          navigate('/Homementor');
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
      <div className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-3 rounded-md shadow-md max-w-md mt-4">
        Please Login to access more features on MentorVerse.
      </div>

      <div className="flex pl-20">
        <div className="mt-5 p-5 border bg-yellow-100 rounded-lg transition-transform duration-300 shadow-lg hover:shadow-2xl shadow-yellow-500/50">
          <h1 className="text-center text-yellow-800 font-bold animate-pulse text-2xl hover:shadow-2xl shadow-black mb-2">
            Mentors Login
          </h1>

          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              label={<span className="text-yellow-800 text-lg font-bold">Username</span>}
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input
                className="w-full bg-gray-800 text-white border border-yellow-500 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your username"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-yellow-800 text-lg font-bold">Password</span>}
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                className="w-full bg-gray-800 text-white border border-yellow-500 px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                block
                htmlType="submit"
                className="w-full bg-yellow-800 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Mentorlog;
