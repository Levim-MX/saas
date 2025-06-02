"use client";

import { section } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import cube from "@/assets/cube (1).png";
import Integration from "@/assets/Integration ecosystem1.png";

import GoalTraking from "@/assets/trakingGoal.png";

import { motion } from "framer-motion";
import Button from "@/components/Button";

const EverythingYouNeed = () => {
  return (
    <section className=" mb-64 xl:mb-96 overflow-x-clip">
      {/* main Container */}
      <div className="">
        {/* first Container (content Container) */}
        <div className=" mb-16 px-4  flex flex-col items-center gap-4">
          <motion.div
            className="inline-block rounded-[15px] p-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #001E80, #FF69B4, #00C6FB, #001E80, #FF69B4)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <p className="px-3 py-1 bg-white rounded-[13px]">
              Everything you need for
            </p>
          </motion.div>
          <h1 className=" 2xl:py-4 2xl:text-6xl md:text-5xl md: font-bold text-2xl text-center bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Streamlined for easy <br className=" " />
            management
          </h1>
          <p className=" px-5 tracking-tighter text-center w-[300px] sm:w-[470px] lg:w-auto sm:text-lg lg:text-2xl  ">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        {/* second  Container (card Container) */}
        <div className="  lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-12 grid grid-cols-1 justify-items-center  gap-10 px-5  ">
          <motion.div
            className="  w-[350px] sm:w-[400px] md:w-[468px] tracking-normal text-center flex flex-col items-center p-7  bg-white shadow-xl rounded-xl border border-gray-200  cursor-pointer "
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Image src={GoalTraking} alt="GoalTraking" className="" />
            <h1 className="font-bold mt-4 md:text-2xl sm:text-2xl">
              Goal setting and tracking
            </h1>
            <p className="mt-2 w-[320px] md:w-[468px]  sm:text-xl sm:w-96 md:px-7">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </motion.div>
          <motion.div
            className=" w-[350px] sm:w-[400px] md:w-[468px] tracking-normal text-center flex flex-col items-center p-7  bg-white shadow-xl rounded-xl border border-gray-200  cursor-pointer "
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Image src={Integration} alt="Integration" />
            <h1 className="font-bold mt-4 md:text-2xl sm:text-2xl">
              Integration ecosystem
            </h1>
            <p className="mt-2 w-[320px] md:w-[468px]  sm:text-xl sm:w-96 md:px-7">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
