import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const EmailSupport = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white py-20 px-6 min-h-screen"
    >
      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 p-10 rounded-3xl shadow-lg">
        <div className="flex justify-center mb-6">
          <MailOutlined className="text-6xl text-orange-400" />
        </div>
        <h2 className="text-4xl font-bold text-center text-orange-300 mb-4">Email Support</h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          Communicate with mentors at your own pace through structured email guidance.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
        
          transition={{ staggerChildren: 0.2 }}
          className="space-y-6 text-gray-200 text-base leading-relaxed"
        >
          <p>
            ✉️ Email support allows learners to reflect on questions and articulate them clearly.
            Mentors respond with thoughtful, resource-rich answers tailored to the student’s level.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>🕒 Asynchronous: no time constraints</li>
            <li>📖 Responses can be saved and re-read anytime</li>
            <li>🧠 Encourages deep thinking and well-structured discussions</li>
          </ul>
          <p>
            💡 <strong>Example:</strong> A learner emails a mentor with a React bug. The mentor responds with detailed debugging steps, code snippets, and learning resources.
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

export default EmailSupport;
