import React from 'react'
import { engineer } from '../../imports'

const Appointment = () => {
  return (
<div className='bg-customBlue'>
  <div className='container mx-auto py-32 px-4 text-white'>
    <div className='flex flex-col lg:flex-row items-center gap-7 bg-gray-900 rounded-3xl px-6 py-8 lg:py-12'>
      
      {/* Image Section */}
      <div className='flex-shrink-0'>
        <img className='object-cover h-60 w-full max-w-xs rounded-2xl' src={engineer} alt="Engineer" />
      </div>

      {/* Text + Button Section */}
      <div className='flex flex-col gap-5'>
        <h2 className='text-2xl lg:text-3xl font-bold leading-snug'>
          Need help? Book a call at a time that suits you
        </h2>
        <p className='text-sm lg:text-base leading-relaxed'>
          We have dedicated electrical engineers and energy consultants to help you make informed decisions about your power and infrastructure investments.
        </p>
        <button className='bg-customBlue w-full lg:w-fit px-6 py-3 rounded-xl font-bold hover:opacity-90 transition duration-300'>
          Book Appointment
        </button>
      </div>

    </div>
  </div>
</div>
  )
}

export default Appointment