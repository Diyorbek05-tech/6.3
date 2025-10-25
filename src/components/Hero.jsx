import React from 'react'
import notification from '../assets/notification.png'
import bgmain from '../assets/bgmain.png'
import bgmainshadow from '../assets/bgmainshadow.png'

const Hero = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div className="mx-auto px-4 pt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 text-white">
            <p className="text-sm md:text-base mb-4 text-gray-300">
              Order Restaurant food, takeaway and groceries.
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Feast Your Senses,
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-8">
              Fast and Fresh
            </h1>

            <p className="text-sm mb-4 text-gray-300">
              Enter a postcode to see what we deliver
            </p>

                   <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-md">
              <input 
                type="text" 
                placeholder="e.g. EC4R 3TE"
                className="flex-1 px-6 py-3 text-gray-700 focus:outline-none bg-transparent"
              />
              <button className="px-8 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="relative">
            <img 
              src={bgmainshadow} 
              alt="Shadow" 
              className="absolute inset-0 w-full h-full object-contain opacity-50"
            />
            
            <div>
                <img 
              src={bgmain} 
              alt="Happy customer with pizza" 
              className="relative z-10 md:w-full h-auto"
            />
            </div>

            <div className="absolute top-8 right-4 md:right-12 z-20 space-y-4">
              <img 
                src={notification} 
                alt="Order notification 1" 
                className="w-56 md:w-64"
              />
              <img 
                src={notification} 
                alt="Order notification 2" 
                className="w-56 md:w-64"
              />
              <img 
                src={notification} 
                alt="Order notification 3" 
                className="w-56 md:w-64"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500 -skew-x-12 transform origin-top-right hidden md:block"></div>
    </section>
  )
}

export default Hero