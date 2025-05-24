
import Header from './components/Header';
import Footer from './components/Footer'
import Walpaperslider from './components/Walpaperslider';
import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import LearningMethods from './components/LearningMethods';
import ChatBot from './components/chatbot';
const Home = () => {


  return (
    <>
      <Header />
      <Walpaperslider />
      <BenefitsSection />
      <TestimonialSection />
      <HowItWorks />
      <FAQSection />
      <LearningMethods />
      <ChatBot />
      <Footer />
    </>
  );
};

export default Home;
