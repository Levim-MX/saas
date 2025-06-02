"use client";
import React, { useRef } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll({
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollY, [0, 500], [150, -150]);
  const smoothY = useSpring(translateY, {
    stiffness: 100, // صلابة الربيع؛ قيمة أعلى = أسرع استجابة
    damping: 20, // تخميد/مقاومة؛ قيمة أعلى = حركة أكثر نعومة وأقل ارتداد
    restDelta: 0.5, // عندما تكون منقولة أقل من هذه القيمة، يتوقف الربيع
  });
  const words = [
    {
      text: "Pathway",
    },
    {
      text: "to",
    },
    {
      text: "productivity.",
      className:
        " bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text",
    },
  ];

  return (
    <section className="  z-50 md:pt-5 md:pb-10 pt-8 px-5 pb-40 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_90%,rgba(56,189,248,0)_100%)] overflow-x-clip">
      <div className=" md:flex items-center">
        <div className=" md:w-[678px] lg:w-[70%] flex flex-col z-10">
          <p className=" border-[#222]/20  border-dashed border-[2px] rounded-xl  w-fit px-2 py-1">
            Version 2.0 is here
          </p>

          <TypewriterEffect
            words={words}
            className=" mt-3 md:w-[500px] xl:w-auto  "
          />

          <p className=" md:text-3xl text-lg py-5 tracking-tighter">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className=" md:text-1xl flex gap-4">
            <button className=" btn-primary">Get for free</button>
            <button className=" btn-secondary flex gap-2 items-center group ">
              <span>Learn more </span>
              <IoArrowForwardSharp className="cursor-pointer h-5 w-5 text-black   transition-colors  duration-200  ease-in-out group-hover:text-blue-700  " />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-auto  md:flex-1 relative z-10 ">
          <motion.img
            src={cogImage.src}
            alt="cog"
            width={820}
            height={820}
            className=" lg:right-0  md:h-full  md:max-w-none  "
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          />

          <motion.img
            src={cylinderImage.src}
            alt="cylinder Image"
            width={220}
            height={220}
            style={{ y: smoothY }}
            className=" hidden md:block -top-8 -left-32 md:absolute "
          />
          <motion.img
            src={noodle.src}
            alt="noodle Image"
            width={220}
            className="  hidden lg:block lg:z-10 absolute top-[524px] left-[448px] rotate-[30deg]"
            style={{ rotate: 30, y: smoothY }}
          />
        </div>
      </div>
    </section>
  );
};
