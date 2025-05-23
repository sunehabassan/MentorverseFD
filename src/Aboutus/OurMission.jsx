import { motion } from "framer-motion";
import { useState } from "react";
import Experience from "../assets/experience.png";
import growth from "../assets/growth.png";
import top from "../assets/top.png";
import partners from "../assets/partners.png";

const missionPoints = [
  {
    title: "Experience Through Mentorship",
    desc: "We aim to connect students with experienced mentors who provide guidance, support, encouragement, motivation, and advice to unlock their full potential.",
    icon: Experience
  },
  {
    title: "Personalized Learning Experience",
    desc: "Our platform offers tailored mentorship sessions that cater to individual learning needs and career goals, fostering a path to success.",
    icon: growth
  },
  {
    title: "Accessible and Affordable Growth",
    desc: "We believe that high-quality mentorship should be accessible to everyone, which is why we offer flexible and student-friendly pricing to ensure anyone can benefit.",
    icon: top
  },
  {
    title: "Building a Thriving Community",
    desc: "We are dedicated to building a vibrant community of learners and mentors who inspire each other, collaborate, and drive personal and professional growth together.",
    icon: partners
  }
];

const OurMission = () => {
  const [currentMission, setCurrentMission] = useState(0);

  const handleNext = () => {
    setCurrentMission((prev) => (prev + 1) % missionPoints.length);
  };

  const handlePrevious = () =>
    setCurrentMission(
      (prev) => (prev - 1 + missionPoints.length) % missionPoints.length
    );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-teal-200 text-gray-800 py-12 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

        {/* Mission Icon + Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <img
            src={missionPoints[currentMission].icon}
            alt="icon"
            className="w-10 h-10 object-contain"
          />
          <h3 className="text-xl font-semibold text-black">
            {missionPoints[currentMission].title}
          </h3>
        </motion.div>

        {/* Mission Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg mb-6 text-gray-700"
        >
          {missionPoints[currentMission].desc}
        </motion.p>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrevious}
            className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;
