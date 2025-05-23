import { motion } from "framer-motion";
import sunehaImage from "../assets/kaka.jpeg";

const teamMembers = [
  {
    name: "Suneha",
    role: "Founder & Full Stack Developer",
    image: sunehaImage,
    bio: "Engineering student passionate about building impactful web applications. Created this mentorship platform to help students grow faster through guidance.",
    linkedin: "https://linkedin.com/in/amit-sharma",
    github: "https://github.com/amit-sharma",
  },
];

const TeamGrid = () => {
  return (
    <section className="bg-teal-600 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Meet the Team</h2>
        <div className="grid gap-10 grid-cols-1">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-teal-400"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-teal-700">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-lg"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-black text-lg"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;

