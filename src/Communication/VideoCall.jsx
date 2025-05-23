import React from 'react';
import { VideoCameraOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const VideoCall = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white py-20 px-6 min-h-screen"
    >
      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 p-10 rounded-3xl shadow-lg">
        <div className="flex justify-center mb-6">
          <VideoCameraOutlined className="text-6xl text-orange-400" />
        </div>
        <h2 className="text-4xl font-bold text-center text-orange-300 mb-4">Video Sessions</h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          Engage face-to-face with mentors for an interactive, impactful learning journey.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          
          transition={{ staggerChildren: 0.2 }}
          className="space-y-6 text-gray-200 text-base leading-relaxed"
        >
          <p>
            🎥 Video sessions offer real-time interaction with the power of visual explanation. Ideal for
            complex topics, code reviews, and building human connection.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>👀 Screen sharing, live whiteboarding</li>
            <li>📢 Non-verbal cues for better understanding</li>
            <li>💬 Strong relationship building and instant support</li>
          </ul>
          <p>
            💡 <strong>Example:</strong> A student joins a 1-on-1 Zoom call with a mentor who walks them through a debugging session live while screen sharing.
          </p>
          {/* Video Embed */}
          {/* <div className="mt-10 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/YOUR_EMAIL_VIDEO_ID" // Replace this
              title="Email Support Demo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoCall;
