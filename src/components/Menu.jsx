import React from 'react'
import { GridSection } from './cardgrid.jsx'
import order_uk1 from '../assets/order_uk1.png'
import order_uk2 from '../assets/order_uk2.png'
import order_uk3 from '../assets/order_uk3.png'
import order_uk4 from '../assets/order_uk4.png'
import order_uk5 from '../assets/order_uk5.png'
import order_uk6 from '../assets/order_uk6.png'
import restaurant1 from '../assets/restaurant1.png'
import restaurant2 from '../assets/restaurant2.png'
import restaurant3 from '../assets/restaurant3.png'
import restaurant4 from '../assets/restaurant4.png'
import restaurant5 from '../assets/restaurant5.png'
import restaurant6 from '../assets/restaurant6.png'

const Menu = () => {
  const categories = [
    {
      image: order_uk1,
      title: 'Burgers & Fast food',
      subtitle: '21 Restaurants',
      bgColor: 'bg-slate-900',
      titleColor: 'text-orange-500'
    },
    {
      image: order_uk2,
      title: 'Salads',
      subtitle: '32 Restaurants',
      bgColor: 'bg-slate-900',
      titleColor: 'text-orange-500'
    },
    {
      image: order_uk3,
      title: 'Pasta & Casuels',
      subtitle: '4 Restaurants',
      bgColor: 'bg-slate-900',
      titleColor: 'text-orange-500'
    },
    {
      image: order_uk4,
      title: 'Pizza',
      subtitle: '32 Restaurants',
      bgColor: 'bg-slate-900',
      titleColor: 'text-orange-500'
    },
    {
      image: order_uk5,
      title: 'Breakfast',
      subtitle: '4 Restaurants',
      bgColor: 'bg-slate-900',
      titleColor: 'text-orange-500'
    },
    {
      image: order_uk6,
      title: 'Soups',
      subtitle: '32 Restaurants',
      bgColor: 'bg-slate-900',
      titleColor: 'text-orange-500'
    }
  ]

  const restaurants = [
    {
      image: restaurant1,
      title: "McDonald's London",
      bgColor: 'bg-orange-500',
      titleColor: 'text-white'
    },
    {
      image: restaurant2,
      title: 'Papa Johns',
      bgColor: 'bg-orange-500',
      titleColor: 'text-white'
    },
    {
      image: restaurant3,
      title: 'KFC West London',
      bgColor: 'bg-orange-500',
      titleColor: 'text-white'
    },
    {
      image: restaurant4,
      title: 'Texas Chicken',
      bgColor: 'bg-orange-500',
      titleColor: 'text-white'
    },
    {
      image: restaurant5,
      title: 'Burger King',
      bgColor: 'bg-orange-500',
      titleColor: 'text-white'
    },
    {
      image: restaurant6,
      title: 'Shaurma 1',
      bgColor: 'bg-orange-500',
      titleColor: 'text-white'
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4">
        <GridSection 
          title="Order.uk Popular Categories 🤩" 
          items={categories} 
          columns={6}
        />
        <GridSection 
          title="Popular Restaurants" 
          items={restaurants} 
          columns={6}
        />
      </div>
    </section>
  )
}

export default Menu