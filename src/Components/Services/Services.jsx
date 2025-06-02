import React from 'react'
import { img1, img3, img4, img5, img6 } from '../../imports'

const serviceList = [
    {
        name: "Solar PV System Design and Installation:",
        desc: "Our solar installation services integrate Tier-1 monocrystalline and bifacial PV modules, configured with advanced hybrid inverters (up to 3-phase 50kW), high-voltage lithium iron phosphate (LiFePO₄) battery banks, and energy monitoring platforms. We customize every installation based on load profiling, geospatial solar irradiance assessment, and optimal azimuth-tilt alignment for maximum yield.",
        img: img1
    },
    {
        name: "Energy Storage Solutions:",
        desc: "We deploy intelligent battery energy storage systems (BESS) designed to meet residential, commercial, and industrial energy demands. Our solutions offer high round-trip efficiency (>95%), extensive cycle life (6000+), and advanced BMS (Battery Management System) capabilities including cell balancing, temperature control, and over-discharge protection.",
        img: img3
    },
    {
        name: "Operations, Maintenance & Performance Optimization:",
        desc: "Our O&M services include: Remote monitoring via IoT-enabled platforms Preventive and corrective maintenance protocols Inverter firmware upgrades and MPPT diagnostics Thermal imaging and IV curve tracing for PV performance analysis",
        img: img4
    },
    {
        name: "Consulting & Energy Audits:",
        desc: "LumiGrid provides expert consulting for: Solar system feasibility and ROI analysis Load assessment and peak demand profiling Compliance with LEED and IFC EDGE green certification CAPEX and OPEX modeling for solar energy investments",
        img: img5
    },
    {
        name: "Smart Home & Grid Integration:",
        desc: "We design smart hybrid systems that enable grid interaction, net metering, and energy arbitrage. Our systems are future-proofed with smart load controllers, surge protection devices (SPD), anti-islanding features, and remote troubleshooting via mobile and desktop interfaces.",
        img: img6
    },
   
]

const Services = () => {
  return (
<div className='px-7 py-10 bg-customBlue'>
    <div className='container mx-auto'>
        <div>
            <h2 className='text-3xl font-bold text-white'>Services</h2>
        </div>

        <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>
            {serviceList.map((service, index) => (
                <div key={index} className='rounded-3xl bg-gray-900 p-5 shadow-lg'>
                    <img 
                        className='object-cover w-full h-52 rounded-2xl mb-5' 
                        src={service.img} 
                        alt={service.name} 
                    />
                    <h1 className='font-bold text-2xl text-customYellow mb-3'>{service.name}</h1>
                    <p className='text-sm'>{service.desc}</p>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default Services