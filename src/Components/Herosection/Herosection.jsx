import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css";
import { img12 } from "../../imports";

const Herosection = () => {
  return (
    <div
      className="hero-bg"
      style={{
        backgroundImage: `url(${img12})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <div className="container-content">
          <div className="lg:px-10 pt-14 container mx-auto px-7 h-fit lg:p-28 p-8 gap-4 flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col lg:items-start lg:text-left">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-customYellow rounded-sm"></div>
                <p className="text-white font-bold">
                  Welcome to Boomanage Properties
                </p>
              </div>

              <h1 className="lg:text-3xl lg:w-3/4 leading-[1.2] font-black header-text text-3xl text-white pb-6 slide-in-bottom">
                Building Wealth Through Real Estate & Business Advisory
              </h1>

              <p className="text-white">
                Boomanage Properties is a trusted indigenous firm offering
                expert services in real estate development, marketing,
                investment consulting, and business growth strategies.
              </p>

              <div className="pt-9 flex flex-row items-center gap-6 slide-in-left2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/2348135217518"
                >
                  <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-customYellow p-4 rounded-2xl font-bold text-white cursor-pointer">
                    <FaWhatsapp size={27} />
                    Chat us
                  </button>
                </a>
                <a href="mailto:info@lumigrid.com.ng">
                  <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center border-white hover:bg-white border-2 p-4 rounded-2xl font-bold text-white cursor-pointer">
                    <MdOutlineMail size={27} />
                    Email us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
