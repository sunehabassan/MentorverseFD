import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "/config";
import pic1 from "../../../src/assets/name.jpg";
import pic2 from "../../../src/assets/timeavail.jpg";
import pic3 from "../../../src/assets/degree.png";
import pic4 from "../../../src/assets/experience.jpg";
import pic5 from "../../../src/assets/documents.jpg";
import pic6 from "../../../src/assets/socialmedia.jpg";
import Mentorheader from "../../components/Mentorheader";

const steps = [
  { id: 1, component: StepOne, image: pic1 },
  { id: 2, component: StepTwo, image: pic2 },
  { id: 3, component: StepThree, image: pic3 },
  { id: 4, component: StepFour, image: pic4 },
  { id: 5, component: StepFive, image: pic5 },
  { id: 6, component: StepSix, image: pic6 },
];

const MentorProfileForm = () => {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const CurrentStep = steps[step].component;
  const currentImage = steps[step].image;

  const next = (stepData) => {
    setFormState((prev) => ({
      ...prev,
      ...stepData,
    }));
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleFinalSubmit = async (stepData) => {
    const finalData = { ...formState, ...stepData };
    const formDataToSend = new FormData();

    for (const key in finalData) {
      if (finalData[key] instanceof File) {
        formDataToSend.append(key, finalData[key]);
      } else if (Array.isArray(finalData[key])) {
        formDataToSend.append(key, JSON.stringify(finalData[key]));
      } else {
        formDataToSend.append(key, finalData[key]);
      }
    }

    try {
      await axios.post(`${baseURL}/api/auth/mentor`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Mentor profile submitted!", {
        autoClose: 2000,
        theme: "light",
        transition: Bounce,
      });

      setFormState({});
      navigate("/Mentorheader");

    } catch (err) {
      toast.error(
        "Submission failed: " + (err?.response?.data?.message || err.message),
        {
          autoClose: 2000,
          theme: "light",
          transition: Bounce,
        }
      );
    }
  };

  return (
    <>
      <Mentorheader />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-600 to-orange-500">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="col-span-1"
            >
              <CurrentStep
                onNext={step === steps.length - 1 ? handleFinalSubmit : next}
                onPrev={prev}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${step}`}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="col-span-1 hidden md:flex items-center justify-center"
            >
              <img
                src={currentImage}
                alt={`Step ${step + 1}`}
                className="w-80 h-auto rounded-lg shadow"
              />
            </motion.div>
          </AnimatePresence>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default MentorProfileForm;
