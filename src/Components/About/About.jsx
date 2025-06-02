import React from 'react'
import { img7 } from '../../imports'

const About = () => {
  return (
    <div className='container mx-auto px-7 lg:px-20 py-14 lg:py-20'>
    <div className='lg:flex'>
        <div className='lg:w-1/2'>
            <img 
                className='w-full object-cover pr-2 lg:h-full slide-in-blurred-bottom rounded-3xl' 
                src={img7} 
                alt="solar panel" 
            />
        </div>

        <div className='lg:w-1/2 lg:pl-10'>
            <h2 className='font-bold text-3xl mt-7 lg:text-6xl'>Who are we?</h2>
            <p className='lg:text-xl mt-4'>
                LumiGrid Technology Limited is a pioneering renewable energy firm committed to bridging Nigeria's energy access gap through the deployment of advanced solar power technologies. Founded by a team of electrical engineers, power system designers, and energy transition experts, LumiGrid delivers precision-engineered solar solutions that combine state-of-the-art photovoltaic technology with intelligent energy management systems.
            </p>
        </div>
    </div>

    <div className='pt-7'>
        <button className='bg-customBlue px-10 py-3 rounded-xl font-bold text-white'>Read More</button>
    </div>
</div>
  )
}

export default About