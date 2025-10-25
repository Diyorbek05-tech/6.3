import React from 'react'
import logo from '../assets/logo.png'
import download from '../assets/download.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Snapchat from '../assets/Snapchat.png'

const Footer = () => {
  const legalPages = [
    { name: 'Terms and conditions', link: '#' },
    { name: 'Privacy', link: '#' },
    { name: 'Cookies', link: '#' },
    { name: 'Modern Slavery Statement', link: '#' }
  ]

  const importantLinks = [
    { name: 'Get help', link: '#' },
    { name: 'Add your restaurant', link: '#' },
    { name: 'Sign up to deliver', link: '#' },
    { name: 'Create a business account', link: '#' }
  ]

  const socialMedia = [
    { icon: Facebook, alt: 'Facebook' },
    { icon: Instagram, alt: 'Instagram' },
    { icon: Tiktok, alt: 'TikTok' },
    { icon: Snapchat, alt: 'Snapchat' }
  ]

  const bottomLinks = [
    'Privacy Policy',
    'Terms',
    'Pricing',
    'Do not sell or share my personal information'
  ]

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center lg:text-left">
            <img src={logo} alt="Order.uk" className="h-10 mb-6 mx-auto lg:mx-0" />
            <img src={download} alt="Download apps" className="h-12 mb-6 mx-auto lg:mx-0" />
            <p className="text-sm text-gray-600">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Get Exclusive Deals in your Inbox</h3>
            <div className="flex items-center bg-white rounded-full overflow-hidden mb-3">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              we wont spam, read our <a href="#" className="underline">email policy</a>
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialMedia.map((social, index) => (
                <a key={index} href="#" className="hover:opacity-80 transition-opacity">
                  <img src={social.icon} alt={social.alt} className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal Pages</h3>
            <ul className="space-y-3">
              {legalPages.map((page, index) => (
                <li key={index}>
                  <a href={page.link} className="text-sm text-gray-700 hover:text-orange-500 transition-colors">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-sm text-gray-700 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm">Order.uk Copyright 2024, All Rights Reserved.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-sm">
              {bottomLinks.map((link, index) => (
                <a key={index} href="#" className="hover:text-orange-500 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer