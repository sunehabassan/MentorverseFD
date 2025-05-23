import React, { useState } from 'react';

const qaPairs = [
  { question: 'How can I become a mentor on Mentorverse?', answer: 'You can register as a mentor by filling out the mentor profile form and submitting it for review.' },
  { question: 'How do I find a mentor for my course?', answer: 'You can search for mentors based on their expertise and courses they offer through the Mentor Directory.' },
  { question: 'Can I contact mentors directly?', answer: 'Yes, once you register and log in, you can send messages to mentors directly through the platform.' },
  { question: 'How can I track my learning progress?', answer: 'You can track your enrolled courses and progress through your student profile dashboard.' },
  { question: 'What is the process to book a session with a mentor?', answer: 'You can request a session by visiting the mentor’s profile and selecting a course or service they offer.' },
];

function ChatBot() {
  const [chat, setChat] = useState([]);
  const [showBot, setShowBot] = useState(false);

  const handleQuestionClick = (qa) => {
    setChat((prev) => [
      ...prev,
      { type: 'question', text: qa.question },
      { type: 'answer', text: qa.answer },
    ]);
  };

  const handleRemoveChat = () => {
    setShowBot(false);
    setChat([]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showBot ? (
        <button
          className="bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 text-white px-4 py-2 rounded-full shadow"
          onClick={() => setShowBot(true)}
        >
          Chat with us
        </button>
      ) : (
        <div className="w-72 bg-white rounded-xl shadow-lg border p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">MentorVerse Assistant</h3>
            <button onClick={handleRemoveChat} className="text-gray-500 hover:text-black">
              ✕
            </button>
          </div>

          {/* Reduced height from h-64 to h-40 */}
          <div className="h-40 overflow-y-auto border rounded p-2 mb-2 bg-gray-50">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 text-${msg.type === 'question' ? 'right' : 'left'}`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.type === 'question'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold mb-1">Choose a question:</p>
            {qaPairs.map((qa, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(qa)}
                className="block w-full text-left px-3 py-1 mb-1 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded"
              >
                {qa.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
