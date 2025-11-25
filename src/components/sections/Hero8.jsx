import React from "react";

const Hero8 = () => {
  return (
    <>
      <div className="w-full max-w-[1064px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Content Section */}
          <div className="w-full sm:w-[455px]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3  ">
              News & Articles
            </h2>
            <p className="text-base sm:text-lg text-[#3C4959] leading-relaxed max-w-full sm:max-w-[455px]">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>

          {/* Button Section */}
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <button className="w-full sm:w-[150px] h-[50px] bg-blue-700 text-white hover:bg-blue-800 transition-colors rounded-[10px]">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero8;
