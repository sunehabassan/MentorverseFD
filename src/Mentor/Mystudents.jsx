import React, { useEffect, useState } from 'react';
import { Table, Card, Input, Spin, message, Typography, Avatar, Tag } from 'antd';
import axios from 'axios';
import { baseURL } from "/config";
import { UserOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Title, Text } = Typography;
const { Search } = Input;

const MyStudents = () => {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseURL}/api/auth/mystudents`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('mentorToken')}`,
        },
      });
      setStudents(res.data.students);
      setFiltered(res.data.students);
      if (filteredList.length === 0) {
        toast.info("No students matched your search.");
      }
      toast.success("Students loaded successfully! 🎓");
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Failed to load students ❌");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSearch = (value) => {
    const filteredList = students.filter((student) =>
      student.name.toLowerCase().includes(value.toLowerCase()) ||
      student.email.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filteredList);
  };

  const columns = [
    {
      title: 'Student',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Avatar size="large" icon={<UserOutlined />} />
          <div>
            <Text className="font-semibold">{record.name}</Text>
            <br />
            <Text type="secondary" className="text-sm">{record.email}</Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Enrolled On',
      dataIndex: 'enrolledDate',
      key: 'enrolledDate',
      render: (date) => (
        <Tag color="orange">{new Date(date).toLocaleDateString()}</Tag>
      ),
      responsive: ['md'],
    },
    {
      title: 'Status',
      key: 'status',
      render: () => <Tag color="green">Active</Tag>,
      responsive: ['md'],
    },
  ];

  return (
    
    <div className="max-w-6xl mx-auto p-4">
      <Card
        className="shadow-lg"
        headStyle={{ backgroundColor: '#f97316' }}
        bodyStyle={{ padding: '1.5rem' }}
        title={<Title level={3} className="text-white m-0">👩‍🎓 My Students</Title>}
      >
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Text className="text-gray-600 text-sm">View the list of students you are currently mentoring.</Text>
          <Search
            placeholder="Search by name or email"
            onSearch={handleSearch}
            allowClear
            className="w-full sm:w-72"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            dataSource={filtered}
            columns={columns}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            className="rounded-md"
          />
        )}
      </Card>
       {/* 🔔 Toast Notifications */}
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
   
    
  );
  
};

export default MyStudents;
