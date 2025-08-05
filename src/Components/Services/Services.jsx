import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import FadeIn from '../fadein';
import { Link } from "react-router";

const services = [
  "Brokerage & Property Sourcing",
  "Deal Negotiation",
  "Real Estate Advisory & Development",
  "Business Initiation",
  "Business Development Advisory",
  "Investment Analysis",
  "Mortgage Loan Advisory",
  "Construction & Renovations",
  "Real Estate Investment Club",
  "Property Management",
];

const Services = () => {
  return (
    <section className="px-7 py-16 bg-customBlue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-down">
          Our Services
        </h2>
        <p className="text-gray-200 mb-12 animate-fade-in-up">
          Boomanage Properties offers a comprehensive suite of real estate and business development services tailored to help clients build wealth and make informed decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <FadeIn key={index} duration={100}>
              <div
                className="flex items-start gap-3 bg-white bg-opacity-5 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-10 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <FaCheckCircle className="text-customYellow mt-1" />
                <span className="text-left">{service}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link to="/services" className="text-customYellow font-semibold hover:underline">
        <button
          className="mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-yellow-400 transition duration-300 shadow-md"
        >
          View More Details
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
