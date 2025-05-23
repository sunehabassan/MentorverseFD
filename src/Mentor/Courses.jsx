import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { baseURL } from "/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FiBook, FiUser, FiLayers, FiClock, FiEdit3 } from 'react-icons/fi';
import Mentorheader from '../components/Mentorheader';
import img from "../../src/assets/copy.jpg"
const { TextArea } = Input;

const Courses = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/Course`, values);
      if (response.data.success) {
        toast.success("Course submitted successfully!");
        form.resetFields();
      }
    } catch (error) {
      toast.error("Failed to submit course. Try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Mentorheader />
      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-4">
        <motion.div 
          initial={{ x: -300, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg flex flex-col gap-6"
        >
          <h2 className="text-3xl text-orange-500 font-bold mb-4 text-center">Submit New Course</h2>
          <Form form={form} layout="vertical" onFinish={onFinish} className="text-black">
            <Form.Item name="title" rules={[{ required: true, message: 'Please enter the course title' }]}
              label={<span className="flex items-center gap-2 text-orange-400"><FiBook /> Course Title</span>}
            >
              <Input placeholder="Enter course title" />
            </Form.Item>

            <Form.Item name="description" rules={[{ required: true, message: 'Please enter the description' }]}
              label={<span className="flex items-center gap-2 text-orange-400"><FiEdit3 /> Description</span>}
            >
              <TextArea rows={4} placeholder="Course description" />
            </Form.Item>

            <Form.Item name="mentorName" rules={[{ required: true, message: 'Enter your name' }]}
              label={<span className="flex items-center gap-2 text-orange-400"><FiUser /> Mentor Name</span>}
            >
              <Input placeholder="Mentor name" />
            </Form.Item>

            <Form.Item name="category" rules={[{ required: true, message: 'Select course category' }]}
              label={<span className="flex items-center gap-2 text-orange-400"><FiLayers /> Category</span>}
            >
              <Select placeholder="Select a category">
                <Select.Option value="Frontend">Frontend</Select.Option>
                <Select.Option value="Backend">Backend</Select.Option>
                <Select.Option value="Full Stack">Full Stack</Select.Option>
                <Select.Option value="AI/ML">AI/ML</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="duration" rules={[{ required: true, message: 'Enter course duration' }]}
              label={<span className="flex items-center gap-2 text-orange-400"><FiClock /> Duration</span>}
            >
              <Input placeholder="e.g., 4 weeks" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold w-full">
                Submit Course
              </Button>
            </Form.Item>
          </Form>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block w-1/2"
        >
          <img src={img} alt="Course" className="w-full h-auto ml-10" />
        </motion.div>
      </div>
      <ToastContainer position="top-right" autoClose={4000} theme="light" />
    </>
  );
};

export default Courses;
