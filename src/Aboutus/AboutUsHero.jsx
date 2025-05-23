import { motion } from "framer-motion";

const AboutUsHero = () => {
  return (
    <section className="bg-slate-200 py-20 px-6 text-center">
      {/* "Mentorverse" with one-time bounce */}
      <motion.h1
        initial={{ y: 0 }}
        whileInView={{ y: [0, -20, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-5xl font-extrabold text-teal-700 mb-4"
      >
        Mentorverse
      </motion.h1>

      {/* Subtext with normal fade-in slide-up */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl text-gray-700 max-w-2xl mx-auto"
      >
        Empowering students through personalized mentorship. Join us and explore growth through guidance!
      </motion.p>
    </section>
  );
};

export default AboutUsHero;
