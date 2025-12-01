import React, { useState } from "react";
import teethIcon from "../../assets/teeth 1.png";
import smileIcon from "../../assets/smile 1.png";
import implantIcon from "../../assets/implant 1.png";
import Hero2 from "../sections/Hero2.jsx";
import Hero6 from "../sections/Hero6.jsx";

import Hero5 from "../sections/Hero5.jsx";
import Hero11 from "../sections/Hero11.jsx";

const Services = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const services = [
    {
      title: "Root Canal Treatment",
      icon: teethIcon,
      desc: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
    },
    {
      title: "Cosmetic Dentist",
      icon: smileIcon,
      desc: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
    },
    {
      title: "Dental Implants",
      icon: implantIcon,
      desc: "A dental implant is an artificial tooth root that's placed into your jaw to hold a prosthetic tooth or bridge.",
    },
    {
      title: "Teeth Whitening",
      icon: teethIcon,
      desc: "Professional teeth whitening is a popular cosmetic dental procedure to brighten and enhance your smile.",
    },
    {
      title: "Emergency Dentistry",
      icon: smileIcon,
      desc: "We provide emergency dental services for urgent situations requiring immediate attention and care.",
    },
    {
      title: "Preventive Dentistry",
      icon: implantIcon,
      desc: "Regular checkups and cleanings to maintain optimal oral health and prevent dental problems.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Do you have a fee list?",
      answer:
        "Yes, we provide a comprehensive fee list for all our dental services. You can request it at our reception or contact us for more details.",
    },
    {
      id: 2,
      question: "Are you taking on new NHS patients?",
      answer:
        "Currently, we are accepting new NHS patients. Please contact our office to check availability and book your appointment.",
    },
    {
      id: 3,
      question: "Do you do NHS and private treatment?",
      answer:
        "Yes, we offer both NHS and private dental treatments. Our team can help you choose the best option based on your needs and preferences.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      {/* Services Title - FIXED RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-center mt-[60px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  ">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-8 sm:mt-0 fontstyle-semibold">
              Services
            </h1>
            <p className="text-[#3C4959] mt-6 sm:mt-8 max-w-3xl  mx-auto text-sm sm:text-base lg:text-lg w-[526px]">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section - RESPONSIVE */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-gray-200"
              >
                <div className="flex justify-center mb-4 sm:mb-6 bg-[#25B4F8] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full items-center mx-auto">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    className="font-medium text-sm sm:text-base text-blue-600 hover:text-blue-700 underline decoration-2"
                  >
                    Learn More
                  </a>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 hover:translate-x-1 transition-transform duration-300"
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
      </section>

      {/* Leave Your Worries Section - RESPONSIVE */}
      <section className="bg-[#011632] py-12 sm:py-16 md:py-20 lg:py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="text-white order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                Leave Your Worries At The Door And Enjoy A Healthier, More
                Precise Smile
              </h2>
              <p className="mb-6 sm:mb-8 max-w-lg text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don't worry about
                anything and book yourself.
              </p>
              <button className="bg-[#1376F8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#011632] mb-6 sm:mb-8">
                  Request Appointment
                </h3>
                <form className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1376F8]/20 focus:border-[#1376F8]/50 text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1376F8]/20 focus:border-[#1376F8]/50 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1376F8]/20 focus:border-[#1376F8]/50 text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#1376F8] text-white py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Welcoming Section - RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#011632] leading-tight mb-6 sm:mb-8">
              We're Welcoming New Patients
              <br className="hidden sm:block" />
              <span className="block sm:inline">
                And Can't Wait To Meet You.
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>
        </div>
      </section>

      <Hero5 />
      {/* Meet Our Specialists */}
      <Hero6 />

      {/* FAQ Section - RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Frequently Ask Question
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-center text-[#3C4959] w-full max-w-[455px] mx-auto">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f7f8f9] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300"
                    >
                      <span className="text-left text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-4 sm:pr-6 flex-1">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                          openFAQ === faq.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed border-t border-gray-100 pt-4 sm:pt-5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                  Do you have more questions?
                </p>
                <button className="bg-[#1376F8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Hero11 />
    </>
  );
};

export default Services;
