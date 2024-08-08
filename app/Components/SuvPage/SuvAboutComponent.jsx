"use client";

import { SuvAboutSection } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function SuvAboutComponent() {
  return (
    <>
      <div className="bg-zinc-900">
        <div className="w-4/5 h-[830px] mx-auto sm:h-[650px]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-full h-10 text-sm text-center font-bold p-2 hover:text-zinc-700 sm:text-base lg:text-lg xl:text-2xl"
          >
            About SUV Cars
          </motion.h1>
          <div className="w-full h-auto mx-auto flex justify-center items-center flex-col lg:flex-row lg:justify-evenly">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-[300px] h-[200px] flex justify-center items-center my-4 lg:w-[300px] lg:h-[150px] xl:h-[300px]"
            >
              <Image
                src={SuvAboutSection.image}
                alt="Suv about page car"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <div className="w-full h-full flex justify-center items-center flex-col gap-3 lg:w-[290px]">
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
              >
                {SuvAboutSection.discription}
              </motion.p>
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
              >
                {SuvAboutSection.discriptionTwo}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuvAboutComponent;
