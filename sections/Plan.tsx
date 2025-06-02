"use client";

import AnimatedGradientText from "@/components/AnimatedGradientText";
import Button from "@/components/Button";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import star from "@/assets/star.png";
import Irregularshape from "@/assets/Irregular shape.png";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
const Plan = () => {
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
      text: "management ",
      className:
        "bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text",
    },
  ];
  return (
    <section className="overflow-x-clip mb-64 xl:mb-96">
      {/* main container */}
      <div>
        {/* countnet div */}
        <div className=" lg:mb-28 mb-16 px-4  flex flex-col items-center gap-4">
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
              Boost your productivity
            </p>
          </motion.div>

          <h1 className=" 2xl:py-4 2xl:text-5xl md:text-5xl md: font-bold text-2xl text-center bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            A more effective way to <br /> track progress
          </h1>
          <p className=" z-10 w-[300px] px-7 tracking-tighter text-center  sm:w-[470px] lg:w-auto sm:text-lg lg:text-xl ">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        {/* card plans container */}
        <div className=" relative  flex flex-col lg:flex-row lg:items-end  lg:justify-center lg:px-5 lg:gap-5  items-center  gap-9 2xl:gap-36  ">
          {/* first card */}
          <div className="   flex flex-col w-[300px] justify-center bg-white shadow-xl rounded-2xl border border-gray-200 cursor-pointer">
            <div className="  relative w-[500px] ">
              <motion.img
                src={star.src}
                alt=" star"
                width={600}
                className=" hidden xl:block opacity-[80%] absolute  overflow-hidden  -top-52 -left-96  -z-10   "
                animate={{
                  y: [0, -80, 0],

                  rotate: [0, 20, 0],
                }}
                transition={{
                  duration: 9,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            {/* header of the card  */}
            <div className=" flex flex-col gap-6 mb-10 ml-10">
              <p className=" opacity-60">Free</p>
              <div className="flex flex-row items-center">
                <h1 className=" font-bold text-3xl">$0</h1>
                <p className=" opacity-50">/monthly</p>
              </div>
            </div>
            {/* button center div  */}
            <div className=" flex items-center justify-center">
              {" "}
              <Button variant="primary">Get started for free</Button>{" "}
            </div>

            {/* content inside the card like true tick */}
            {[
              "Up to 5 project members",
              "limited tasks and projects",
              "2GB storage",
              "Integrations",
              "Basic support",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex flex-row p-4 justify-start items-center gap-4 mx-5"
              >
                <IoMdCheckmark />
                <p className="">{text}</p>
              </div>
            ))}
          </div>
          {/* second card */}
          <div className=" p-2 flex flex-col  w-[300px]  justify-center bg-black shadow-xl rounded-2xl border border-gray-200 cursor-pointer transition-transform duration-500 hover:scale-105">
            {/* header of the card  */}
            <div className=" flex flex-col gap-6 mb-10 ml-10 pt-2 ">
              <div className="  flex flex-row justify-between ">
                <p className=" opacity-50 text-white">pro</p>
                <AnimatedGradientText className=" mr-3">
                  Most Popular
                </AnimatedGradientText>
              </div>

              <div className="flex flex-row items-center">
                <h1 className=" font-bold text-4xl text-white">$9</h1>
                <p className=" opacity-50 text-white">/monthly</p>
              </div>
            </div>
            {/* button center div  */}
            <div className=" flex items-center justify-center">
              {" "}
              <Button variant="secondary" className=" text-black">
                Sign up now
              </Button>{" "}
            </div>

            {/* content inside the card like true tick */}
            {[
              "Up to 25 project members",
              "Unlimited tasks and projects",
              "50GB storage",
              "Integrations",
              "Priority support",
              "Advanced analytics",
            ].map((text, idx) => (
              <div
                key={idx}
                className=" text-white flex flex-row p-4 justify-start items-center gap-4 mx-5"
              >
                <IoMdCheckmark className=" text-white" />
                <p className="">{text}</p>
              </div>
            ))}
          </div>
          {/* thread card */}
          <div className="   p-2 flex flex-col  w-[300px] justify-center bg-white shadow-xl rounded-2xl border border-gray-200 cursor-pointer">
            <div className=" relative w-[500px] ">
              <motion.img
                src={Irregularshape.src}
                alt=" Irregularshape"
                width={600}
                className=" hidden xl:block  absolute  overflow-hidden  -top-52 -right-40  opacity-[80%] -z-10   "
                animate={{
                  y: [100, -80, 100],

                  rotate: [0, 20, 0],
                }}
                transition={{
                  duration: 9,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            {/* header of the card  */}
            <div className=" flex flex-col gap-6 mb-10 ml-10">
              <p className=" opacity-60">Business</p>
              <div className="flex flex-row items-center">
                <h1 className=" font-bold text-4xl">$19</h1>
                <p className=" opacity-50">/monthly</p>
              </div>
            </div>
            {/* button center div  */}
            <div className=" flex items-center justify-center">
              {" "}
              <Button variant="primary">Get started for free</Button>{" "}
            </div>

            {/* content inside the card like true tick and the features */}
            {[
              "all in pro plan features",
              "Up to 50 project members",

              "200GB storage",

              "Advanced analytics",

              "Custom fields",
              "API access",
              "Advanced security features",
              "Dedicated account manager",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex flex-row p-4 justify-start items-center gap-4 mx-5"
              >
                <IoMdCheckmark />
                <p className="">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
