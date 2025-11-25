import React from "react";
import heroimage5 from "../../assets/video.png";

const Hero5 = () => {
  return (
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Image + Button Container */}
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="w-full max-w-4xl mx-auto mb-6">
          <img
            src={heroimage5}
            alt="Video thumbnail"
            className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
          />
        </div>

        {/* Button BELOW the image, centered */}
        <button className="bg-[#1376F8] text-white px-6 py-3 rounded-[10px] hover:bg-blue-600 transition-colors font-medium text-sm sm:text-base whitespace-nowrap shadow-md">
          Watch Playlist
        </button>
      </div>
    </div>
  );
};

export default Hero5;