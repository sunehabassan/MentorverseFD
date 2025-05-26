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
      <Button onClick={() => setIsStudentRegisterOpen(true)}>Mentor</Button>
      <Button onClick={() => setIsMentorRegisterOpen(true)}>Student</Button>
    </div>
  );

  return (
    <div className=" w-fit  flex items-center gap-2 px-2 py-1">
      {/* Register Button */}
      <Popover placement="bottom" title="Register As" content={registerPopoverContent}>
        <Button className="bg-orange-400 text-white text-xs font-semibold flex items-center gap-1 hover:bg-white hover:text-orange-400 transition">
          <FaRegistered className="text-base" /> Register
        </Button>
      </Popover>

      {/* Divider
      <div className="text-black text-sm">/</div> */}

      {/* Login Button */}
      <Button
        className="bg-orange-400 text-white text-xs font-semibold flex items-center gap-1 hover:bg-white hover:text-orange-400 transition"
        onClick={() => setIsLoginOpen(true)}
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
        title={<h2 className="text-lg font-semibold text-black text-center">Register as Student</h2>}
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
        title={<h2 className="text-lg font-semibold text-black text-center">Register as Mentor</h2>}
      >
        <div className="w-full">
          <App2 />
        </div>
      </Modal>

   <Modal
  open={isLoginOpen}
  onCancel={() => setIsLoginOpen(false)}
  footer={null}
  width={1200}
  centered
  title={
    <h2 className="text-2xl font-bold text-orange-600 text-center tracking-wide py-2">
      Sign In to MentorVerse
    </h2>
  }
  bodyStyle={{ padding: 0 }} // Removes default padding for full control
>
  <div className="bg-gradient-to-r from-slate-800 via-gray-600 to-orange-500 rounded-b-lg text-white">
    <div className="flex flex-col md:flex-row w-full">
      {/* Mentor Login */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
        <h3 className="text-orange-800 font-semibold text-lg mb-4">Mentor Login</h3>
        <div className="w-full max-w-md">
          <Mentorlog isModal={true} />
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-white/40 mx-4" />

      {/* Student Login */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
        <h3 className="text-blue-300 font-semibold text-lg mb-4">Student Login</h3>
        <div className="w-full max-w-md">
          <Studentlog isModal={true} />
        </div>
      </div>
    </div>
  </div>
</Modal>


    </div>
  );
};

export default Button1;
