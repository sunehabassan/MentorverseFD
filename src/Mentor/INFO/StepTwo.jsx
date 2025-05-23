import React from "react";
import { Form, Input, TimePicker, Button, Select } from "antd";
import { DatePicker, Space } from 'antd';

const { Option } = Select;

const StepTwo = ({ onNext, onPrev }) => {
  const handleSubmit = (values) => {
    const payload = {
      ...values,
      availableDate: values.availableDate,
      preferredTime: values.preferredTime,
    };
    onNext(payload);
  };
  

  return (
    <Form layout="vertical" onFinish={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Availability & Preferences</h2>

      <Form.Item label="Available Date" name="availableDate" rules={[{ required: true }]}>
        <DatePicker.RangePicker status="error" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Preferred Time" name="preferredTime" rules={[{ required: true }]}>
        <TimePicker.RangePicker status="warning" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Timezone" name="timezone" rules={[{ required: true }]}>
        <Select placeholder="Select your time zone" className="w-full" showSearch optionFilterProp="children">
          <Option value="UTC+00:00">UTC+00:00 — GMT / London</Option>
          <Option value="UTC+01:00">UTC+01:00 — Central European Time (Berlin, Paris)</Option>
          <Option value="UTC+02:00">UTC+02:00 — Eastern European Time (Athens, Cairo)</Option>
          <Option value="UTC+03:00">UTC+03:00 — Arabian Standard Time (Riyadh, Moscow)</Option>
          <Option value="UTC+04:00">UTC+04:00 — UAE Standard Time (Dubai)</Option>
          <Option value="UTC+05:00">UTC+05:00 — Pakistan Standard Time (Karachi)</Option>
          <Option value="UTC+05:30">UTC+05:30 — India Standard Time (Delhi, Mumbai)</Option>
          <Option value="UTC+06:00">UTC+06:00 — Bangladesh Standard Time (Dhaka)</Option>
          <Option value="UTC+07:00">UTC+07:00 — Indochina Time (Bangkok, Hanoi)</Option>
          <Option value="UTC+08:00">UTC+08:00 — China Standard Time (Beijing, Singapore)</Option>
          <Option value="UTC+09:00">UTC+09:00 — Japan Standard Time (Tokyo)</Option>
          <Option value="UTC+10:00">UTC+10:00 — Australian Eastern Time (Sydney)</Option>
          <Option value="UTC+12:00">UTC+12:00 — New Zealand Standard Time (Wellington)</Option>
          <Option value="UTC-03:00">UTC-03:00 — Argentina Standard Time (Buenos Aires)</Option>
          <Option value="UTC-05:00">UTC-05:00 — Eastern Standard Time (New York, Toronto)</Option>
          <Option value="UTC-06:00">UTC-06:00 — Central Standard Time (Chicago, Mexico City)</Option>
          <Option value="UTC-07:00">UTC-07:00 — Mountain Standard Time (Denver)</Option>
          <Option value="UTC-08:00">UTC-08:00 — Pacific Standard Time (Los Angeles)</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Preferred Teaching Mode" name="teachingMode" rules={[{ required: true }]}>
        <Select mode="multiple" placeholder="Select preferred communication mode(s)" className="w-full">
          <Option value="video">Video Call</Option>
          <Option value="voice">Voice Call</Option>
          <Option value="email">Email</Option>
        </Select>
      </Form.Item>

      <div className="flex justify-between pt-2">
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" htmlType="submit">Next</Button>
      </div>
    </Form>
  );
};

export default StepTwo;
