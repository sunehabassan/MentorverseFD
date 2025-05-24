import React from 'react'
import Mentorheader from '../components/Mentorheader'
import FetchCourses from './FetchCourses'
import { AdvantagesOfMentoring } from './Homepage/Advantages'
import { HowToBecomeMentor } from './Homepage/home'
import { IncomeSources } from './Homepage/Income'
import { WhyChooseMentorverse } from './Homepage/Choose'
import { SuccessStories } from './Homepage/Success'
import Footer from '../components/Footer'

const Homementor = () => {
  return (
    <>
      <Mentorheader />
     <AdvantagesOfMentoring/>
        <FetchCourses />
   
       <HowToBecomeMentor />
      
      <IncomeSources />
      <WhyChooseMentorverse />
      <SuccessStories />
     <Footer/>
    </>
  )
}

export default Homementor