import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const { TextArea } = Input;

const StepThree = ({ onNext, onPrev }) => {
  return (
    <Form layout="vertical" onFinish={onNext} className="space-y-4" >
      <h2 className="text-xl font-bold text-gray-700 mb-4">Professional & Academic Background</h2>

      <Form.Item label="Current Job Title" name="jobTitle" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Company/Organization" name="company" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Years of Experience" name="experience" rules={[{ required: true }]}>
        <InputNumber className="w-full" min={0} />
      </Form.Item>

      <Form.Item label="Educational Qualifications" name="education" rules={[{ required: true }]}>
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Certifications" name="certifications" rules={[{ required: true }]}>
        <TextArea rows={2} />
      </Form.Item>

      <div className="flex justify-between pt-2">
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" htmlType="submit">Next</Button>
      </div>
    </Form>
  );
};

export default StepThree;
