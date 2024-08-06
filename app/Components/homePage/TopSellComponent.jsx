"use client";

import { topSellSectionCards } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function TopSellComponent() {
  const animetionVariants = {
    first: {
      initial: {
        opacity: 0,
        x: -150,
        scale: 0.5,
      },
      whileInView: { opacity: 1, x: 0, scale: 1 },
      transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
    },

    second: {
      initial: {
        opacity: 0,
        x: 150,
        scale: 0.5,
      },
      whileInView: { opacity: 1, x: 0, scale: 1 },
      transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <>
      <hr />
      <div className="my-5">
        <div className="w-1/2 h-auto mx-auto my-10 flex justify-center items-center gap-5 flex-col">
          <motion.h1
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            className="font-bold text-2xl"
          >
            Explore Our Top-Selling Vehicles
          </motion.h1>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            className="hover:text-orange-500"
          >
            At Auto Impire, we’re proud to showcase our top-selling cars, each
            representing the pinnacle of excellence in their respective
            categories. Discover why these models have captured the hearts of
            our customers and continue to lead the way in luxury and performance
          </motion.p>
          <div className="flex justify-evenly items-center gap-3 my-5">
            {topSellSectionCards.map((value, index) => (
              <div key={value.id} className="flex justify-evenly items-center">
                <div className="w-80 h-[515px] text-center ">
                  <motion.div
                    initial={
                      animetionVariants[index === 0 ? "first" : "second"]
                        .initial
                    }
                    whileInView={
                      animetionVariants[index === 0 ? "first" : "second"]
                        .whileInView
                    }
                    transition={
                      animetionVariants[index === 0 ? "first" : "second"]
                        .transition
                    }
                  >
                    <Image
                      src={value.image}
                      alt="Top Sell Cars"
                      className="rounded-xl object-cover"
                    />
                  </motion.div>
                  <motion.h1
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      ease: "easeIn",
                    }}
                    className="text-lg font-bold my-3"
                  >
                    {value.model}
                  </motion.h1>
                  <motion.p
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.6,
                      duration: 0.5,
                      ease: "easeIn",
                    }}
                    className="mx-5 text-justify"
                  >
                    {value.modelDetails}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSellComponent;
