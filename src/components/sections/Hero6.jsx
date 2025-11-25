import React from 'react'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const Hero6 = () => {
  const cards = [card1, card2, card3, card1]
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-blue-100 to-white mt-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Specialists</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            We use only the best quality materials on the market in order to provide the best products to our patients.
          </p>
        </div>
        <div className="flex justify-center w-full overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {cards.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-[340px] w-full opacity-100">
                <img src={src} alt={`Card ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero6