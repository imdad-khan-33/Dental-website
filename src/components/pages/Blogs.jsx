import React, { useRef } from "react";
import heroImage from "../../assets/blogimg/img1.png";
import heroimage2 from "../../assets/blogimg/img2.png";
import heroimage3 from "../../assets/blogimg/img3.png";
import { useState } from "react";
import Hero4 from "../sections/hero4.jsx";
import Hero5 from "../sections/Hero5.jsx";
import Hero10 from "../sections/Hero10.jsx";
import Hero11 from "../sections/Hero11.jsx";

////article images
import articleImg1 from "../../assets/articleimg/articleimg1.png";
import articleImg2 from "../../assets/articleimg/articleimg2.png";
import articleImg3 from "../../assets/articleimg/articleimg3.png";
import articleImg4 from "../../assets/articleimg/articleimg4.png";
import articleImg5 from "../../assets/articleimg/articleimg5.png";
import articleImg6 from "../../assets/articleimg/articleimg6.png";
import articleImg7 from "../../assets/articleimg/articleimg7.png";
import articleImg8 from "../../assets/articleimg/articleimg8.png";

const cardsData = [
  {
    id: 1,
    image: heroImage,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Avika Jackson",
  },
  {
    id: 2,
    image: heroimage2,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Avika Jackson",
  },
  {
    id: 3,
    image: heroimage3,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Avika Jackson",
  },
  {
    id: 4,
    image: heroImage,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Avika Jackson",
  },
];

const articlesData = [
  {
    id: 1,
    image: articleImg1,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 2,
    image: articleImg2,
    tag: "Health care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 3,
    image: articleImg3,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 4,
    image: articleImg4,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 5,
    image: articleImg5,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 6,
    image: articleImg6,
    tag: "Self Care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 7,
    image: articleImg7,
    tag: "Health care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
  {
    id: 8,
    image: articleImg8,
    tag: "Health care",
    title: "Care of your Teeth",
    description: "Lorem ipsum dolor sit amet consectetur.",
    author: "Anita Jackson",
  },
];

const Blogs = () => {
  const scrollContainerRef = useRef(null);
  const [sortBy, setSortBy] = useState("New");

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section - Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          {/* Title - Responsive font sizes */}
          <h1 className="mt-[40px] text-[42px] sm:text-[48px] md:text-[54px] lg:text-[62px] font-semibold text-[#011632] leading-[120%] tracking-[-0.02em] text-center capitalize">
            Blogs
          </h1>

          {/* Description - Responsive text */}
          <p className="text-[16px] sm:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-center text-[#3C4959] w-full max-w-[490px] mx-auto mb-6 sm:mb-8 px-4 mt-[20px]">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>

          {/* Search Bar - Fully responsive */}
          <div className="flex justify-center px-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 sm:px-5 py-2 sm:py-3 pl-10 sm:pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1376F8] focus:border-transparent text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              />
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section - Horizontal Scroll (Mobile) / Grid (Desktop) */}
      <div className="">
        <div className="container mx-auto px-4 relative">
          {/* Cards Container - Responsive layout */}
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible scroll-smooth pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="w-[260px] sm:w-[280px] lg:w-full flex-shrink-0 bg-[#E6F6FE] rounded-[10px] shadow-lg overflow-hidden"
              >
                {/* Image Container - Responsive */}
                <div className="w-full p-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[180px] sm:h-[200px] object-cover rounded-[10px]"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5">
                  {/* Button and Author */}
                  <div className="flex justify-between items-center mb-3">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0A2540] text-white text-[11px] sm:text-[12px] font-medium rounded-[5px] hover:bg-[#1a3a5c] transition-colors">
                      {card.tag}
                    </button>
                    <p className="text-[12px] sm:text-[13px] text-[#64748B]">
                      —{card.author}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] sm:text-[16px] font-semibold leading-[155%] tracking-[0.015em] text-[#0A2540] mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] font-normal leading-[155%] tracking-[0.015em] text-[#64748B]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons - Responsive */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            <button
              onClick={() => scroll(-400)}
              className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#0A2540] text-white rounded-md flex items-center justify-center hover:bg-[#1a3a5c] transition-colors shadow-md"
              aria-label="Scroll left"
            >
              <svg
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll(400)}
              className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#0A2540] text-white rounded-md flex items-center justify-center hover:bg-[#1a3a5c] transition-colors shadow-md"
              aria-label="Scroll right"
            >
              <svg
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Articles Section - Fully Responsive */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Responsive */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] font-semibold text-[#011632] px-2 sm:px-4 py-2 rounded-md leading-[125%] tracking-normal text-center capitalize">
                Articles
              </h2>
            </div>

            {/* Sort Dropdown - Responsive */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full sm:w-auto bg-white border border-gray-300 rounded-md px-4 py-2 pr-10 text-[13px] sm:text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] cursor-pointer"
              >
                <option value="New">Sort by: New</option>
                <option value="Popular">Sort by: Popular</option>
                <option value="Oldest">Sort by: Oldest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Articles Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 justify-items-center">
            {articlesData.map((article) => (
              <div
                key={article.id}
                className="w-full max-w-[305px] h-auto bg-[#E8F4F8] rounded-[10px] overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Container - Responsive */}
                <div className="w-full p-4 sm:p-5 flex justify-center items-center">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full max-w-[265px] h-[220px] sm:h-[264px] object-cover rounded-[10px]"
                  />
                </div>

                {/* Content Section - Responsive */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  {/* Tag Button */}
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0A2540] text-white text-[11px] sm:text-[12px] font-medium rounded-[5px] mb-3 hover:bg-[#1a3a5c] transition-colors">
                    {article.tag}
                  </button>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] font-semibold leading-[155%] tracking-[0.015em] text-[#0A2540] mb-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] font-normal leading-[155%] tracking-[0.015em] text-[#64748B] mb-3">
                    {article.description}
                  </p>

                  {/* Author */}
                  <p className="text-[12px] sm:text-[13px] text-[#64748B] text-right">
                    —{article.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Check out more Button - Responsive */}
          <div className="flex justify-center">
            <button className="w-full sm:w-auto bg-[#1376F8] text-[#FFFFFF] text-[14px] sm:text-[16px] font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-[#0284C7] transition-colors shadow-md">
              Check out more
            </button>
          </div>
        </div>
      </div>

      <Hero4 />
      <Hero5 />
      <Hero10 />
      <Hero11 />
    </>
  );
};

export default Blogs;
