import React from 'react'

const Statistics = () => {
  const stats = [
    {
      number: '546+',
      label: 'Registered Riders'
    },
    {
      number: '789,900+',
      label: 'Orders Delivered'
    },
    {
      number: '690+',
      label: 'Restaurants Partnered'
    },
    {
      number: '17,457+',
      label: 'Food items'
    }
  ]

  return (
    <section className="bg-orange-400 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-2">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics