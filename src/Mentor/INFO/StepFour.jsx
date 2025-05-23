import React from "react";
import { Form, Radio, Input, Button } from "antd";

const { TextArea } = Input;

const StepFour = ({ onNext, onPrev }) => {
  return (
    <Form layout="vertical" onFinish={onNext} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Mentoring Experience</h2>

      <Form.Item label="Have you mentored before?" name="mentoredBefore" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Describe Your Mentoring Experience" name="experienceDetails" rules={[{ required: true }]}>
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Why Do You Want to Be a Mentor?" name="motivation" rules={[{ required: true }]}>
        <TextArea rows={3} />
      </Form.Item>

      <div className="flex justify-between pt-2">
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" htmlType="submit">Next</Button>
      </div>
    </Form>
  );
};

export default StepFour;
