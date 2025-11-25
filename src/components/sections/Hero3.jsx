import React from "react";
import faceimage from '../../assets/face.png';

const Hero3 = () => {

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 ">
      <div 
        className="mx-auto bg-gradient-to-r to-white rounded-3xl max-w-7xl w-[1140px] h-[358px]"
      >
        <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6 md:p-8 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Leave your worries at the door and enjoy a healthier, more precise smile
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We use only the best quality materials on the market in order to provide 
              the best products to our patients, So don't worry about anything and book yourself.
            </p>
            
            <button 
              className="w-full sm:w-auto bg-[#1376F8] text-white hover:bg-blue-800 transition-colors rounded-[10px] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium"
            >
              Book an appointment
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src={faceimage}
              alt="Doctor smiling with patient" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-[10px] shadow-lg border-4 sm:border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;