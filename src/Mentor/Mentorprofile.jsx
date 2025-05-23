import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spin, Button, Tag, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
  EditOutlined,
  IdcardOutlined,
  FileTextOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { baseURL } from "/config";
import MentorHeader from "../components/Mentorheader";

// ✅ Utility to handle both Windows and clean URLs with spaces
const getPublicUrl = (filePath) => {
  if (!filePath) return null;
  if (filePath.startsWith("/Mentorship")) {
    const parts = filePath.split("/");
    const fileName = parts.pop();
    return `${baseURL}/Mentorship/${encodeURIComponent(fileName)}`;
  }
  const fileName = filePath.split("\\").pop();
  return `${baseURL}/Mentorship/${encodeURIComponent(fileName)}`;
};

// ✅ Normalize social URLs
const normalizeUrl = (url) => {
  if (!url) return "#";
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
};

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-2 text-xl font-semibold text-sky-700 mt-8 mb-3">
    {icon}
    <span>{title}</span>
    <div className="flex-1 h-px bg-gradient-to-r from-sky-500 to-orange-500 ml-4"></div>
  </div>
);

const MentorProfile = () => {
  const [mentorInfo, setMentorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const mentorEmail = localStorage.getItem("mentorEmail");
    if (!mentorEmail) {
      message.error("Mentor email not found. Please log in.");
      navigate("/login");
      return;
    }

    const fetchMentorInfo = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/auth/mentor/profile-exists/${mentorEmail}`);
        setMentorInfo(res.data.data);
        localStorage.setItem("mentorId", res.data.data._id);
      } catch (err) {
        console.error(err);
        setError("Failed to load mentor info.");
      } finally {
        setLoading(false);
      }
    };
    fetchMentorInfo();
  }, [navigate]);

  if (loading) return <div className="h-screen flex justify-center items-center"><Spin size="large" /></div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  const profilePhotoUrl = getPublicUrl(mentorInfo.profilePhotoUrl);
  const resumeUrl = getPublicUrl(mentorInfo.resumeUrl);

  return (
    <div >
      <MentorHeader />
      <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500">      
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-8 rounded-3xl backdrop-blur-xl bg-white shadow-2xl"
      >
        {/* Top Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-10 ">
          <motion.img
            src={profilePhotoUrl || "https://via.placeholder.com/200"}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-orange-500 object-cover shadow-xl"
            whileHover={{ scale: 1.05 }}
          />
          <div className="flex-1 space-y-2">
            <h1 className="text-4xl font-bold text-orange-600">{mentorInfo.fullName}</h1>
            <p className="text-gray-700"><MailOutlined /> {mentorInfo.email}</p>
            <p className="text-gray-700"><PhoneOutlined /> {mentorInfo.phone}</p>
            <div className="flex gap-4 mt-3 text-xl">
              {mentorInfo.linkedin && (
                <a href={normalizeUrl(mentorInfo.linkedin)} target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined className="hover:text-blue-600" />
                </a>
              )}
              {mentorInfo.github && (
                <a href={normalizeUrl(mentorInfo.github)} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined className="hover:text-black" />
                </a>
              )}
              {mentorInfo.twitter && (
                <a href={normalizeUrl(mentorInfo.twitter)} target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined className="hover:text-sky-500" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Professional Info */}
        <SectionHeader icon={<UserOutlined />} title="Professional Information" />
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <p><IdcardOutlined /> <strong>Job Title:</strong> {mentorInfo.jobTitle || "N/A"}</p>
          <p><UserOutlined /> <strong>Company:</strong> {mentorInfo.company || "N/A"}</p>
          <p><FileTextOutlined /> <strong>Education:</strong> {mentorInfo.education || "N/A"}</p>
          <p><FileTextOutlined /> <strong>Certifications:</strong> {mentorInfo.certifications || "N/A"}</p>
        </div>

        <hr className="my-8 border-t-2 border-dashed border-sky-300" />

        {/* Experience */}
        <SectionHeader icon={<FileTextOutlined />} title="Experience" />
        <div className="bg-white/80 rounded-xl shadow-md p-6 space-y-2">
          <p><strong>Years of Experience:</strong> {mentorInfo.experience || "N/A"} years</p>
          <p><strong>Mentored Before:</strong> {mentorInfo.mentoredBefore || "N/A"}</p>
          <p><strong>Details:</strong> {mentorInfo.experienceDetails || "No details provided."}</p>
          <p><strong>Motivation:</strong> {mentorInfo.motivation || "Not specified."}</p>
        </div>

        {/* Availability */}
        <SectionHeader icon={<CalendarOutlined />} title="Availability" />
        <div className="bg-white/80 rounded-xl shadow-md p-6 space-y-2">
          <p><CalendarOutlined /> <strong>Dates:</strong> 
            {Array.isArray(mentorInfo.availableDate)
              ? mentorInfo.availableDate.join(" to ")
              : mentorInfo.availableDate || "Not specified"}
          </p>
          <p><ClockCircleOutlined /> <strong>Time:</strong> 
            {Array.isArray(mentorInfo.preferredTime)
              ? mentorInfo.preferredTime.join(" to ")
              : mentorInfo.preferredTime || "Not specified"}
          </p>
          <p><GlobalOutlined /> <strong>Timezone:</strong> {mentorInfo.timezone || "N/A"}</p>
          <div>
            <strong>Teaching Modes:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {mentorInfo.teachingMode?.length > 0
                ? mentorInfo.teachingMode.map((mode, i) => (
                    <Tag color="orange" key={i}>{mode}</Tag>
                  ))
                : "Not specified"}
            </div>
          </div>
        </div>

        {/* Resume */}
        {resumeUrl && (
          <>
            <SectionHeader icon={<FileTextOutlined />} title="Resume" />
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button icon={<FileTextOutlined />} type="default" className="mt-2">
                View Resume
              </Button>
            </a>
          </>
        )}

        {/* Edit Button */}
        <div className="text-right mt-10">
          <Button
            icon={<EditOutlined />}
            type="primary"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-xl shadow-md"
            onClick={() => navigate("/MentorProfileForm")}
          >
            Edit Profile
          </Button>
        </div>
      </motion.div></div>

    </div>
  );
};

export default MentorProfile;
