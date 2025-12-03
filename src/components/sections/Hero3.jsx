import React from "react";
import faceimage from "../../assets/face.png";

const Hero3 = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="mx-auto max-w-7xl w-full bg-gradient-to-r from-blue-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Leave your worries at the door and enjoy a healthier, more precise
              smile
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don't worry about
              anything and book yourself.
            </p>

            <button className="w-full sm:w-auto bg-[#1376F8] text-white hover:bg-blue-700 transition-colors duration-300 rounded-lg px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base font-semibold">
              Book an appointment
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={faceimage}
              alt="Doctor smiling with patient"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-xl sm:rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
