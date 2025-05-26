import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../config";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Mentorlog = ({ isModal = false }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/api/auth/Mentorlog`, values);
      if (response.data.success) {
        const { token, username, email } = response.data.data;

        localStorage.setItem("mentorToken", token);
        localStorage.setItem("username", username);
        localStorage.setItem("mentorEmail", email);
        localStorage.setItem("role", "mentor");

        toast.success(`🧡 ${username}, welcome back Mentor!`, {
          style: {
            backgroundColor: "#fff7ed",
            border: "1px solid #fb923c",
            color: "#9a3412",
            fontWeight: "bold",
          },
          icon: "🎓",
        });

        setTimeout(() => {
          navigate("/Homementor");
        }, 2000);
      }
    } catch (error) {
      message.error("Login failed! Please check your credentials.");
      toast.error("❌ Login failed! Try again.", {
        style: {
          backgroundColor: "#fff7ed",
          border: "1px solid #f87171",
          color: "#7f1d1d",
          fontWeight: "bold",
        },
        icon: "⚠️",
      });
    } finally {
      setLoading(false);
    }
  };

  const mentorCards = [
    { emoji: "🧑‍🏫", text: "Experienced Mentors" },
    { emoji: "📚", text: "Learning Resources" },
    { emoji: "💼", text: "Career Guidance" },
    { emoji: "📈", text: "Progress Tracking" },
  ];

  return (
    <>
      {!isModal && (
        <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-3 rounded-md shadow-md max-w-md mt-4 mx-auto text-center">
          Mentors, please login to access your dashboard.
        </div>
      )}

      <div className={`flex flex-col ${!isModal ? "md:flex-row" : ""} items-center justify-center p-6 mt-6 gap-6`}>
        {/* Feature Cards */}
        <div className={`${isModal ? "grid grid-cols-4 gap-4" : "flex flex-col gap-4"} ${isModal ? "" : "mb-6"}`}>
          {mentorCards.map((item, index) => (
            <motion.div
              key={index}
               style={{
                transform: `rotate(${index % 2 === 0 ? "-" : ""}${index * 3}deg)`,
                zIndex: 5 - index,
              }}
              className={`bg-white rounded-xl shadow-md px-6 py-4 border-l-4 border-orange-500 text-center ${
                isModal ? "text-2xl" : "flex items-center gap-3 text-left"
              } text-orange-800`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">{item.emoji}</span>
              {!isModal && <span className="font-semibold text-base">{item.text}</span>}
            </motion.div>
          ))}
        </div>

        {/* Login Form */}
        <motion.div
          className="p-8 bg-white rounded-2xl shadow-2xl w-full max-w-md transition-transform duration-300 hover:shadow-orange-300/50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
          <h1 className="text-center text-orange-700 font-extrabold text-3xl mb-6">Mentor Login</h1>

          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              label={<span className="text-orange-700 font-semibold">Username</span>}
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input
                prefix={<UserOutlined className="text-orange-600" />}
                placeholder="Enter your username"
                className="!bg-gray-50 !border !border-orange-300 !rounded-md !px-4 !py-2"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-orange-700 font-semibold">Password</span>}
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-orange-600" />}
                placeholder="Enter your password"
                className="!bg-gray-50 !border !border-orange-300 !rounded-md !px-4 !py-2"
              />
            </Form.Item>

            <Form.Item>
              <Button
                block
                htmlType="submit"
                loading={loading}
                className="!bg-orange-700 hover:!bg-orange-500 !text-white !font-bold !py-2 !px-4 !rounded-lg hover:!scale-105 transition-all duration-300"
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover theme="colored" />
    </>
  );
};

export default Mentorlog;
