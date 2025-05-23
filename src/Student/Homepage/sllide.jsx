import React from "react";
import { Carousel } from "antd";
import pic1 from "../../assets/students.jpg";
import pic2 from "../../assets/stud.jpg";
import pic3 from "../../assets/student.jpg";

const Walpaperslider = ({ children }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Slider */}
      <Carousel autoplay autoplaySpeed={3000} arrows>
        <div className="h-full w-full">
          <img src={pic1} alt="Wallpaper 1" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="h-full w-full">
          <img src={pic2} alt="Wallpaper 2" className="w-full h-full object-cover opacity-50 " />
        </div>
        <div className="h-full w-full">
          <img src={pic3} alt="Wallpaper 3" className="w-full h-full object-cover opacity-50" />
        </div>
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        {children}
      </div>
    </div>
  );
};

export default Walpaperslider;
