"use client";

import { luxaryAboutSection, luxaryAboutSectionCards } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function LuxuryAboutComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-4/5 h-[1950px] mx-auto sm:h-[1450px] lg:h-[900px] xl:h-[750px]">
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
            ease: "easeInOut",
            duration: 1,
          }}
          className="font-bold text-center text-sm p-5 hover:text-zinc-700 sm:text-xl xl:text-2xl"
        >
          About Luxury Cars
        </motion.h1>
        <div className="mx-10">
          <motion.h1
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="font-bold text-sm my-5 hover:text-zinc-700 xl:text-lg"
          >
            {luxaryAboutSection.title}
          </motion.h1>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="text-sm hover:text-orange-500"
          >
            {luxaryAboutSection.discription}
          </motion.p>
          <div className="w-4/5 h-full grid grid-cols-1 grid-rows-5 gap-3 my-10 sm:grid-cols-2 sm:grid-rows-3 sm:w-full lg:grid-cols-3 lg:grid-rows-2">
            {luxaryAboutSectionCards.map((value) => (
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                }}
                key={value.id}
                className="w-60 h-80 sm:w-52 sm:h-96 lg:w-60 lg:h-80 xl:w-80 xl:h-60"
              >
                <div className="w-full h-full relative">
                  <div className="opacity-0 hover:opacity-30">
                    <Image
                      src={value.image}
                      alt="About Luxury cars Image"
                      placeholder="blur"
                      className="w-full h-full object-cover absolute left-0 top-0 transition-opacity duration-300 ease-in-out"
                    />
                  </div>

                  <div className="w-full h-full border-2 bg-black cursor-not-allowed">
                    <h1 className="text-sm text-center font-bold my-2">
                      {value.pointTitle}
                    </h1>
                    <p className="mx-5 text-sm">{value.pointDis}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default LuxuryAboutComponent;
