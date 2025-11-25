import React, { useState } from 'react'
import card1 from '../../assets/mulcards/card1.png'
import card2 from '../../assets/mulcards/card2.png'
import card3 from '../../assets/mulcards/Rectangle 652 (5).png'
import card4 from '../../assets/mulcards/Rectangle 652.png'

import card5 from '../../assets/mulcards/Rectangle 652 (1).png'
import card6 from '../../assets/mulcards/Rectangle 652 (2).png'
import card7 from '../../assets/mulcards/Rectangle 652 (3).png'
import card8 from '../../assets/mulcards/Rectangle 652 (4).png'

const Hero9 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Care of your Teeth",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card1,
      category: "Self Care",
      author: "--Anita Jackson"
    },
    {
      id: 2,
      title: "Dental Whitening",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card2,
      category: "Self Care",
      author: "--John Smith"
    },
    {
      id: 3,
      title: "Root Canal Treatment",
      description: "Lorem ipsum dolor sit amet consectetur.",
       image : card3,
      category: "Self Care",
      author: "--Sarah Williams"
    },
    {
      id: 4,
      title: "Orthodontic Care",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card4,
      category: "Self Care",
      author: "--Mike Johnson"
    },
    {
      id: 5,
      title: "Dental Crowns",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card5,
      category: "Self Care",
      author: "--Emily Davis"
    },
    {
      id: 6,
      title: "Cleaning & Prevention",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card6,
      category: "Self Care",
      author: "--Robert Brown"
    },
    {
      id: 7,
      title: "Emergency Dental Care",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card7,
      category: "Self Care",
      author: "--Lisa Anderson"
    },
    {
      id: 8,
      title: "Pediatric Dentistry",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: card8,
      category: "Self Care",
      author: "--David Wilson"
    }
  ]

  const section1Cards = cardsData.slice(0, 4)
  const section2Cards = cardsData.slice(4, 8)
  const allCards = cardsData
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allCards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allCards.length) % allCards.length)
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Mobile Slider View */}
        <div className="block sm:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={allCards[currentIndex].image} 
                alt={allCards[currentIndex].title} 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {allCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="hidden sm:flex flex-col gap-6 sm:gap-8">
          {/* Section 1 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ">
            {section1Cards.map((card) => (
              <div key={card.id} className=" bg-[#E6F6FE] rounded-[10px] overflow-hidden shadow-sm">
                {/* Image Container */}
                <div className=" ml-[20px] py-[17px] rounded-[10px] w-[250px] h-[230px]  sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover  rounded-[10px]" />
                </div>
                
                {/* Content - Bottom */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded">
                      {card.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {card.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {card.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {section2Cards.map((card) => (
              <div key={card.id} className="bg-[#E6F6FE] rounded-[10px] overflow-hidden shadow-sm">
                {/* Image Container */}
                <div className="ml-[20px] py-[17px]  w-[250px] h-[230px] sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-[10px]">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-[10px]" />
                </div>
                
                {/* Content - Bottom */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded">
                      {card.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {card.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {card.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Button */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <button className="bg-[#1376F8] text-white rounded-[10px] px-6 sm:px-8 md:px-10 py-2 sm:py-3 hover:bg-sky-700 transition-colors font-medium text-sm sm:text-base whitespace-nowrap">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero9