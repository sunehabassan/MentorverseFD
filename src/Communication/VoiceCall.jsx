import React from 'react';
import { PhoneOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const VoiceCall = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-800 via-gray-600 to-orange-500 text-white py-20 px-6 min-h-screen"
    >
      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 p-10 rounded-3xl shadow-lg">
        <div className="flex justify-center mb-6">
          <PhoneOutlined className="text-6xl text-orange-400" />
        </div>
        <h2 className="text-4xl font-bold text-center text-orange-300 mb-4">Voice Calls</h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          Have real-time conversations with mentors for instant, flexible learning.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
         
          transition={{ staggerChildren: 0.2 }}
          className="space-y-6 text-gray-200 text-base leading-relaxed"
        >
          <p>
            📞 Voice calls help students engage instantly with mentors, solving doubts on the fly.
            Perfect for quick feedback, brainstorming, or discussing ideas live.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>💬 Natural conversation flow</li>
            <li>⏱ Time-efficient for real-time help</li>
            <li>🎯 Effective for verbal learners and live clarification</li>
          </ul>
          <p>
            💡 <strong>Example:</strong> A student calls their mentor to discuss project architecture. The mentor explains pros and cons of each stack over a 30-minute call.
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

export default VoiceCall;
