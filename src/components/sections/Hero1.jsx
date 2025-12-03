import React from "react";
import teethIcon from "../../assets/teeth 1.png";
import smileIcon from "../../assets/smile 1.png";
import implantIcon from "../../assets/implant 1.png";

const Hero1 = () => {
  const services = [
    {
      title: "Root Canal Treatment",
      icon: teethIcon,
      desc: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
    },
    {
      title: "Cosmetic Dentist",
      icon: smileIcon,
      desc: "Cosmetic dentistry focuses on improving the appearance of your smile.",
    },
    {
      title: "Dental Implants",
      icon: implantIcon,
      desc: "A dental implant is an artificial tooth root placed into your jaw to hold a prosthetic tooth or bridge.",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
      <div className="mx-auto max-w-7xl w-full bg-sky-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center flex flex-col h-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6 bg-sky-400 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full items-center mx-auto flex-shrink-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center justify-center gap-2 mt-auto">
                <a
                  href="#"
                  className="font-medium text-xs sm:text-sm md:text-base leading-[155%] underline text-sky-600 hover:text-sky-700 transition-colors"
                >
                  Learn More
                </a>

                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-600 hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
