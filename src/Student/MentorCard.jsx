import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Avatar, Button, Tooltip, Spin, Modal, Form, Input } from "antd";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaEnvelope,
  FaBookOpen,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Studentheader from "../components/Studentheader";
import { baseURL } from "/config.js";

const { TextArea } = Input;

const getPublicUrl = (filePath) => {
  if (!filePath) return null;
  const fileName = filePath.split(/[\\/]/).pop();
  return `${baseURL}/Mentorship/${encodeURIComponent(fileName)}`;
};

const MentorCard = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingRequest, setLoadingRequest] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentorEmail, setSelectedMentorEmail] = useState(null);
  const [form] = Form.useForm();

  const fetchMentors = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/api/auth/mentors`);
      if (Array.isArray(response.data)) {
        setMentors(response.data);
      } else {
        toast.error("❌ Failed to fetch mentors. Invalid response format.", {
          position: "top-right",
          autoClose: 3000,
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("❌ Error fetching mentors.", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  const showModal = (email) => {
    setSelectedMentorEmail(email);
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleRequestSubmit = async (values) => {
    const token = localStorage.getItem("Token");
    if (!token) {
      toast.error("❌ You must be logged in to send a request.", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
      return;
    }

    setLoadingRequest((prev) => ({ ...prev, [selectedMentorEmail]: true }));

    try {
      const response = await axios.post(
        `${baseURL}/api/auth/send-request`,
        {
          email: selectedMentorEmail,
          message: values.message,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message || "✅ Request sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
      });
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      toast.error(
        `❌ ${error.response?.data?.error || "Failed to send request."}`,
        {
          position: "top-right",
          autoClose: 3000,
          transition: Bounce,
        }
      );
    } finally {
      setLoadingRequest((prev) => ({ ...prev, [selectedMentorEmail]: false }));
    }
  };

  const renderMentorCard = (mentor) => {
    const {
      _id,
      profilePhotoUrl,
      fullName = "N/A",
      email = "N/A",
      jobTitle = "N/A",
      experience = "N/A",
      timezone = "N/A",
      teachingMode = [],
      courses = [],
      linkedin = "",
    } = mentor;

    const publicPhotoUrl = getPublicUrl(profilePhotoUrl);

    return (
      <motion.div
        key={_id}
        whileHover={{ scale: 1.05 }}
        className="rounded-2xl shadow-lg p-4 w-72 relative group transition duration-300"
      >
        <Card className="rounded-2xl shadow-lg p-4 bg-white">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Tooltip title="View LinkedIn">
                <FaLinkedin className="text-blue-600 text-2xl hover:scale-110 hover:text-blue-700 transition duration-200" />
              </Tooltip>
            </a>
          )}

          <div className="flex flex-col items-center">
            <Avatar
              size={80}
              src={publicPhotoUrl || "https://via.placeholder.com/80"}
              className="border-4 border-gray-300 p-1 mb-3"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-1">{fullName}</h2>
            <p className="text-gray-600 text-sm">
              <FaUserTie className="inline mr-1 text-blue-500" /> {jobTitle}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <FaEnvelope className="inline mr-1 text-blue-500" /> {email}
            </p>
          </div>

          <div className="mt-2 text-gray-700 text-sm space-y-2">
            <p><strong>Experience:</strong> {experience} years</p>
            <p><FaGlobe className="inline mr-1 text-blue-500" /> {timezone}</p>
            <p><strong>Tech:</strong> {teachingMode.join(", ") || "N/A"}</p>
            <p>
              <FaBookOpen className="inline mr-1 text-blue-500" />{" "}
              {courses.length ? courses.map((c) => c.title).join(", ") : "No courses"}
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <Button
              type="primary"
              loading={loadingRequest[email]}
              onClick={(e) => {
                e.stopPropagation();
                showModal(email);
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-1 rounded-md"
            >
              Request Mentor
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <Studentheader />
      <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 shadow-lg">
            🌟 Discover Expert Mentors 🌟
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Connect with experienced mentors from various fields, learn new skills, and enhance your knowledge. Start your learning journey today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {loading ? (
            <div className="col-span-full flex justify-center">
              <Spin size="large" tip="Loading mentors..." />
            </div>
          ) : mentors.length ? (
            mentors.map((mentor) => renderMentorCard(mentor))
          ) : (
            <p className="text-gray-300 col-span-full text-center">No mentors available.</p>
          )}
        </div>

        <ToastContainer />
      </div>

      {/* Modal */}
      <Modal
        title="Send a Request"
        open={isModalOpen}
        onCancel={handleModalCancel}
        onOk={() => form.submit()}
        okText="Send Request"
        okButtonProps={{
          className: "bg-blue-600 hover:bg-blue-700 text-white",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleRequestSubmit}
          className="mt-4"
        >
          <Form.Item
            name="message"
            label="Message to Mentor"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea
              rows={4}
              placeholder="Explain what help you need from this mentor..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MentorCard;
