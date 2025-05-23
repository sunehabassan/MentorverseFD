import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, List, Spin, Empty, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Mentorheader from "../../components/Mentorheader";
import {
  MailOutlined,
  MessageOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SessionDetailsForm from "../SessionDetailsForm";



const MentorRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [sessionModal, setSessionModal] = useState({ visible: false, request: null });
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  const mentorEmail = localStorage.getItem("mentorEmail");
  const token = localStorage.getItem("mentorToken");

  const fetchRequests = async () => {
    if (!mentorEmail || !token) {
      toast.error("Mentor not logged in! Redirecting to login...", {
        icon: "⚠️",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/auth/requests?mentorEmail=${mentorEmail}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRequests(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      toast.error("Failed to fetch requests. Retrying...", {
        icon: "🔄",
        transition: Bounce,
      });
      setTimeout(fetchRequests, 3000);
    } finally {
      setLoading(false);
    }
  };
const handleSessionSubmit = async (sessionLink) => {
  try {
    await axios.post(
      "http://localhost:3000/api/auth/send-session-details",
      {
        requestId: sessionModal.request._id,
        sessionLink,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    toast.success("Session details sent to student! ✅", { transition: Bounce });
    setSessionModal({ visible: false, request: null });
    fetchRequests();
  } catch (error) {
    console.error(error);
    toast.error("Failed to send session details.");
  }
};

  const updateRequestStatus = async (requestId, status) => {
    if (!token) {
      toast.error("Mentor not logged in!");
      return;
    }

    setUpdating((prev) => ({ ...prev, [requestId]: true }));

    try {
      await axios.put(
        "http://localhost:3000/api/auth/update-request",
        { requestId, status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(`Request ${status} successfully!`, {
        icon: status === "accepted" ? "✅" : "❌",
        transition: Bounce,
      });
      fetchRequests();
    } catch (error) {
      toast.error("Failed to update request status.", {
        icon: "⚠️",
        transition: Bounce,
      });
    } finally {
      setUpdating((prev) => ({ ...prev, [requestId]: false }));
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const paginatedRequests = requests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const renderRequest = (request) => (
    <motion.div
      key={request._id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      <List.Item className="!bg-pink-100  !p-6  !shadow-lg !mb-4 !flex !flex-col sm:!flex-row sm:!justify-between sm:!items-center !gap-4">
        <div className="!text-black  !font-bold !space-y-2">
          <h3 className="!text-pink-600 !font-bold !text-xl !flex !items-center !gap-2">
            <UserOutlined /> {request.studentName || request.studentId?.username || "Unknown Student"}
          </h3>
          <p className="!flex !items-center !gap-2">
            <MailOutlined className="!text-blue-400" />
            {request.studentEmail}
          </p>
          <p className="!flex !items-center !gap-2">
            <VideoCameraOutlined className="!text-purple-400" />
            {request.learningMode || "Not specified"}
          </p>
          <p className="!flex !items-center !gap-2">
            <MessageOutlined className="!text-green-400" />
            {request.message || "No message provided"}
          </p>
        </div>

        <div className="!flex !gap-2">
          {request.status === "pending" ? (
            <>
              <Button
                type="primary"
                className="!bg-green-500 !text-white hover:!bg-green-600 !transition"
                loading={updating[request._id]}
                onClick={() => updateRequestStatus(request._id, "accepted")}
              >
                Accept
              </Button>
              <Button
                danger
                className="!bg-red-500 !text-white hover:!bg-red-600 !transition"
                loading={updating[request._id]}
                onClick={() => updateRequestStatus(request._id, "rejected")}
              >
                Reject
              </Button>
            </>
          ) : (
            <Button
              className={`${
                request.status === "accepted"
                  ? "!bg-green-500 hover:!bg-green-600"
                  : "!bg-red-500 hover:!bg-red-600"
              } !text-white !transition !duration-300 !transform hover:!scale-105`}
              onClick={() => {
  if (request.status === "accepted") {
    setSessionModal({ visible: true, request });
  }
}}
            >
              {request.status === "accepted" ? "Start Course" : "Rejected"}
            </Button>
          )}
        </div>
      </List.Item>
    </motion.div>
  );

  return (
    <>
      <Mentorheader />
      <div className="!p-6 !bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 !min-h-screen">
        <h1 className="!text-yellow-500 !text-3xl !font-extrabold !mb-6 !text-center">
          📨 Mentorship Requests
        </h1>

        {loading ? (
          <div className="!flex !justify-center !items-center !h-64">
            <Spin size="large" />
          </div>
        ) : requests.length > 0 ? (
          <>
            <AnimatePresence>
              <List
                dataSource={paginatedRequests}
                renderItem={renderRequest}
                className="!bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500"
              />
            </AnimatePresence>
            <div className="!flex !justify-center !mt-6">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={requests.length}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false}
                className="!text-white"
              />
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="!flex !justify-center !items-center !h-64"
          >
            <Empty
              description={
                <span className="!text-yellow-500">No requests available.</span>
              }
            />
          </motion.div>
        )}

        <ToastContainer />
        <SessionDetailsForm
  visible={sessionModal.visible}
  mode={sessionModal.request?.learningMode}
  onClose={() => setSessionModal({ visible: false, request: null })}
  onSubmit={handleSessionSubmit}
/>
      </div>
    </>
  );
};

export default MentorRequests;
