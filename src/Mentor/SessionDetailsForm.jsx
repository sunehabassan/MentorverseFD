import React from "react";
import { Modal, Form, Input, Button } from "antd";

const SessionDetailsForm = ({ visible, onClose, onSubmit, mode }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values.sessionLink.trim());
    form.resetFields();
  };

  return (
    <Modal
      title={`Enter ${mode === "Email" ? "Mentor Email" : "Google Meet Link"}`}
      open={visible}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      footer={null}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item
          name="sessionLink"
          label={
            mode === "Email"
              ? "Mentor's Email for Contact"
              : "Google Meet Link for Session"
          }
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
            mode === "Email"
              ? {
                  type: "email",
                  message: "Please enter a valid email!",
                }
              : {
                  type: "url",
                  message: "Please enter a valid Google Meet URL!",
                },
          ]}
        >
          <Input
            placeholder={
              mode === "Email"
                ? "mentor@example.com"
                : "https://meet.google.com/abc-defg-hij"
            }
            allowClear
          />
        </Form.Item>

        <Form.Item className="text-right">
          <Button
            type="primary"
            htmlType="submit"
            className="!bg-blue-600 hover:!bg-blue-700"
          >
            Send Session Details
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SessionDetailsForm;
