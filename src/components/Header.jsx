import React from 'react'
import starnav from '../assets/starnav.png'
import location from '../assets/location.svg'
import savat from '../assets/savat.svg'
import download from '../assets/download.svg'

const Header = () => {
  return (
    <header className="bg-white hidden md:block border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 md:py-3 mx-auto gap-3 md:gap-0">
        <div className="flex items-center gap-2">
          <img src={starnav} alt="Star" className="w-5 h-5" />
          <p className="text-sm">
            Get 5% Off your first order, <span className="text-orange-500 font-semibold">Promo: ORDER5</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <img src={location} alt="Location" className="w-5 h-5" />
          <p className="text-sm">
            Regent Street, <span className="font-semibold">A4</span>, A4201, London
          </p>
          <button className="text-orange-500 text-sm font-medium hover:underline">
            Change Location
          </button>
        </div>

        <div className="flex items-center gap-4 bg-green-700 text-white px-4 py-2 rounded-lg self-start md:self-auto">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={savat} alt="Cart" className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium">23 Items</span>
          </div>
          <div className="h-6 w-px bg-white opacity-30"></div>
          <span className="text-sm font-semibold">GBP 79.89</span>
          <img src={download} alt="Download" className="w-5 h-5" />
        </div>
      </div>
    </header>
  )
}

export default Header