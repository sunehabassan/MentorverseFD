import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { toast } from "react-toastify";

const StepOne = ({ onNext }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fullName = localStorage.getItem("username")
    const email = localStorage.getItem("mentorEmail");
    if (email&&fullName) {
      form.setFieldsValue({fullName})
      form.setFieldsValue({email}); // Auto-fill email
    }
  }, [form]);

  const handleNext = (values) => {
    onNext(values);
    toast.success("✅ Email loaded and validated");
  };
  

  return (
    <Form layout="vertical" form={form} onFinish={handleNext} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Basic Information</h2>

      <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
        <Input disabled/>
      </Form.Item>

      <Form.Item label="Email Address" name="email" rules={[{ required: true }]} >
        <Input disabled />
      </Form.Item>

      <Form.Item label="Phone Number " name="phone" rules={[{ required: true }]} >
        <Input />
      </Form.Item>

      <div className="flex justify-end pt-2">
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default StepOne;
