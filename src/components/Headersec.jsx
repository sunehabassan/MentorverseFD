import { Link } from 'react-router-dom';

import React from 'react'

const Headersec = () => {
  return (
    <div className='flex flex-auto font-serif  bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500 '>
        <div className='w-[2000px] px-10 pr-29  leading-14 text-3xl'>
        Discover your full potential through MentorVerse's expert mentorship.
        </div>
        <div className=' pl-5 pr-5'>
        <p className='text-xs'>"Unlock your true potential with MentorVerse — the platform that connects ambitious individuals with experienced mentors. Whether you're a student, professional, or career-changer, get personalized guidance and expert insights to accelerate your growth."</p>
        <Link to="/Aboutus"><button className='text-slate-100 bg-amber-600 px-1 py-0.5 mt-2'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default Headersec