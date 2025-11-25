import React from "react";
import img22 from "../../assets/Rectangle 633.png";
import img33 from "../../assets/think.png";

const Hero2 = () => {
  return (
    <section>
      {/* ==================== HERO SECTION (No BG) ==================== */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-7xl bg-white">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* LEFT: Text + Input */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              We're Welcoming New Patients And Can't Wait To Meet You.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-md">
              Best materials, expert care — book your smile today!
            </p>

            {/* Responsive Phone Input */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full h-11 pl-10 pr-20 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#1376F8] text-white text-xs sm:text-sm px-3 h-9 rounded-md hover:bg-blue-600 transition-colors font-medium">
                Submit
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src={img22}
              alt="Doctor with patient"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* ==================== FEATURES SECTION (No BG) ==================== */}
      <div className="py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          {/* Removed bg-[#E6F6FE] and shadow for clean white look */}
          <div className="p-5 sm:p-6 md:p-8 bg-[#E6F6FE] rounded-lg h-[400px]">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* LEFT: Image */}
              <div className="w-full md:w-1/2 flex justify-center">    
                <img
                  src={img33}
                  alt="Dental treatment"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto max-h-56 sm:max-h-64 md:max-h-80 rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* RIGHT: Content */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Smile For All Your Dental Treatments?
                </h3>

                <div className="space-y-2 mb-5 w-full max-w-md">
                  {[
                    "Top quality dental team",
                    "State of the art dental services",
                    "Discount on all dental treatment",
                    "Enrollment is quick and easy",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full sm:w-auto bg-[#1376F8] text-white px-5 py-2.5 rounded-lg text-sm sm:text-base hover:bg-blue-600 transition-colors font-medium">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;