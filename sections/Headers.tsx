import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export const Headers = () => {
  return (
    <header className=" sticky top-0 backdrop-blur-sm z-40">
      <div className="  text-white flex items-center justify-center py-3 px-3 gap-4 bg-black">
        <p className=" hidden lg:flex text-white/60">
          streamline your workflow and boost your productivity
        </p>
        <p className="cursor-pointer z-40">View the complete Kit</p>

        <IoArrowForwardSharp className="cursor-pointer" />
      </div>
      <div className=" mt-5 flex items-center lg:ml-10">
        <Image
          className=" ml-3"
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <div className="flex items-center justify-end w-full md:px-10 gap-4 lg:px-10">
          <nav className="hidden md:flex lg:text-[20px] lg:gap-14 gap-10 mr-3">
            <a href="#home" className="hover:text-blue-400">
              About
            </a>

            <a href="#about" className="hover:text-blue-400">
              Features
            </a>

            <a href="#services" className="hover:text-blue-400">
              Customers
            </a>

            <a href="#contact" className="hover:text-blue-400">
              Updates
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Help
            </a>
          </nav>
          <RxHamburgerMenu className=" md:hidden w-[40px] h-[40px] mr-6 " />
          <button className=" hidden md:flex hover:bg-blue-500 transition-colors duration-300 rounded-[18px] text-white bg-black px-3 py-3 cursor: pointer  focus:outline">
            <span>Get for free </span>
          </button>
        </div>
      </div>
    </header>
  );
};
