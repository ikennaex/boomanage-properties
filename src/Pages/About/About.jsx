import React from 'react'
import { img7 } from '../../imports'

const About = () => {
  return (
    <div className="bg-customBlue">
  <div className="container mx-auto px-4 py-10">
    <div className="flex flex-col lg:flex-row items-center gap-10">
      
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img className="rounded-3xl w-full h-auto object-cover" src={img7} alt="LumiGrid Panel" />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl lg:text-5xl text-white font-bold mb-5">Who are we</h2>
        <p className="text-white text-sm lg:text-base leading-relaxed">
          LumiGrid Technology Limited is a pioneering renewable energy firm committed to bridging Nigeria's energy access gap through the deployment of advanced solar power technologies. Founded by a team of electrical engineers, power system designers, and energy transition experts, LumiGrid delivers precision-engineered solar solutions that combine state-of-the-art photovoltaic technology with intelligent energy management systems.
          <br /><br />
          We are aligned with the United Nations Sustainable Development Goal 7 (Affordable and Clean Energy), ensuring our services contribute meaningfully to climate action and sustainable development. Our mission is to accelerate Nigeria’s transition to a decentralized, smart, and clean energy ecosystem through dependable, scalable, and innovative solar technologies.
        </p>
      </div>

    </div>
  </div>
</div>
  )
}

export default About