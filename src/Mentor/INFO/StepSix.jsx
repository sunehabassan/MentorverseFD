import React from "react";
import { Form, Input, Button } from "antd";

const StepSix = ({ onNext, onPrev }) => {
  return (
    <Form layout="vertical" onFinish={onNext} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Social Media & Online Profiles</h2>

      <Form.Item label="LinkedIn" name="linkedin">
        <Input placeholder="https://linkedin.com/in/yourname" rules={[{ required: true }]}/>
      </Form.Item>

      <Form.Item label="GitHub" name="github">
        <Input placeholder="https://github.com/username" rules={[{ required: true }]}/>
      </Form.Item>

      <Form.Item label="Twitter" name="twitter">
        <Input placeholder="https://twitter.com/yourhandle" />
      </Form.Item>

      <div className="flex justify-between pt-2">
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" htmlType="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default StepSix;
