//HomePage, Chitra Savaj, 301384748, 24/09/2024
import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../assets/istockphoto-1337683229-612x612.jpg";

const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[87%] items-center justify-center pt-20">
          <div className="hidden lg:block"></div>
          <div className="text-center space-y-3">
            <p className="text-gray-500 text-2xl">Hello I'm</p>
            <h1 className="text-4xl font-bold text-gray-700">Chitra Savaj</h1>
            <p className="font-mono text-lg">Junior AI Engineer</p>
            <div className="flex gap-1 justify-center py-3"></div>
            <div className="flex justify-center items-center text-4xl mt-4 text-[#ff7a57] space-x-3">
              <a href="https://www.linkedin.com/in/chitrasavaj/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="border border-[#ff7a57] rounded-full p-2" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082273081505&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="border border-[#ff7a57] rounded-full p-2" />
              </a>
              <a href="https://www.instagram.com/savagesavaj?igsh=YzUyM2NtN3l3MjJs" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="border border-[#ff7a57] rounded-full p-2" />
              </a>
              <a href="https://github.com/ChitraSavaj" target="" rel="">
                <FaGithub className="border border-[#ff7a57] rounded-full p-2" />
              </a>
            </div>
          </div>
          {/* Image Section with Round Border */}
          <div className="text-center flex items-center justify-center">
            <img 
              src={img} 
              alt="Chitra Savaj" 
              className="w-70 h-auto rounded-full border-4 border-[#ff7a57]" 
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative"></div>
          <div className="w-full absolute left-0 right-0 border-b border-gray-300"></div>
          <div className="flex shadow-lg bg-white z-50 px-10 py-4 rounded-full gap-4">
            <p className="flex flex-col text-center text-base sm:text-xl font-bold text-gray-700">
              AI Program{" "}
              <span className="text-xs sm:text-base font-normal">
                Centennial College
              </span>
            </p>
            <p className="flex flex-col text-center px-4 border-x text-base sm:text-xl font-bold text-gray-700">
              Student{" "}
              <span className="text-xs sm:text-base font-normal">
                Developer
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
