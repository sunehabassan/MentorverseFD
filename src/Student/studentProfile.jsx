import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "/config";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiBookOpen,
  FiLayers,
  FiTarget,
  FiAward,
  FiClipboard,
} from "react-icons/fi";
import Studentheader from "../components/Studentheader";

import photo1 from "../../src/assets/photo1.jpg";
import photo2 from "../../src/assets/photo2.jpg";
import photo3 from "../../src/assets/photo3.jpg";
import photo4 from "../../src/assets/student.jpg";
import photo7 from "../../src/assets/happy.jpg";
import photo8 from "../../src/assets/experience.jpg";
import image from "../../src/assets/avatar.jpg";

const { Option } = Select;

// ------------------ StudentProfileForm ------------------ //
const StudentProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ username: "", email: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("Token") || "";

  useEffect(() => {
    const username = localStorage.getItem("username") || "";
    const email = localStorage.getItem("email") || "";
    setUserData({ username, email });
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${baseURL}/api/auth/student-profile`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(response.data.message);
      navigate("/homestu");
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error.");
    } finally {
      setLoading(false);
    }
  };

  const iconStyles = {
    user: "text-blue-400",
    mail: "text-green-400",
    book: "text-purple-400",
    layers: "text-pink-400",
    target: "text-yellow-400",
    award: "text-red-400",
    clipboard: "text-teal-400",
  };

  return (
    <>
      <Studentheader />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 p-6">
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="p-8 w-full md:w-5/12 bg-white rounded-xl shadow-lg space-y-6 border border-gray-200"
          >
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
              <FiUser className={iconStyles.user} /> Student Profile Form
            </h2>

            <div className="mb-4">
              <p className="flex items-center gap-2 text-gray-600">
                <FiUser className={iconStyles.user} /> {userData.username}
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <FiMail className={iconStyles.mail} /> {userData.email}
              </p>
            </div>

            <Form layout="vertical" onFinish={onFinish} className="space-y-4">
              <Form.Item
                label={
                  <span className="flex items-center gap-2 text-gray-800">
                    <FiBookOpen className={iconStyles.book} />
                    Desired Courses
                  </span>
                }
                name="desiredCourses"
                rules={[{ required: true, message: "Please enter desired courses." }]}
              >
                <Input
                  placeholder="Enter courses (comma separated)"
                  className="p-2 rounded-lg"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="flex items-center gap-2 text-gray-800">
                    <FiLayers className={iconStyles.layers} />
                    Number of Courses
                  </span>
                }
                name="courseCount"
                rules={[{ required: true, message: "Please enter number of courses." }]}
              >
                <Input type="number" placeholder="Enter number of courses" className="p-2 rounded-lg" />
              </Form.Item>

              <Form.Item
                label={
                  <span className="flex items-center gap-2 text-gray-800">
                    <FiTarget className={iconStyles.target} />
                    Learning Mode
                  </span>
                }
                name="learningMode"
              >
                <Select className="rounded-lg">
                  <Option value="Email">Email</Option>
                  <Option value="Voice Call">Voice Call</Option>
                  <Option value="Video Call">Video Call</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <span className="flex items-center gap-2 text-gray-800">
                    <FiTarget className={iconStyles.target} />
                    Learning Goal
                  </span>
                }
                name="learningGoal"
              >
                <Input.TextArea placeholder="Enter your learning goal" className="p-2 rounded-lg" />
              </Form.Item>

              <Form.Item
                label={
                  <span className="flex items-center gap-2 text-gray-800">
                    <FiAward className={iconStyles.award} />
                    Qualification
                  </span>
                }
                name="qualification"
              >
                <Input placeholder="Enter your qualification" className="p-2 rounded-lg" />
              </Form.Item>

              <Form.Item
                label={
                  <span className="flex items-center gap-2 text-gray-800">
                    <FiClipboard className={iconStyles.clipboard} />
                    Learning Preferences
                  </span>
                }
                name="learningPreferences"
              >
                <Checkbox.Group className="space-y-2">
                  <Checkbox value="Self-paced" className="text-gray-800">
                    Self-paced
                  </Checkbox>
                  <Checkbox value="Group Sessions" className="text-gray-800">
                    Group Sessions
                  </Checkbox>
                  <Checkbox value="One-on-One" className="text-gray-800">
                    One-on-One
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 rounded-lg"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </motion.div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full md:w-5/12 grid grid-cols-2 gap-4"
          >
            {[photo1, photo2, photo3, photo4, photo7, photo8].map((photo, index) => (
              <div key={index} className="h-44 rounded-lg shadow-lg">
                <img src={photo} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </motion.div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

// ------------------ StudentProfileView ------------------ //
const StudentProfileView = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("Token") || "";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/auth/student-profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data.data);
      } catch (error) {
        toast.error("Unable to fetch profile.");
        setProfile(null); // clear previous data on error
      }
    };

    if (token) {
      setProfile(null); // reset before fetch
      fetchProfile();
    }
  }, [token]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Studentheader />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 p-6">
        {profile ? (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="max-w-3xl bg-white rounded-3xl shadow-xl p-10 space-y-6"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
              <img src={image} alt="Profile" className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{profile.username}</h2>
                <p className="text-sm text-gray-500">📧 {profile.email}</p>
              </div>
            </div>

            <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Desired Courses", value: profile.desiredCourses?.join(", ") || "N/A", icon: <FiBookOpen className="text-xl text-green-500" /> },
                { label: "Number of Courses", value: profile.courseCount || "N/A", icon: <FiLayers className="text-xl text-purple-500" /> },
                { label: "Learning Mode", value: profile.learningMode || "N/A", icon: <FiTarget className="text-xl text-orange-500" /> },
                { label: "Learning Goal", value: profile.learningGoal || "N/A", icon: <FiTarget className="text-xl text-teal-500" /> },
                { label: "Qualification", value: profile.qualification || "N/A", icon: <FiAward className="text-xl text-yellow-500" /> },
                { label: "Learning Preferences", value: profile.learningPreferences?.join(", ") || "N/A", icon: <FiClipboard className="text-xl text-pink-500" /> },
              ].map((item, index) => (
                <motion.div key={index} variants={cardVariants} className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg hover:bg-gray-100 transition-all">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <p className="text-white text-lg">No profile data available.</p>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export { StudentProfileForm, StudentProfileView };
