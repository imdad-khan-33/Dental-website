import React from 'react'
import lastImage from '../../assets/lastimage2.png'

const Hero11 = () => {
  return (
    <section className="bg-[#011632] max-w-7xl mx-auto rounded-[10px] mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 md:py-12">
        
        {/* Left Content */}
        <div className='flex-1 max-w-full md:max-w-[582px]'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFFFFF] leading-tight mb-4'>
            Dental Website that's gonna shake the game rules up.
          </h2>
          <p className='text-[#FFFFFF] text-sm sm:text-base mb-6'>
            We use only the best quality materials on the market in order to provide the best products to our patients.
          </p>
          <button className="bg-[#1376F8] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-[5px] font-medium hover:bg-sky-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full md:w-auto max-w-[305px]">
          <img 
            src={lastImage} 
            alt="Dental Website Preview" 
            className="w-full h-auto rounded-[10px] object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero11
