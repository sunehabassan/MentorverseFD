import { motion } from "framer-motion";

const features = [
  { title: "Verified Mentors", desc: "Each mentor is handpicked and verified." },
  { title: "Flexible Scheduling", desc: "Book sessions based on your convenience." },
  { title: "Affordable Pricing", desc: "High-quality mentorship at student-friendly rates." },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-orange-100 py-12 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-10 text-orange-800">🤔Why Choose Us?</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-orange-700">{feat.title}</h3>
            <p className="text-gray-700">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
