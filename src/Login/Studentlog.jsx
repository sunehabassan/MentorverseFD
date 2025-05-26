import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Studentlog = ({ isModal = false }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/auth/Studentlog", values);
      if (response.data.success) {
        const { token, username, email } = response.data.data;

        localStorage.setItem("Token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("role", "student");

        toast.success(`💙 Welcome back, ${username}!`, {
          style: {
            backgroundColor: "#eff6ff",
            border: "1px solid #3b82f6",
            color: "#1e3a8a",
            fontWeight: "bold",
          },
          icon: "📘",
        });

        setTimeout(() => {
          navigate("/Homestu");
        }, 2000);
      }
    } catch (error) {
      message.error("Login failed! Please check your credentials.");
      toast.error("❌ Login failed! Try again.", {
        style: {
          backgroundColor: "#eff6ff",
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

  const studentCards = [
    { emoji: "🎯", label: "Goals" },
    { emoji: "📖", label: "Learn" },
    { emoji: "🧑‍🏫", label: "Mentors" },
    { emoji: "🎥", label: "Videos" },
  ];

  return (
    <>
      {!isModal && (
        <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-3 rounded-md shadow-md max-w-md mt-4 mx-auto text-center">
          Students, please login to begin your learning journey.
        </div>
      )}

      <div
        className={`flex flex-col ${
          !isModal ? "md:flex-row" : ""
        } items-center justify-center p-6 mt-6 gap-6`}
      >
        <div
          className={`${
            isModal
              ? "grid grid-cols-4 gap-4"
              : "flex flex-col gap-4 text-center"
          } ${isModal ? "" : "mb-6"}`}
        >
          {studentCards.map((card, index) => (
            <motion.div
              key={index}
              style={{
                transform: `rotate(${index % 2 === 0 ? "-" : ""}${index * 3}deg)`,
                zIndex: 5 - index,
              }}
              className={`bg-white px-4 py-3 rounded-md shadow-md border-l-4 border-blue-500 text-blue-800 ${
                isModal ? "text-2xl" : "flex items-center justify-between gap-3 text-lg font-semibold w-60"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
             
            >
              <span className="text-2xl">{card.emoji}</span>
              {!isModal && <span>{card.label}</span>}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="p-8 bg-white rounded-2xl shadow-2xl w-full max-w-md transition-transform duration-300 hover:shadow-blue-300/50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-center text-blue-700 font-extrabold text-3xl mb-6">
            Student Login
          </h1>

          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              label={
                <span className="text-blue-700 font-semibold">Username</span>
              }
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input
                prefix={<UserOutlined className="text-blue-600" />}
                placeholder="Enter your username"
                className="!bg-gray-50 !border !border-blue-300 !rounded-md !px-4 !py-2"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-blue-700 font-semibold">Password</span>
              }
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-blue-600" />}
                placeholder="Enter your password"
                className="!bg-gray-50 !border !border-blue-300 !rounded-md !px-4 !py-2"
              />
            </Form.Item>

            <Form.Item>
              <Button
                block
                htmlType="submit"
                loading={loading}
                className="!bg-blue-700 hover:!bg-blue-500 !text-white !font-bold !py-2 !px-4 !rounded-lg hover:!scale-105 transition-all duration-300"
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Studentlog;
