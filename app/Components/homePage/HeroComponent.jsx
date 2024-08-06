"use client"

import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <>
      <div className="w-1/2 h-[600px] relative mx-auto">
        <Image
          src={heroSection.image}
          alt="hero"
          quality={100}
          className="object-cover"
          placeholder="blur"
        />
        <div className="w-full h-28 absolute top-80 p-5 text-white  flex justify-center items-center flex-col gap-2">
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
            className="text-2xl font-bold"
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
          className="text-sm text-justify hover:text-orange-500">{heroSection.discription}</motion.p>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
