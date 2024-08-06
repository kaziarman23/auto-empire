"use client";

import { SuvAboutSection } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function SuvAboutComponent() {
  return (
    <>
      <div>
        <div className="w-full h-[450px] bg-zinc-900">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-full h-10 text-2xl text-center font-bold p-2 hover:text-zinc-700"
          >
            About SUV Cars
          </motion.h1>
          <div className="w-3/4 h-[400px] mx-auto flex justify-center items-center">
            <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
            className="w-1/2 h-full flex justify-evenly items-center">
              <Image
                src={SuvAboutSection.image}
                alt="Suv about page car"
                className="w-1/2 h-1/2 object-cover rounded-lg"
              />
            </motion.div>
            <div className="w-1/2 h-full flex justify-center items-center flex-col gap-3">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="font-bold text-xl hover:text-zinc-700"
              >
                {SuvAboutSection.title}
              </motion.h1>
              <motion.p
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{
                 delay: 1,
                 duration: 1,
                 ease: "easeInOut",
               }}
               className="hover:text-orange-500"
              >{SuvAboutSection.discription}</motion.p>
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="font-bold text-xl hover:text-zinc-700"
              >
                {SuvAboutSection.titleTwo}
              </motion.h1>
              <motion.p
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{
                 delay: 1,
                 duration: 1,
                 ease: "easeInOut",
               }}
               className="hover:text-orange-500"
               >{SuvAboutSection.discriptionTwo}</motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuvAboutComponent;
