import React from 'react'
import friends from '../assets/friends.png'
import download from '../assets/download.png'
import logo from '../assets/logo.png'

const Downloading = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4">
        <div className="bg-gray-100 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={friends} 
                alt="Happy customers using Order.uk app" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2 p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <div className='flex'>
                    <div><img src={logo} alt="" /></div>
                <span className="text-slate-900">ing is more</span>
                </div>
              </h2>

              <div className="bg-slate-900 text-white rounded-full inline-block px-8 py-3 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="text-orange-500">Personalised</span>
                  <span> & Instant</span>
                </h3>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Download the Order.uk app for faster ordering
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <img 
                  src={download} 
                  alt="Download on App Store and Google Play" 
                  className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Downloading