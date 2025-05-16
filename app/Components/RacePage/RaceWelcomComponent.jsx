"use client";

import React from "react";
import { RaceWelcomeSection } from "@/app/constants";
import Image from "next/image";
import R_WelcomeOne from "@/public/images/RacingCarImages/R_WelcomeOne.jpg";
import { motion } from "framer-motion";

function RaceWelcomeComponent() {
  return (
    <>
      <div>
        <div className="w-3/4 h-[1095px] mx-auto flex justify-evenly items-center flex-col  sm:h-[790px] xl:h-[600px]">
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
              ease: "easeInOut",
            }}
            className="font-bold text-sm  hover:text-zinc-700 md:text-base lg:text-2xl"
          >
            Auto empire’s Racing Car Collection
          </motion.h1>
          <motion.p
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="text-sm hover:text-orange-500 md:mx-10 lg:mx-10 xl:text-lg"
          >
            Feel the adrenaline rush with theRacing Car Models. Engineered for
            performance and built for speed, this racing marvel delivers
            exhilarating power and precision. Designed for those who crave the
            thrill of the track, it’s where engineering excellence meets
            high-octane excitement.
          </motion.p>

          <div className="w-4/5 h-auto flex justify-center items-center gap-5 flex-col lg:justify-evenly lg:flex-row lg:w-full">
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeInOut",
                delay: 0.6,
                duration: 1,
              }}
              className="w-40 h-40 lg:w-[700px] lg:h-[300px] xl:w-80 xl:h-80"
            >
              <Image
                src={R_WelcomeOne}
                alt="welcome car image"
                className="rounded-xl object-cover w-full h-full"
                placeholder="blur"
                quality={100}
              />
            </motion.div>
            <div className="w-full mx-5 xl:w-[600px]">
              {RaceWelcomeSection.map((item) => (
                <div key={item.id} className="my-2">
                  <motion.h3
                    initial={{
                      x: 50,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0.5,
                      duration: 1.2,
                    }}
                    className="font-bold text-base hover:text-zinc-700"
                  >
                    {item.point}
                  </motion.h3>
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
                      ease: "easeInOut",
                      delay: 0.7,
                      duration: 1.4,
                    }}
                    className="text-sm hover:text-orange-500"
                  >
                    {item.explaintion}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaceWelcomeComponent;
