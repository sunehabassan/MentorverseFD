import React from 'react';
import { Carousel } from 'antd';
import pic1 from '../../src/assets/WallpaperSlider/pic1.jpg';
import pic2 from '../../src/assets/WallpaperSlider/pic2.jpg';
import pic3 from '../../src/assets/WallpaperSlider/pic3.jpg';
import pic4 from '../../src/assets/WallpaperSlider/pic4.jpg';

const Walpaperslider = () => {
  return (
    <div className="w-full m-0 p-0 overflow-hidden">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        dots={false}
        arrows={false}
        effect="fade" // smoother than scroll
        className="!p-0 !m-0"
        pauseOnHover={false}
        speed={1000} // slower, smoother transition
        infinite
      >
        {[pic1, pic2, pic3, pic4].map((pic, index) => (
          <div
            key={index}
            className="h-[450px] w-full m-0 p-0 overflow-hidden flex items-center justify-center"
          >
            <img
              src={pic}
              alt={`Wallpaper ${index + 1}`}
              className="w-full h-full object-cover block m-0 p-0 transition-transform duration-1000 ease-in-out will-change-transform"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Walpaperslider;
