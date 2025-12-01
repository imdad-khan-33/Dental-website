import React from "react";
import heroImage from "../../assets/Mask group.png";
import callicon from "../../assets/Bold/Calling.png";

//import arrowicon from "../../assets/Group 326.png";
import mainimage1 from "../../assets/mainimage1.png";
import mainimage2 from "../../assets/mainimage2.png";
import oldman from "../../assets/oldman.png";

const Hero = () => {
  return (
    <section className="bg-white w-full min-h-screen pt-32 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Get Ready For Your Best Ever
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-400">
                Dental Experience!
              </span>
            </h1>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don't worry about
              anything and book yourself.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Book an appointment button */}
              <a
                href="#book"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-[#1376F8] text-white shadow hover:bg-sky-700 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                Book an appointment
              </a>

              {/* Dental 24H Emergency Button - No BG */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] w-full sm:w-auto">
                {/* Call Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src={callicon} alt="Call icon" className="w-6 h-6" />
                </div>

                {/* Text + Number (Stacked) */}
                <div className="flex flex-col">
                  <span className="text-blue-600 font-medium text-sm sm:text-base leading-tight">
                    Dental 24H Emergency
                  </span>
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm">
                    0900-78601
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-8 ml-0 lg:ml-0 relative">
              <div
                className="bg-white rounded-xl shadow-lg border border-gray-100 relative"
                style={{ width: "374px", height: "117px" }}
              >
                {/* LinkedIn Icon positioned at top right */}
                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 bg-[#0077B5] rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>

                {/* Profile and Content */}
                <div className="flex items-start gap-3 p-4">
                  <img
                    src={oldman}
                    alt="Thomas daniel"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Thomas daniel
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">Sr Dental</p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Top Quality dental treatment done by field experts, Highly
                      Recommended for everyone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
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
              <div className="absolute inset-0 flex items-start justify-start z-30 pt-8 pl-[-350px]">
                <img
                  src={heroImage}
                  alt="Main hero"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services cards */}
      </div>
    </section>
  );
};

export default Hero;
