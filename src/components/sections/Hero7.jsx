import React from 'react'
import leftarrow from '../../assets/leftarrow.png'
import rightarrow from '../../assets/rightarrow.png'

const Hero7 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thomas daniel",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      review: "Professional team in a hygiene content outsourcing through functional strategic theme areas. Assertively enable strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
    },
    {
      id: 2,
      name: "Alena Alex",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      review: "Professional team in a hygiene content outsourcing through functional strategic theme areas. Assertively enable strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
    },
    {
      id: 3,
      name: "Thomas Edison",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      review: "Professional team in a hygiene content outsourcing through functional strategic theme areas. Assertively enable strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Happy Clients</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We use only the best quality materials on the market in order to provide the best products to our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4 gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base truncate">{testimonial.name}</h3>
                  <div className="flex text-yellow-400 text-sm sm:text-base">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <button className="w-24 h-9  rounded-[3px] bg-[#011632] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0">
            <img src={leftarrow} alt="Previous" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="w-24 h-9 bg-[#011632] rounded-[3px] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0">
            <img src={rightarrow} alt="Next" className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero7