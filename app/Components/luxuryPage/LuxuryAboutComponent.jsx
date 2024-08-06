"use client";

import { luxaryAboutSection, luxaryAboutSectionCards } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function LuxuryAboutComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-4/5 h-[900px] mx-auto">
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
          className="font-bold text-center text-2xl p-5 hover:text-zinc-700"
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
            className="font-bold text-xl my-5 hover:text-zinc-700"
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
            className="hover:text-orange-500"
          >
            {luxaryAboutSection.discription}
          </motion.p>
          <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-5 my-10">
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
                className="w-80 h-80"
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
                    <h1 className="text-lg text-center font-bold mt-2">
                      {value.pointTitle}
                    </h1>
                    <p className="mx-5">{value.pointDis}</p>
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
