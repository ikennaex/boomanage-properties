import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css"
import { img2 } from '../../imports';

const Herosection = () => {
    const images = [
        {
          imgUrl: "https://img.freepik.com/premium-photo/suitcase-with-famous-monuments-isolated-with-clouds-famous-buildings-landmarks-towers-travel_741269-8.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
          alt: "Travel img",
        },
        {
          imgUrl: "https://img.freepik.com/free-photo/woman-checking-map-autumn-travel-destination_23-2148634143.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
          alt: "Travel img",
        },
        {
          imgUrl: "https://img.freepik.com/free-photo/trendy-looking-african-american-tourist-with-backpack-hat-sunglasses-studying-directions-using-city-guide-while-exploring-sights-landmarks-resort-town_273609-952.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_incoming",
          alt: "Travel img",
        },
        {
          imgUrl: "https://img.freepik.com/premium-photo/untitled-design-5_1210786-40.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid",
          alt: "Travel img",
        },
      ]

  return (
<div className=''>
  <div className='bg-customBlue'>
    <div className='lg:px-10 pt-14 container mx-auto px-7  h-fit p-28 gap-4 flex flex-col lg:flex-row lg:justify-between items-center'>

      <div className="lg:w-1/3 ">
        <p className="text-customYellow font-bold">LumiGrid Technology Limited</p>
        <h1 className='lg:text-5xl leading-tight font-black text-3xl text-white pb-6 slide-in-bottom'>
          Empowering Nigeria with Sustainable, Intelligent Solar Energy Solutions
        </h1>
        <p className='lg:text-sm text-white lg:w-120 slide-in-left'>
          LumiGrid Technology delivers smart solar solutions to bridge Nigeria’s energy gap. Backed by engineering and energy experts, we support UN SDG 7 with reliable, scalable, and sustainable technology.
        </p>

        <div className='pt-9 flex items-center gap-6 slide-in-left2'>
          <a target='_blank' href="https://wa.me/2348135217518">
            <button className='lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-customYellow p-4 rounded-2xl font-bold text-white cursor-pointer'>
              <FaWhatsapp size={27} />
              Chat us
            </button>
          </a>
          <a href="mailto:info@lumigrid.com.ng">
            <button className='lg:rounded-2xl lg:px-8 flex gap-2 items-center border-customYellow hover:bg-customYellow border-2 p-4 rounded-2xl font-bold text-white cursor-pointer'>
              <MdOutlineMail size={27} />
              Email us
            </button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 pt-5 lg:pt-0">
        <img
          className='object-cover pr-2 w-full lg:h-full slide-in-blurred-bottom rounded-3xl'
          src={img2}
          alt="solar panel"
        />
      </div>

    </div>
  </div>
</div>
  )
}

export default Herosection