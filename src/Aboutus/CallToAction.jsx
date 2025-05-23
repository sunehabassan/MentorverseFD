import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const CallToAction = () => {
    const Navigate=useNavigate();
   const handleClick=()=>{
Navigate("/Apitesting");
    }
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-700 text-white py-16 px-6 text-center"
    >
      {/* Title with animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        🏃‍♀️Ready to Get Mentored?
      </motion.h2>

      {/* Description with animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 text-lg"
      >
        Join our growing community of learners and mentors shaping the future.
      </motion.p>

      {/* Button with animation */}
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-white font-semibold"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default CallToAction;
