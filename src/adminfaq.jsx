import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminFaqDashboard = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        // ✅ FIXED: Correct route to get ALL FAQs (answered or not)
        const res = await axios.get("http://localhost:3000/api/auth/faqs/all");
        setFaqs(res.data);
      } catch (err) {
        console.error("Error fetching all FAQs", err);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Admin FAQ Dashboard</h2>

      {faqs.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="w-full border-collapse border border-orange-400">
          <thead>
            <tr className="bg-orange-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Answered?</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq) => (
              <tr key={faq._id} className="hover:bg-orange-50">
                <td className="p-2 border">{faq.name}</td>
                <td className="p-2 border">{faq.email}</td>
                <td className="p-2 border">{faq.message}</td>
                <td className="p-2 border">{faq.answer ? "✅ Yes" : "❌ No"}</td>
                <td className="p-2 border">
                  <Link
                    to={`/AdminFaqAnswer/${faq._id}`}
                    className="text-white bg-orange-500 px-3 py-1 rounded hover:bg-orange-600"
                  >
                    Answer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminFaqDashboard;
