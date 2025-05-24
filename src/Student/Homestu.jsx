import React from "react";
import Studentheader from "../components/Studentheader";
import CallToAction from "./Homepage/CallToAction";
import LearningOpportunities from "./Homepage/LearningOpportunities";
import PopularCourses from "./Homepage/PopularCourses";
import Walpaperslider from "./Homepage/sllide";
import AdvantagesCards from "./Homepage/AdvantagesCards";
import Footer from "../components/Footer";

const Homestu = () => {
  return (
    <>
      <Studentheader />
      <Walpaperslider>
        <CallToAction />
      </Walpaperslider>
      <PopularCourses />
      <LearningOpportunities />
      <AdvantagesCards />
      <Footer/>
    </>
  );
};

export default Homestu;
