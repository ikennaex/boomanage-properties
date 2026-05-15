import React from "react";
import { img12 } from "../../imports";
import {
  BuildingOfficeIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
  UsersIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <BuildingOfficeIcon className="w-5 h-5 text-gold-400" />,
    text: "Luxury Residential Properties",
  },
  {
    icon: <HomeModernIcon className="w-5 h-5 text-gold-400" />,
    text: "Commercial Real Estate",
  },
  {
    icon: <PresentationChartBarIcon className="w-5 h-5 text-gold-400" />,
    text: "Strategic Land Acquisitions",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-5 h-5 text-gold-400" />,
    text: "Property Marketing",
  },
  {
    icon: <UsersIcon className="w-5 h-5 text-gold-400" />,
    text: "Leasing Services",
  },
  {
    icon: <CurrencyDollarIcon className="w-5 h-5 text-gold-400" />,
    text: "Investment Advisory",
  },
  {
    icon: <LightBulbIcon className="w-5 h-5 text-gold-400" />,
    text: "Market Intelligence & Consultancy",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-5 h-5 text-gold-400" />,
    text: "Real Estate Development Solutions",
  },
];

const About = () => {
  return (
    <div className="bg-customBlue py-14">
      <div className="container mx-auto px-4 fade-in-bottom">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
              src={img12}
              alt="Boomanage Properties"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
              About Us
            </h2>

            <h3 className="text-2xl font-semibold text-gold-400 mb-4">
              About Boomanage Properties
            </h3>

            <p className="text-base leading-relaxed mb-6">
              At Boomanage Properties, we are committed to delivering exceptional
              real estate solutions tailored to the evolving needs of discerning
              clients, investors, and developers.
            </p>

            <p className="text-base leading-relaxed mb-6">
              As a premium real estate brokerage and advisory firm based in
              Lagos, we specialize in luxury residential properties, commercial
              real estate, strategic land acquisitions, property marketing,
              leasing, and investment advisory services.
            </p>

            {/* <div className="flex items-center gap-2 mb-6">
              <MapPinIcon className="w-5 h-5 text-gold-400" />
              <p className="text-sm">
                Serving premium real estate markets across Lagos including
                Banana Island, Ikoyi, Lekki, and other high-growth investment
                corridors.
              </p>
            </div> */}

            <p className="text-base leading-relaxed mb-6">
              Our approach combines market intelligence, professionalism,
              integrity, and deep industry expertise to help our clients make
              profitable and secure real estate decisions.
            </p>

            <p className="text-base leading-relaxed mb-6">
              From prestigious homes in Banana Island and Ikoyi to high-growth
              investment corridors in Lekki and beyond, we connect our clients
              with premium opportunities that create lasting value.
            </p>

            <p className="text-base leading-relaxed mb-8">
              At Boomanage Properties, we do not just sell properties — we help
              you build wealth, security, and legacy through real estate.
            </p>

            {/* <h3 className="text-2xl font-semibold text-gold-400 mb-4">
              Our Services
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  {service.icon}
                  {service.text}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;