import React from "react";
import heroImage from "../../assets/about/aboutimg1.png";
///about image

import Image2 from "../../assets/about/aboutimg2.png";
import Image3 from "../../assets/about/aboutimg3.png";
import Image4 from "../../assets/about/aboutimg4.png";
import Image5 from "../../assets/about/aboutimg5.png";

const About = () => {
  return (
    <>
      {/* Title - Responsive font sizes */}
      <h1 className="mt-[90px] text-[42px] sm:text-[48px] md:text-[54px] lg:text-[62px] font-semibold text-[#011632] leading-[120%] tracking-[-0.02em] text-center capitalize">
        About
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
              <div className="w-full max-w-[453px] h-[603px] rounded-[10px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src={heroImage}
                  alt="Dentist with patient"
                  className="w-[350px] h-[350px] object-cover"
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
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] mx-auto rounded-[10px] overflow-hidden bg-white ">
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
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] mx-auto rounded-[10px] overflow-hidden bg-white">
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
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] mx-auto rounded-[10px] overflow-hidden bg-white ">
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
            <div className="flex flex-col lg:flex-row w-full max-w-[1064px] mx-auto rounded-[10px] overflow-hidden bg-white ">
              <img
                src={Image5}
                alt="Dr. Jennifer"
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
    </>
  );
};

export default About;
