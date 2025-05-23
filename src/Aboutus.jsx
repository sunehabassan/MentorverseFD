import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsHero from "../src/Aboutus/AboutUsHero";
import OurMission from "../src/Aboutus/CallToAction";
import TeamGrid from "../src/Aboutus/OurMission";
import WhyChooseUs from "../src/Aboutus/TeamGrid";
import CallToAction from "../src/Aboutus/WhyChooseUs";
const Aboutus = () => {
  return (
    <div>
      <Header/>
      <AboutUsHero />
      <OurMission />
      <TeamGrid />
      <WhyChooseUs />
      <CallToAction />
      <Footer/>
    </div>
  )
}

export default Aboutus