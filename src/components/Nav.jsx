import React, { useState } from 'react'
import logo from '../assets/logo.png'
import userlogin from '../assets/userlogin.svg'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Pizzas',
    'Garlic Bread',
    'Calzone',
    'Kebabas',
    'Salads',
    'Cold drinks',
    'Happy Meal®',
    'Desserts',
    'Hot drinks',
    'Sauces',
    'Orbit®'
  ]

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="Order UK" className="h-10" />
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
                Home
              </button>
              <button className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                Browse Menu
              </button>
              <button className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                Special Offers
              </button>
              <button className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                Restaurants
              </button>
              <button className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
                Track Order
              </button>
            </div>

            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
              <img src={userlogin} alt="User" className="w-5 h-5" />
              <span className="font-medium">Login/Signup</span>
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center gap-2 text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white w-64 h-full shadow-lg ml-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white border-b-4 border-blue-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <h2 className="text-lg font-bold">Menu</h2>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-left px-6 py-4 text-sm font-medium border-b border-gray-100 bg-wite-900 hover:text-white text-slate hover:bg-slate-800 ${
                    index === 0 ? 'bg-wite-900 hover:text-white text-slate hover:bg-slate-800' : 'text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav