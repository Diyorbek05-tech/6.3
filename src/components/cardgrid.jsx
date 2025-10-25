import React from 'react'

export const Card = ({ image, title, subtitle, bgColor, titleColor }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`${bgColor} text-white p-3 ${subtitle ? '' : 'text-center'}`}>
        <h3 className={`${titleColor} font-semibold text-sm md:text-base ${subtitle ? 'mb-1' : ''}`}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-gray-300">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export const GridSection = ({ title, items, columns = 6 }) => {
  return (
    <div className="mb-16 last:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-4 md:gap-6`}>
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}