import React from 'react'
import { logo } from '../../imports'
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='bg-gray-900'>
  <div className='container mx-auto px-4 sm:px-6 lg:px-10 py-10'>
    <div className='flex flex-col lg:flex-row justify-between gap-10'>
      {/* Logo and Description */}
      <div className='lg:w-1/3'>
        <img className='h-14 mb-4' src={logo} alt="LumiGrid logo" />
        <p className='text-white text-sm leading-relaxed'>
          LumiGrid Technology Limited is a pioneering renewable energy firm committed to bridging Nigeria's energy access gap through the deployment of advanced solar power technologies.
        </p>
      </div>

      {/* Contact Info */}
      <div className='lg:w-1/3'>
        <h2 className='font-bold text-white pb-3 pt-7 lg:pt-0'>Contact Information</h2>
        <p className='text-white text-sm'>📍 G1 H6, Idejo Avenue, Royal Gardens Estate, Ajah.</p>
        <p className='text-white text-sm mt-2'>📧 info@lumigrid.com.ng</p>
      </div>

      {/* Social Icons */}
      <div className='lg:w-1/3 pt-7 lg:pt-0'>
        <h2 className='font-bold text-white pb-3'>Follow Us</h2>
        <div className="flex items-center gap-4 text-white">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.facebook.com/profile.php?id=61555161683538"
          >
            <FaFacebook size={20} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sherpaverseltd/"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <p className="text-center text-sm mt-10 text-white">
      &copy; {year} LumiGrid Technology Limited
    </p>
  </div>
</footer>
  )
}

export default Footer