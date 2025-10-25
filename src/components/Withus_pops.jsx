import React from 'react'

const Card = ({ image, badge, subtitle, title, buttonText }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-top from-black/60 to-transparent"></div>
      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg text-sm font-medium">
        {badge}
      </div>
      <div className="absolute bottom-6 left-6">
        <p className="text-orange-500 text-sm font-semibold mb-2">{subtitle}</p>
        <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{title}</h3>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Card