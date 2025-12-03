import React, { useState } from "react";
import heroImage from "../../assets/Mask group.png";
import callicon from "../../assets/Bold/Calling.png";
import mainimage1 from "../../assets/mainimage1.png";
import mainimage2 from "../../assets/mainimage2.png";
import oldman from "../../assets/oldman.png";
import AppointmentModal from "./AppointmentModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-white w-full min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Get Ready For Your Best Ever
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-400">
                Dental Experience!
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don't worry about
              anything and book yourself.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              {/* Book an appointment button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 rounded-lg sm:rounded-[10px] bg-[#1376F8] text-white shadow hover:bg-sky-700 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                Book an appointment
              </button>

              {/* Dental 24H Emergency Button */}
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg sm:rounded-[10px] w-full sm:w-auto">
                {/* Call Icon */}
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center">
                  <img
                    src={callicon}
                    alt="Call icon"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                  />
                </div>

                {/* Text + Number */}
                <div className="flex flex-col min-w-0">
                  <span className="text-blue-600 font-medium text-xs sm:text-sm md:text-base leading-tight">
                    Dental 24H Emergency
                  </span>
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm">
                    0900-78601
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-8 sm:mt-10 relative">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 relative w-full max-w-sm">
                {/* LinkedIn Icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-5 h-5 bg-[#0077B5] rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>

                {/* Profile and Content */}
                <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 md:p-5">
                  <img
                    src={oldman}
                    alt="Thomas daniel"
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 truncate">
                      Thomas daniel
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">Sr Dental</p>
                    <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">
                      Top Quality dental treatment done by field experts, Highly
                      Recommended for everyone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - IMAGES */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Background circle - mainimage2 */}
              <img
                src={mainimage2}
                alt="Background circle"
                className="w-full h-auto relative z-10"
              />

              {/* Middle decorative circle - mainimage1 */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <img
                  src={mainimage1}
                  alt="Decorative circle"
                  className="w-4/5 h-auto"
                />
              </div>

              {/* Main hero image on top */}
              <div className="absolute inset-0 flex items-start justify-start z-30 pt-4 sm:pt-6 md:pt-8">
                <img
                  src={heroImage}
                  alt="Main hero"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
};

export default Hero;
