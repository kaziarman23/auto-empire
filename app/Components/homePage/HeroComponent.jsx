"use client";

import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <>
      {/* <div className="w-1/2 h-[600px] relative mx-auto"> */}
      <div className="w-1/2 h-[430px] relative mx-auto sm:h-[350px] md:h-[390px]
      lg:h-[400px] xl:h-[600px]">
        <Image
          src={heroSection.image}
          alt="hero"
          quality={100}
          className="object-cover"
          placeholder="blur"
        />
        {/* <div className="w-full h-28 absolute top-80 p-5 text-white  flex justify-center items-center flex-col gap-2 "> */}
        <div className="w-full h-auto absolute top-20 left-0 p-5 text-white  flex justify-center items-center flex-col gap-2 sm:top-36 md:top-44 lg:top-60 xl:top-80">
          <motion.h1
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
            }}
            className="text-sm font-bold lg:text-2xl"
          >
            {heroSection.title}
          </motion.h1>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="w-full text-sm hover:text-orange-500"
          >
            {heroSection.discription}
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
