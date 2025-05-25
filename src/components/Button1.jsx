import React, { useState } from 'react';
import { Button, Modal, Popover } from 'antd';
import { RiLoginCircleFill } from 'react-icons/ri';
import { FaRegistered } from 'react-icons/fa';
import App from '../Apitesting';         // Student Register Component
import App2 from '../../Register2';      // Mentor Register Component
import Mentorlog from '../Login/Mentorlog';
import Studentlog from '../Login/Studentlog';

const Button1 = () => {
  const [isStudentRegisterOpen, setIsStudentRegisterOpen] = useState(false);
  const [isMentorRegisterOpen, setIsMentorRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const registerPopoverContent = (
    <div className="flex flex-col gap-2">
      <Button
        className="!bg-gradient-to-r !from-orange-400 !to-orange-600 !text-white !font-semibold !rounded-lg !shadow-md hover:!bg-orange-500 !transition-all"
        onClick={() => setIsMentorRegisterOpen(true)}
      >
        Mentor
      </Button>
      <Button
        className="!bg-gradient-to-r !from-orange-400 !to-orange-600 !text-white !font-semibold !rounded-lg !shadow-md hover:!bg-orange-500 !transition-all"
        onClick={() => setIsStudentRegisterOpen(true)}
      >
        Student
      </Button>
    </div>
  );

  return (
    <div className="w-fit flex items-center gap-3 px-2 py-1">
      {/* Register Button */}
      <Popover placement="bottom" title="Register As" content={registerPopoverContent}>
        <Button className="!bg-gradient-to-r !from-orange-500 !to-orange-600 !text-white !text-sm !font-bold !px-4 !py-1.5 !rounded-xl !shadow-lg flex items-center gap-2 hover:!scale-105 hover:!shadow-xl transition-transform duration-300">
          <FaRegistered className="text-base" /> Register
        </Button>
      </Popover>

      {/* Login Button */}
      <Button
        onClick={() => setIsLoginOpen(true)}
        className="!bg-gradient-to-r !from-gray-700 !to-gray-900 !text-white !text-sm !font-bold !px-4 !py-1.5 !rounded-xl !shadow-lg flex items-center gap-2 hover:!scale-105 hover:!shadow-xl transition-transform duration-300"
      >
        <RiLoginCircleFill className="text-base" />
        Sign In
      </Button>

      {/* Student Register Modal */}
      <Modal
        open={isStudentRegisterOpen}
        onCancel={() => setIsStudentRegisterOpen(false)}
        footer={null}
        width={1000}
        title={<h2 className="text-xl font-semibold text-orange-600 text-center">Register as Student</h2>}
      >
        <div className="w-full">
          <App />
        </div>
      </Modal>

      {/* Mentor Register Modal */}
      <Modal
        open={isMentorRegisterOpen}
        onCancel={() => setIsMentorRegisterOpen(false)}
        footer={null}
        width={1000}
        title={<h2 className="text-xl font-semibold text-orange-600 text-center">Register as Mentor</h2>}
      >
        <div className="w-full">
          <App2 />
        </div>
      </Modal>

      {/* Login Modal */}
      <Modal
        open={isLoginOpen}
        onCancel={() => setIsLoginOpen(false)}
        footer={null}
        width={900}
        title={<h2 className="text-xl font-bold text-orange-600 text-center">Sign In to MentorVerse</h2>}
      >
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Mentorlog />
          </div>
          <div className="hidden md:block w-px bg-gray-300" />
          <div className="w-full md:w-1/2">
            <Studentlog />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Button1;
