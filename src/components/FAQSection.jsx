import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Collapse, Spin, Empty, Input, Button } from 'antd';
import {
  QuestionCircleOutlined,
  MailOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Panel } = Collapse;
const { Search } = Input;

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 8;
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/faqs');
        setFaqs(response.data);
        setFilteredFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  useEffect(() => {
    const filtered = faqs.filter(
      (faq) =>
        faq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filtered);
    setCurrentPage(1);
  }, [searchTerm, faqs]);

  const startIndex = (currentPage - 1) * faqsPerPage;
  const currentFaqs = filteredFaqs.slice(startIndex, startIndex + faqsPerPage);

  const splitFaqs = () => {
    const middle = Math.ceil(currentFaqs.length / 2);
    return [currentFaqs.slice(0, middle), currentFaqs.slice(middle)];
  };

  const [leftPageFaqs, rightPageFaqs] = splitFaqs();
  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);

  return (
    <div className="px-4 py-16 bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-orange-300 mb-10 drop-shadow-md tracking-wide"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        
        transition={{ duration: 0.7 }}
      >
        📖 Frequently Asked Questions
      </motion.h2>

      <div className="max-w-4xl mx-auto mb-6">
        <Search
          placeholder="Search by name or question..."
          allowClear
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-md shadow"
        />
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <Button onClick={() => setExpandAll(true)} type="primary" className="!bg-orange-500 !border-none">Expand All</Button>
        <Button onClick={() => setExpandAll(false)} type="default" className="!bg-gray-700 !border-none !text-amber-50">Collapse All</Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      ) : filteredFaqs.length === 0 ? (
        <Empty description="No FAQs available yet" className="text-white" />
      ) : (
        <div className="relative mx-auto max-w-6xl bg-orange-100 shadow-2xl rounded-2xl flex overflow-hidden border-[6px] border-orange-300">
          <div className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-orange-300 shadow-inner z-10" />

          {/* Left Page */}
          <div className="w-1/2 px-6 py-8 bg-orange-50 relative z-0">
            <Collapse
              bordered={false}
              className="bg-transparent space-y-4"
              activeKey={expandAll ? leftPageFaqs.map((_, idx) => `left-${idx}`) : undefined}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <motion.span
                  animate={{ rotate: isActive ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DownOutlined className="text-orange-500" />
                </motion.span>
              )}
            >
              {leftPageFaqs.map((faq, index) => (
                <Panel
                  key={`left-${index}`}
                  header={
                    <div className="flex items-center gap-2 text-orange-800 font-semibold">
                      <QuestionCircleOutlined className="text-orange-500" />
                      {faq.name} asks:
                    </div>
                  }
                  className="bg-white/80 rounded-xl shadow hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-800 font-medium mb-1">Q: {faq.message}</p>
                  {faq.answer ? (
                    <p className="text-green-600 mb-2 font-semibold">A: {faq.answer}</p>
                  ) : (
                    <p className="text-gray-500 italic mb-2">Awaiting answer from admin...</p>
                  )}
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MailOutlined className="text-orange-400" /> {faq.email}
                  </p>
                </Panel>
              ))}
            </Collapse>
          </div>

          {/* Right Page */}
          <div className="w-1/2 px-6 py-8 bg-orange-50 relative z-0 border-l border-orange-200">
            <Collapse
              bordered={false}
              className="bg-transparent space-y-4"
              activeKey={expandAll ? rightPageFaqs.map((_, idx) => `right-${idx}`) : undefined}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <motion.span
                  animate={{ rotate: isActive ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DownOutlined className="text-orange-500" />
                </motion.span>
              )}
            >
              {rightPageFaqs.map((faq, index) => (
                <Panel
                  key={`right-${index}`}
                  header={
                    <div className="flex items-center gap-2 text-orange-800 font-semibold">
                      <QuestionCircleOutlined className="text-orange-500" />
                      {faq.name} asks:
                    </div>
                  }
                  className="bg-white/80 rounded-xl shadow hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-800 font-medium mb-1">Q: {faq.message}</p>
                  {faq.answer ? (
                    <p className="text-green-600 mb-2 font-semibold">A: {faq.answer}</p>
                  ) : (
                    <p className="text-gray-500 italic mb-2">Awaiting answer from admin...</p>
                  )}
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MailOutlined className="text-orange-400" /> {faq.email}
                  </p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center  gap-4 mt-10">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <span className="text-orange-300 font-bold">Page {currentPage} of {totalPages}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default FaqSection;
