import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./herosection.css";
import { img12, img13 } from "../../imports";

const Herosection = () => {
  return (
    <div
      className="hero-bg min-h-[80vh]"
      style={{
        backgroundImage: `url(${img13})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <div className="container-content">
          <div className="lg:px-10 pt-14 container mx-auto px-7 min-h-[80vh] lg:p-28 p-8 gap-4 flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col lg:items-start lg:text-left lg:max-w-3xl">
              <div className="flex items-center gap-1 my-5">
                <div className="w-2 h-2 bg-customYellow rounded-sm"></div>
                <p className="text-white font-bold">
                  Welcome to Boomanage Properties
                </p>
              </div>

              <h1 className="lg:text-5xl lg:w-3/4 leading-[1.2] font-black header-text text-3xl text-white pb-6 slide-in-fwd-center">
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
                  href="https://wa.me/2348139096910"
                >
                  <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center bg-customYellow p-4 rounded-2xl font-bold text-white cursor-pointer">
                    <FaWhatsapp size={27} />
                    Message us
                  </button>
                </a>
                <a href="mailto:info@boomanageproperties.net">
                  <button className="lg:rounded-2xl lg:px-8 flex gap-2 items-center border-white hover:bg-white border-2 p-4 rounded-2xl font-bold text-white hover:text-black cursor-pointer">
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
