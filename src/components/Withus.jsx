import React from 'react'
import Card from './Withus_pops'
import earnmore from '../assets/earnmore.png'
import avail from '../assets/avail.png'

const Withus = () => {
  const cards = [
    {
      image: earnmore,
      badge: 'Earn more with lower fees',
      subtitle: 'Signup as a business',
      title: 'Partner with us',
      buttonText: 'Get Started'
    },
    {
      image: avail,
      badge: 'Avail exclusive perks',
      subtitle: 'Signup as a rider',
      title: 'Ride with us',
      buttonText: 'Get Started'
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Withus