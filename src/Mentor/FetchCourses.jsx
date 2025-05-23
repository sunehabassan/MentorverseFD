import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from "/config";
import { Typography,Button, Popconfirm  ,message } from 'antd';

const { Title } = Typography;

const FetchCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsModalVisible(true);
  };
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/auth/fetchCourse`);
      setCourses(response.data.data); // Assuming response shape is { data: [...] }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/auth/deleteCourse/${id}`);
      message.success("Course deleted successfully");
      setCourses(prev => prev.filter(course => course._id !== id));
    } catch (error) {
      console.error("Failed to delete course:", error);
      message.error("Failed to delete course");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
   
    <div className="min-h-screen px-6 py-12 bg-slate-900 text-white">
      <Title className="text-center !text-orange-500">Available Courses by Mentors</Title>

      {loading ? (
        <p className="text-center text-white mt-10">Loading...</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course._id}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border border-orange-400 hover:shadow-orange-500 transition duration-300"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-2">{course.title}</h3>
              <p className="text-sm mb-1">
                <span className="font-semibold text-orange-200">Mentor:</span> {course.mentorName}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold text-orange-200">Category:</span> {course.category}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold text-orange-200">Duration:</span> {course.duration}
              </p>
              
              
              <p className="text-sm text-slate-300 mt-2">{course.description}</p>
              <Popconfirm
              title="Are you sure to delete this course?"
              onConfirm={() => handleDelete(course._id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger type="primary" className="mt-4 w-full">
                Delete Course
              </Button>
            </Popconfirm>
            <Button type="default" className="mt-2 w-full" onClick={() => handleEdit(course)}>
  Edit Course
</Button>
            </div>
            
          ))}
          
        </div>
      )}
      
    </div>
  );
};

export default FetchCourses;
