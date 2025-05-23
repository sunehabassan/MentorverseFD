import React, { useEffect } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import MentorHeader from '../components/Mentorheader';

const Feedbacks = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      form.setFieldsValue({ name: storedName });
    }
  }, [form]);

  const onFinish = async (values) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/testimonial', values);
      if (res.data.success) {
        toast.success("✅ Testimonial submitted!");
        navigate("/home");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.warning("⚠️ You have already submitted this testimonial.");
      } else {
        toast.error("❌ Failed to submit testimonial.");
        console.error(error);
      }
    }
  };

  return (
    <>
      <MentorHeader />
      <div className='bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500'> <div className="max-w-lg mx-auto  p-6 border rounded bg-white shadow">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Leave a Testimonial</h2>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please select a role!' }]}
          >
            <Radio.Group>
              <Radio value="Mentor">Mentor</Radio>
              <Radio value="Student">Student</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Feedback" name="feedback" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="bg-orange-500">Submit</Button>
        </Form>
      </div>
      <ToastContainer /></div>
     
    </>
  );
};

export default Feedbacks;
