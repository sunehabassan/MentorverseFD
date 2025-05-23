import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

import Login from './Login.jsx';
import MentorCard from './Student/MentorCard.jsx';
import Home from './Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Student from './Student.jsx';
import Contact from './Contact.jsx';
import Aboutus from './Aboutus.jsx';
import Apitesting from './Apitesting.jsx';
import NotFound from './NotFound.jsx';
import GoogleLogin from './GoogleLogin.jsx';
import RefrshHandler from './RefreshHandler';
import Studentlog from './Login/Studentlog.jsx';
import Mentorlog from './Login/Mentorlog.jsx';
import Courses from './Mentor/Courses.jsx';
import FetchCourses from './Mentor/FetchCourses.jsx';
import Mentorheader from './components/Mentorheader.jsx';
import Homementor from './Mentor/Homementor.jsx';
import Studentheader from './components/Studentheader.jsx';
import Homestu from './Student/Homestu.jsx';
import Mystudents from './Mentor/Mystudents.jsx';
import Walpaperslider from './components/Walpaperslider.jsx';
import Headersec from './components/Headersec.jsx';
import Button1 from './components/Button1.jsx';
import App2 from '../Register2.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import LearningMethods from './components/LearningMethods.jsx';
import MentorProfile from './Mentor/Mentorprofile.jsx';
import VideoCall from './Communication/VideoCall.jsx';
import VoiceCall from './Communication/VoiceCall.jsx';
import EmailCommunication from './Communication/EmailCommunication';
import AdminFaqAnswer from './AdminFaqAnswer.jsx';
import Feedbacks from './Student/Feedbacks.jsx';
import MentorProfileForm from './Mentor/INFO/Wrapper.jsx';
import { StudentProfileForm, StudentProfileView } from './Student/studentProfile.jsx';
import MentorRequests from './Mentor/INFO/getUpdateRequests.jsx';
import Contactstu from './Student/Contactstu.jsx';
import Contactment from './Mentor/Contactment.jsx';
import AdminFaqDashboard from './adminfaq.jsx';
import Feedback from './Mentor/Feedback.jsx';

import ProtectedRoute from './components/ProtectedRoute.jsx';

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider clientId='541035770965-l2a118gl2b1ldkkpaidl18uq66so613t.apps.googleusercontent.com'>
      <BrowserRouter>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/googlelogin" element={<GoogleLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Student />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/apitesting" element={<Apitesting />} />
          <Route path="/VideoCall" element={<VideoCall />} />
          <Route path="/VoiceCall" element={<VoiceCall />} />
          <Route path="/EmailCommunication" element={<EmailCommunication />} />
          <Route path="/AdminFaqAnswer/:id" element={<AdminFaqAnswer />} />
          <Route path="/Studentlog" element={<Studentlog />} />
          <Route path="/Mentorlog" element={<Mentorlog />} />
          <Route path="/Walpaperslider" element={<Walpaperslider />} />
          <Route path='/Headersec' element={<Headersec />} />
          <Route path='/Button1' element={<Button1 />} />
          <Route path='/App2' element={<App2 />} />
          <Route path='/BenefitsSection' element={<BenefitsSection />} />
          <Route path='/FAQSection' element={<FAQSection />} />
          <Route path='/TestimonialSection' element={<TestimonialSection />} />
          <Route path='/HowItWorks' element={<HowItWorks />} />
          <Route path='/LearningMethods' element={<LearningMethods />} />
          <Route path='/AdminFaqDashboard' element={<AdminFaqDashboard />} />
          <Route path='/MentorProfile' element={<MentorProfile />} />

          {/* ✅ Protected Routes */}
          <Route path="/MentorCard" element={
            <ProtectedRoute><MentorCard /></ProtectedRoute>
          } />
          <Route path="/MentorRequests" element={
            <ProtectedRoute><MentorRequests /></ProtectedRoute>
          } />
          <Route path="/MentorProfileForm" element={
            <ProtectedRoute><MentorProfileForm /></ProtectedRoute>
          } />
          <Route path="/Contactstu" element={
            <ProtectedRoute><Contactstu /></ProtectedRoute>
          } />
          <Route path="/Contactment" element={
            <ProtectedRoute><Contactment /></ProtectedRoute>
          } />
          <Route path="/Courses" element={
            <ProtectedRoute><Courses /></ProtectedRoute>
          } />
          <Route path="/Mentorheader" element={
            <ProtectedRoute><Mentorheader /></ProtectedRoute>
          } />
          <Route path="/Homementor" element={
            <ProtectedRoute><Homementor /></ProtectedRoute>
          } />
          <Route path="/FetchCourses" element={
            <ProtectedRoute><FetchCourses /></ProtectedRoute>
          } />
          <Route path="/Studentheader" element={
            <ProtectedRoute><Studentheader /></ProtectedRoute>
          } />
          <Route path="/Homestu" element={
            <ProtectedRoute><Homestu /></ProtectedRoute>
          } />
          <Route path="/Feedbacks" element={
            <ProtectedRoute><Feedbacks /></ProtectedRoute>
          } />
          <Route path="/Feedback" element={
            <ProtectedRoute><Feedback /></ProtectedRoute>
          } />

          {/* Optional: Student Profile Routes (also typically protected) */}
          <Route path="/StudentProfileForm" element={
            <ProtectedRoute>
              <StudentProfileForm token={localStorage.getItem('Token')} />
            </ProtectedRoute>
          } />
          <Route path="/StudentProfileView" element={
            <ProtectedRoute>
              <StudentProfileView token={localStorage.getItem('Token')} />
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
