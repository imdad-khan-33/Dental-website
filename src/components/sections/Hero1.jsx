import React from "react";
import teethIcon from "../../assets/teeth 1.png";
import smileIcon from "../../assets/smile 1.png";
import implantIcon from "../../assets/implant 1.png";
const Hero1 = () => {
  return (
    <div className="-mt-8 bg-sky-50 rounded-2xl p-4 sm:p-6 md:p-8 w-[1280px] h-[400px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
        {[
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
        ].map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
          >
            <div className="flex justify-center mb-4 bg-sky-400 w-20 h-20 rounded-full items-center mx-auto">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {service.desc}
            </p>

            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="cursor-pointer font-['General_Sans'] font-medium text-base leading-[155%] tracking-[0.015em] underline text-sky-600 hover:text-sky-700"
              >
                Learn More
              </a>

              <svg
                className="w-5 h-5 text-sky-600 cursor-pointer hover:translate-x-1 transition-transform"
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
  );
};

export default Hero1;
