import React from "react";
import heroImage from "../../assets/about/aboutimg1.png";
import Hero4 from "../sections/hero4";
import Hero5 from "../sections/hero5";
///about image

import Image2 from "../../assets/about/aboutimg2.png";
import Image3 from "../../assets/about/aboutimg3.png";
import Image4 from "../../assets/about/aboutimg4.png";
import Image5 from "../../assets/about/aboutimg5.png";
import Image6 from "../../assets/about/aboutimg6.png";

import teethIcon from "../../assets/teeth 1.png";
import smileIcon from "../../assets/smile 1.png";
import implantIcon from "../../assets/implant 1.png";

const About = () => {
  return (
    <>
      {/* Title - Responsive font sizes */}
      <h1 className="mt-[90px] text-[42px] sm:text-[48px] md:text-[54px] lg:text-[62px] font-semibold text-[#011632] leading-[120%] tracking-[-0.02em] text-center capitalize">
        About Us
      </h1>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left Content */}
            <div>
              {/* Main Heading */}
              <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] font-semibold leading-[125%] tracking-normal text-[#011632] capitalize mb-6">
                Our Mission
              </h2>

              {/* First Paragraph */}
              <p className="text-[18px] font-normal leading-[155%] tracking-[0.015em] text-[#3C4959] w-full max-w-[649px] mb-6">
                At Northern Heights Dental, people come first. We help each of
                our patients to achieve optimal wellness and health by using a
                whole body approach to oral health. This means not just focusing
                on cavities, but focusing on; cranio-facial development, bite
                and joint balance, oral flora, proper muscle balance/function,
                and bio-compatibility of dental materials. Great care and
                planning ensure that everything we do helps promote overall
                health and well being.
              </p>

              {/* Subheading */}
              <h3 className="text-[24px] sm:text-[28px] font-semibold leading-[125%] tracking-normal text-[#011632] capitalize mb-4">
                More Than Anything Else We Love Creating Happy, Healthy Smiles.
              </h3>

              {/* Second Paragraph */}
              <p className="text-[18px] font-normal leading-[155%] tracking-[0.015em] text-[#3C4959] w-full max-w-[649px]">
                We work hard to stay up to date with the most advanced
                techniques and technologies to ensure that our patients receive
                the best care possible. Our office utilizes 3D CBCT radiographs
                to allow for guided surgical and endodontic protocols. This
                enables these procedures to performed digitally before they are
                performed surgically to ensure optimal results. 3D imaging also
                is utilized for the analysis of airway growth and development.
                We also use the best 3D optical scanner for all of our dental
                restoration and Invisalign impressions. Dr Williams is a strong
                advocate for using microsurgical techniques, this means less
                discomfort and faster healing times.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[453px] h-[400px] sm:h-[500px] lg:h-[560px] rounded-[10px] bg-[#D9D9D9] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Dentist with patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Specialists Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Container */}
          <div className="w-full max-w-[479px] mx-auto text-center mb-12">
            {/* Heading */}
            <h2 className="text-[42px] font-semibold leading-[125%] tracking-normal text-[#3C4959] capitalize mb-6">
              Meet Our Specialists
            </h2>

            {/* Description */}
            <p className="text-[18px] font-normal leading-[155%] tracking-[0.015em] text-center text-[#3C4959]">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>

          {/* Specialists Cards */}
          <div className="space-y-8">
            {/* Doctor 1 */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] mx-auto rounded-[10px] h-[350px] overflow-hidden bg-white ">
              <img
                src={Image2}
                alt="Dr. Brent"
                className="w-full lg:w-[305px] h-[300px] lg:h-[350px] object-cover"
              />
              <div className="p-6 lg:p-8 lg:pl-8 flex flex-col justify-center">
                <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#011632] mb-3">
                  DR. Brent{" "}
                  <span className="font-normal text-[#3C4959]">
                    (Specialty in General & Cosmetic Service)
                  </span>
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[155%] text-[#3C4959] mb-6">
                  Dr. Brent provides general and cosmetic dentistry services at
                  Northern Heights Dental in Flagstaff, Arizona. He has
                  extensive experience in general and cosmetic dentistry,
                  including full mouth restoration, dental veneers, crowns,
                  bridges, dental implants, wisdom teeth extractions,
                  Invisalign, and dentures.
                </p>
                <a
                  href="#book"
                  className="inline-block self-start px-8 py-3 bg-[#1376F8] text-white font-semibold text-base rounded-md hover:bg-[#0EA5E9] transition"
                >
                  Book an appointment
                </a>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] h-[350px]  mx-auto rounded-[10px] overflow-hidden bg-white">
              <img
                src={Image3}
                alt="Dr. Sarah"
                className="w-full lg:w-[305px] h-[300px] lg:h-[350px] object-cover"
              />
              <div className="p-6 lg:p-8 lg:pl-8 flex flex-col justify-center">
                <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#011632] mb-3">
                  DR. Sarah{" "}
                  <span className="font-normal text-[#3C4959]">
                    (Specialty in Orthodontics)
                  </span>
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[155%] text-[#3C4959] mb-6">
                  Dr. Sarah specializes in orthodontics and has helped hundreds
                  of patients achieve their dream smiles. With expertise in
                  Invisalign, traditional braces, and advanced orthodontic
                  treatments, she ensures each patient receives personalized
                  care tailored to their unique needs.
                </p>
                <a
                  href="#book"
                  className="inline-block self-start px-8 py-3 bg-[#1376F8] text-white font-semibold text-base rounded-md hover:bg-[#0EA5E9] transition"
                >
                  Book an appointment
                </a>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] h-[350px] mx-auto rounded-[10px] overflow-hidden bg-white ">
              <img
                src={Image4}
                alt="Dr. Michael"
                className="w-full lg:w-[305px] h-[300px] lg:h-[350px] object-cover"
              />
              <div className="p-6 lg:p-8 lg:pl-8 flex flex-col justify-center">
                <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#011632] mb-3">
                  DR. Michael{" "}
                  <span className="font-normal text-[#3C4959]">
                    (Specialty in Endodontics)
                  </span>
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[155%] text-[#3C4959] mb-6">
                  Dr. Michael is an expert endodontist specializing in root
                  canal therapy and dental pain management. With years of
                  experience and advanced technology, he provides comfortable
                  and effective treatments for even the most complex dental
                  issues.
                </p>
                <a
                  href="#book"
                  className="inline-block self-start px-8 py-3 bg-[#1376F8] text-white font-semibold text-base rounded-md hover:bg-[#0EA5E9] transition"
                >
                  Book an appointment
                </a>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] mx-auto rounded-[10px]h-[350px]overflow-hidden bg-white ">
              <img
                src={Image4}
                alt="Dr. Michael"
                className="w-full lg:w-[305px] h-[300px] lg:h-[350px] object-cover"
              />
              <div className="p-6 lg:p-8 lg:pl-8 flex flex-col justify-center">
                <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#011632] mb-3">
                  DR. Jennifer{" "}
                  <span className="font-normal text-[#3C4959]">
                    (Specialty in Pediatric Dentistry)
                  </span>
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[155%] text-[#3C4959] mb-6">
                  Dr. Jennifer specializes in pediatric dentistry, making dental
                  visits fun and comfortable for children. She focuses on
                  preventive care and education, helping young patients develop
                  healthy dental habits that last a lifetime.
                </p>
                <a
                  href="#book"
                  className="inline-block self-start px-8 py-3 bg-[#1376F8] text-white font-semibold text-base rounded-md hover:bg-[#0EA5E9] transition"
                >
                  Book an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Technology Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold leading-[125%] tracking-normal text-[#011632] capitalize mb-4 sm:mb-6">
              Latest Technology
            </h2>
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-[#3C4959] max-w-[592px] mx-auto px-4">
              Thanks to major technological advancements, dentistry allows
              treating the most complex cases with less time and more
              efficiency.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start max-w-[1270px] mx-auto">
            {/* Left - Image */}
            <div className="w-full lg:w-[522px] h-[250px] sm:h-[350px] lg:h-[393px]">
              <img
                src={Image6}
                alt="Latest Technology in Dentistry"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-[728px]">
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold leading-[120%] tracking-normal capitalize text-[#011632] mb-4 sm:mb-6">
                The Future of Dentistry is Digital:
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-[#3C4959]">
                  Dentists today already utilize software to capture insights in
                  clinical decision-making. These practices will continue to
                  develop to integrate AI algorithms that enable clinicians to
                  find the best modalities for their patients.
                </p>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-[#3C4959]">
                  In the 21st century, digital radiographs and 3D imaging have
                  become the standard of dental care. Using an intraoral scanner
                  with digitized data for 3D dental impressions (vs polyvinyl
                  siloxane and rubber base impressions) for a dental crown is
                  now commonplace.
                </p>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-[#3C4959]">
                  Artificial intelligence is laying the groundwork for the
                  future of the dental industry. Dental robots can now perform
                  functions such as filling cavities and cleaning or extracting
                  teeth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1280px] mx-auto mt-8 sm:mt-12 lg:mt-16 bg-[#011632] rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <Hero4 />
      <Hero5 />
    </>
  );
};

export default About;
