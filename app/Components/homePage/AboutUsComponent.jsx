"use client";

import Image from "next/image";
import React from "react";
import { aboutUsSection } from "@/app/constants";
import { motion } from "framer-motion";

function AboutUsComponent() {
  return (
    <>
      <hr />
      <div className="my-5">
        <motion.h1 
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
          ease: "easeIn",
        }}
        className="text-center w-full h-10 font-bold text-2xl">
          About Us
        </motion.h1>
        <div className="w-1/2 h-[1080px] mx-auto mb-10 flex justify-center items-center flex-col gap-5 sm:h-[1160px] lg:w-4/5 lg:flex-row lg:h-[400px] xl:h-[500px]">
          {aboutUsSection.map((item) => (
            <div className="w-80 h-80 lg:w-60 lg-h-60 xl:w-80 xl:h-96" key={item.id}>
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "easeIn",
                }}
                className="w-full h-full border-2 relative flex flex-col justify-center items-center"
              >
                <div className="opacity-0 hover:opacity-30">
                  <Image
                    src={item.image}
                    alt="about us image"
                    className="w-full h-full object-cover absolute left-0 top-0 transition-opacity duration-300 ease-in-out"
                  />
                </div>

                <div className="bg-black w-full h-full">
                  <h1 className="p-2 font-bold text-sm text-center lg:text-sm xl:text-2xl">
                    {item.title}
                  </h1>
                  <p className="mx-4 lg:text-sm xl:text-lg">{item.discription}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUsComponent;
