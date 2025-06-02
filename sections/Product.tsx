"use client";

import React from "react";
import Image from "next/image";
import product from "@/assets/product-image.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoIosLeaf } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { GrSecure } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import sphere3 from "@/assets/shpere3.png";
import StarShape from "@/assets/startShape.png";
import pyramid from "@/assets/pyramid.png";
import { useTransform, motion } from "framer-motion";
const Product = () => {
  return (
    <section className=" mt-48  mb-64 xl:mb-96 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#d4deff,#EAEEFE_90%,rgba(56,189,248,0)_100%)] overflow-x-clip">
      <div className=" px-1 flex flex-col ">
        {/* content of section dev */}
        <div className="  2xl:text-xl md:gap-6 px-14 flex flex-col gap-4  items-center justify-center pb-4">
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
              Boost productivity
            </p>
          </motion.div>
          <h1 className=" 2xl:py-4 2xl:text-5xl md:text-5xl md: font-bold text-xl text-center bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            A more effective way <br className=" 2xl:hidden" /> to track
            progress
          </h1>
          <p className=" 2xl:text-3xl 2xl:w-auto md:w-[600px] md:text-2xl text-lg tracking-tighter text-center z-10">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        {/* image dev */}
        <div className=" mb-32 ">
          <div className=" hidden md:block md:relative  ">
            <motion.img
              src={pyramid.src}
              alt=" pyramid"
              className=" opacity-[90%] absolute  overflow-hidden w-52 -right-28 xl:w-64 2xl:w-[360px] 2xl:top-32 2xl:-right-40"
              animate={{ y: [0, 80, 0] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={sphere3.src}
              alt="sphere3"
              className="absolute top-24 right-1/2 opacity-[95%] 2xl:top-64 2xl:right-[53%] origin-center"
              animate={{ y: [0, -80, 0], scale: [1, 1.05, 1] }}
              transition={{
                duration: 6, // المدة الكاملة لدورة واحدة (ثواني)
                repeat: Infinity, // تكرار لا نهائي
                repeatType: "reverse", // يبدّل الاتجاه عند كل نهاية (للصعود ثم النزول)
                ease: "easeInOut", // انسيابية الحركة
              }}
            />
          </div>
          <Image
            src={product}
            alt="product"
            loading="lazy"
            className="2xl:max-w-[1800px] mx-auto"
          />
        </div>
        {/* grid content */}
        <div className=" mb-40 mx-16 grid grid-cols-1 gap-40 md:grid-cols-2 xl:grid-cols-4 xl:gap-20 ">
          <div className=" flex flex-col gap-2 sm:items-center md:items-start ">
            <IoIosLeaf size={35} className="text-green-500  " />

            <h1 className=" font-bold  text-[18px]  w-max">
              Integration ecosystem
            </h1>
            <p className="tracking-tighter">
              Track your progress and motivate your efforts everyday.
            </p>
            <button className=" font-sans flex  items-center gap-2 mt-auto">
              Learn more
              <IoArrowForwardSharp className=" text-[18px] cursor-pointer text-black  " />
            </button>
          </div>
          <div className=" flex flex-col gap-2 sm:items-center md:items-start">
            <GoGoal size={35} className=" text-red-400" />

            <h1 className=" font-bold  text-[18px]  w-max">
              Goal setting and tracking
            </h1>
            <p className="tracking-tighter">
              Set and track goals with manageable task breakdowns.
            </p>
            <button className=" font-sans flex  items-center gap-2 mt-auto">
              Learn more
              <IoArrowForwardSharp className=" text-[18px] cursor-pointer text-black  " />
            </button>
          </div>
          <div className=" flex flex-col gap-2 sm:items-center md:items-start ">
            <GrSecure size={35} className="text-[#4A4A4A]" />

            <h1 className=" font-bold  text-[18px]  w-max">
              Secure data encryption
            </h1>
            <p className="tracking-tighter">
              Ensure your data’s safety with top-tier encryption.
            </p>
            <button className=" font-sans flex  items-center gap-2 mt-auto">
              Learn more
              <IoArrowForwardSharp className=" text-[18px] cursor-pointer text-black  " />
            </button>
          </div>
          <div className=" flex flex-col gap-2 sm:items-center md:items-start">
            <MdNotificationsActive size={35} className="text-yellow-200" />

            <h1 className=" font-bold  text-[18px] w-max">
              Customization notifications
            </h1>
            <p className="tracking-tighter">
              Get alerts on tasks and deadlines that matter most.
            </p>
            <button className=" font-sans flex  items-center gap-2 mt-auto">
              Learn more
              <IoArrowForwardSharp className=" text-[18px] cursor-pointer text-black  " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
