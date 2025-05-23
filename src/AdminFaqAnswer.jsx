import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AdminFaqAnswer = () => {
  const { id } = useParams(); // Get ID from route
  const [faqData, setFaqData] = useState(null);
  const [answer, setAnswer] = useState("");

  // Fetch specific FAQ by ID
  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/auth/faqs/${id}`);
        setFaqData(res.data);
        setAnswer(res.data.answer || "");
      } catch (error) {
        console.error("Error fetching FAQ:", error);
        toast.error("Failed to load FAQ data");
      }
    };

    if (id) {
      fetchFaq();
    }
  }, [id]);

  const handleAnswerChange = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/auth/faqs/${id}`, { answer });

      if (response.data.success) {
        toast.success("✅ Answer updated successfully!");
      } else {
        toast.error("❌ Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("❌ Failed to update answer");
    }
  };

  if (!faqData) {
    return <div className="text-center mt-10 text-orange-500">Loading FAQ...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-4 border border-orange-500">
      <h2 className="text-2xl font-bold text-orange-600">Respond to FAQ</h2>

      <p><strong className="text-gray-700">Name:</strong> {faqData.name}</p>
      <p><strong className="text-gray-700">Email:</strong> {faqData.email}</p>
      <p><strong className="text-gray-700">Question:</strong> {faqData.message}</p>

      <label className="block mt-4 text-gray-700 font-semibold">Answer:</label>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows="4"
        className="w-full border p-2 rounded"
        placeholder="Type your response here..."
      />

      <button
        onClick={handleAnswerChange}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Update Answer
      </button>
      <ToastContainer/>
    </div>
  );
};

export default AdminFaqAnswer;
