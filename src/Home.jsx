import Header from './components/Header';
import Footer from './components/Footer';
import Walpaperslider from './components/Walpaperslider';
// import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import LearningMethods from './components/LearningMethods';
import ChatBot from './components/chatbot';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Home = () => {
  // Prevent horizontal scroll on page load
  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    return () => document.body.classList.remove("overflow-x-hidden");
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row font-serif bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 py-8 px-4 sm:px-6 md:px-8 lg:px-10 gap-6 sm:gap-10 max-w-full overflow-x-hidden">
        {/* Left Text */}
        <div className="flex-1 text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Discover your full potential through MentorVerse's expert mentorship.
        </div>

        {/* Right Text and CTA */}
        <div className="flex-1 text-white text-sm sm:text-base">
          <p>
            "Unlock your true potential with MentorVerse — the platform that connects ambitious individuals with experienced mentors. Whether you're a student, professional, or career-changer, get personalized guidance and expert insights to accelerate your growth."
          </p>
          <Link to="/aboutus">
            <button className="text-slate-100 bg-orange-500 px-4 py-2 mt-4 rounded-lg hover:bg-orange-600 transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Other Sections */}
      <div className="overflow-x-hidden">
        <Walpaperslider />
        {/* <BenefitsSection /> */}
        <TestimonialSection />
        <HowItWorks />
        <FAQSection />
        <LearningMethods />
      </div>

      <ChatBot />
      <Footer />
    </>
  );
};

export default Home;
