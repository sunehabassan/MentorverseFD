import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { baseURL } from "/config";
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from '@react-oauth/google';



const App2 = () => {
  const [resData, setResData] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/register2`, values);

      if (response.data.success) {
        message.success('Registration successful!');
        console.log(response.data);
        setResData(response.data.message);
        setTimeout(() => {
          toast('🦄 Wow registered successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }, 400);


        setTimeout(() => {
          navigate('/Studentlog');
        }, 5000);
      }
    }

    catch (error) {
      message.error('Registration failed. Please try again.');
      setResData("Unsuccessful!")
      setTimeout(() => {
        toast('🦄 login unsuccessfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }, 400);
    }
  };

  return (
    <>
  
      <div className='bg-blue-50'>

        <div className="max-w-sm mx-auto p-5 border bg-gradient-to-r from-indigo-100 to-teal-200 
 border-blue-500 rounded-lg transition-transform duration-300 
 shadow-lg m-3  hover:shadow-2xl shadow-blue-500/50 ">
          <h1 className='text-center text-blue-900 font-bold text-2xl  hover:shadow-2xl shadow-black'>Students Register</h1>
          <Form
            name="register"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
            layout="vertical"
          >
            <Form.Item
              label={<span className="text-blue-900 text-l font-bold">Username</span>}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span className="text-blue-900 text-l font-bold" >Email</span>}
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span className="text-blue-900 text-l font-bold">Password</span>}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className='w-full'>
                Sign Up
              </Button>
            </Form.Item>
            <div className="flex items-center space-x-2  mb-5 ml-20">
              <span className='text-center '>Already an existing member?</span> <img
                src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-down-arrow-red-png-image_7263996.png"
                width={35}
                alt="Arrow" className='animate-bounce bg-transparent '
              />
            </div>
            <Form.Item>
              <Button onClick={() => navigate("/Studentlog")} block className="w-full text-black font-bold py-2 px-4 rounded-md hover:border-10"
                color='yellow'
                variant='solid'>
                Sign In
              </Button>
            </Form.Item>
          </Form>
              <GoogleLogin/>
          <div>{resData}</div>
        </div>
        <ToastContainer />
      </div>
   
    </>


  );
};

export default App2;