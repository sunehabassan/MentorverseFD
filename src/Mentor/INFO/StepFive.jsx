import React from "react";
import { Form, Upload, Button } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const StepFive = ({ onNext, onPrev }) => {
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const handleFinish = (values) => {
    const resumeFile = values.resume?.[0]?.originFileObj;
    const profilePhotoFile = values.profilePhoto?.[0]?.originFileObj;

    if (!resumeFile || !profilePhotoFile) {
      return; // or show validation message
    }

    const stepFiveData = {
      resume: resumeFile,
      profilePhoto: profilePhotoFile,
    };

    onNext(stepFiveData);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleFinish}
      className="space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-4">Upload Documents</h2>

      <Form.Item
        label="Upload Resume"
        name="resume"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please upload your resume." }]}
      >
        <Upload beforeUpload={() => false} maxCount={1} accept=".pdf,.doc,.docx">
          <Button icon={<UploadOutlined />}>Upload Resume</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Profile Photo"
        name="profilePhoto"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please upload your profile photo." }]}
      >
        <Upload.Dragger beforeUpload={() => false} maxCount={1} accept="image/*">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Drag or click to upload profile photo</p>
        </Upload.Dragger>
      </Form.Item>

      <div className="flex justify-between pt-2">
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" htmlType="submit">Next</Button>
      </div>
    </Form>
  );
};

export default StepFive;
