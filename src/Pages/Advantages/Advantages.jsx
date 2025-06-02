import React from 'react'
import { ai, battery, climate, decentralized, diagnose, efficiency, warranty } from '../../imports'

const advantagesList = [
  {
    img: efficiency,
    text: "Utilization of high-efficiency (>21%) Tier-1 PV modules"
  },
  {
    img: battery,
    text: "Deployment of scalable inverter topologies (from 5kVA to 100kVA)"
  },
  {
    img: ai,
    text: "Integration of AI-driven EMS (Energy Management Systems)"
  },
  {
    img: diagnose,
    text: "Smart diagnostics and fault-tolerant system design"
  },
  {
    img: warranty,
    text: "Comprehensive 5-year performance warranties and 24/7 support"
  },
  {
    img: decentralized,
    text: "Decentralized mini-grid and off-grid rural electrification experience"
  },
  {
    img: climate,
    text: "Projects aligned with UN 2030 Climate Agenda and Nigeria’s Energy Transition Plan"
  },
]

const Advantages = () => {
  return (
    <div className='bg-customBlue'>
    <div className='container mx-auto px-7 py-10 fade-in-bottom'>
  <h2 className='text-5xl font-bold mb-8 text-white'>What Sets Us Apart</h2>

  <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {advantagesList.map((advantage, index) => (
      <div key={index} className='bg-gray-100 rounded-3xl flex gap-5 p-5'>
        <img className='h-20 w-20 object-contain' src={advantage.img} alt="" />
        <p className='text-sm'>{advantage.text}</p>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

export default Advantages