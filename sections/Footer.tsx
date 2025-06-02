import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" mt-64  overflow-x-clip   ">
      {/* header of the section  */}
      <div className="flex flex-col items-center justify-center  py-7  gap-7 bg-gradient-to-t from-[#d4deff] via-[#EAEEFE]/100 to-transparent">
        <h1 className=" text-3xl py-2 text-center bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text 2xl:text-6xl md:text-5xl  font-bold">
          Sign up for <br /> free today
        </h1>
        <p className=" px-7 tracking-tighter text-center w-[300px] sm:w-[470px] lg:w-[550px] sm:text-xl lg:text-2xl  ">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        {/* button div  */}
        <div className=" flex gap-5">
          <button className="btn-primary">Get for free</button>
          <button className="btn-secondary ">Learn more</button>
        </div>
      </div>

      {/* footer container  */}
      <div className=" bg-black flex flex-col items-center justify-center py-10 px-7  gap-10 md:flex-row   xl:pr-6  xl:space-x-72 2xl:space-x-96">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className=" text-white/80 text-center  tracking-tighter   text-sm   w-[300px] sm:text-lg lg:w-[550px] lg:text-2xl">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
          {/* social media icons */}
          <div className="text-white opacity-90 flex items-center justify-center gap-6 mt-5 text-xl cursor-pointer xl:gap-10">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* product,company,resources,legal countnet */}
        <div className=" text-white flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-14  xl:gap-20  ">
          <div className="flex flex-col gap-6">
            <h1 className=" text-xl">Product</h1>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Features
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Integrations
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Updates
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              FAQ
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Features
            </a>
          </div>
          {/* company  */}
          <div className="flex flex-col gap-6">
            <h1 className=" text-xl">Company</h1>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              About
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Blog
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Careers
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Manifesto
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h1 className=" text-xl">Legal</h1>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Privacy
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Terms
            </a>
            <a
              href="#"
              className=" opacity-75 hover:opacity-100 transition-opacity"
            >
              Security
            </a>
          </div>
        </div>
      </div>
      {/* copy righ div  */}
      <div className="flex flex-col items-center justify-center  py-10  md:mt-0 bg-black ">
        <p className="text-white/60 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
