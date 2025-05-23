import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

// Example Lottie animation URL
const animationData = "https://lottie.host/15ee82eb-6d33-4fb1-b99f-695e262ac9a7/ZPibTX3vE6.lottie";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1>Sorry!! Page Not Found</h1>
      <div className="h-80 w-80 mt-4">
        <Lottie 
          path={animationData}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default NotFound;
