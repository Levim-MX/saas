"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import logl1 from "@/assets/Logoo.png";
import Hair from "@/assets/HairFureLogo.png";
import Instagram from "@/assets/inestaLogo.png";
import LogoMAker from "@/assets/LogoMakr.png";
import Discord from "@/assets/Discord.png";
import Google from "@/assets/google.png";
import cylinderImage from "@/assets/cylinder.png";
import sphere3 from "@/assets/shpere3.png";

export const LogoTicker = () => {
  return (
    <div className="2xl:pt-8 pt-4 md:pt-8 lg:pt-5 flex relative md:justify-center overflow-x-hidden">
      <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 min-w-max"
          animate={{ x: ["-10%", "10%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 9,
            ease: "linear",
          }}
        >
          <Image src={logl1} alt="logl" className="logoSliderImage" />
          <Image src={Hair} alt="Hair" className="logoSliderImage" />
          <Image src={Instagram} alt="Instagram" className="logoSliderImage" />
          <Image src={LogoMAker} alt="LogoMAker" className="logoSliderImage" />
          <Image src={Discord} alt="Discord" className="logoSliderImage" />
          <Image src={Google} alt="Google" className="logoSliderImage" />
          {/* Duplicate for seamless loop */}
          <Image src={logl1} alt="logl" className="logoSliderImage" />
          <Image src={Hair} alt="Hair" className="logoSliderImage" />
          <Image src={Instagram} alt="Instagram" className="logoSliderImage" />
          <Image src={LogoMAker} alt="LogoMAker" className="logoSliderImage" />
          <Image src={Discord} alt="Discord" className="logoSliderImage" />
          <Image src={Google} alt="Google" className="logoSliderImage" />
        </motion.div>
      </div>
    </div>
  );
};
