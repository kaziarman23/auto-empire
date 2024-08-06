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
        <div className="w-3/4 h-[600px] mx-auto flex justify-evenly items-center flex-col gap-5">
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
            className="font-bold text-2xl mt-5 hover:text-zinc-700"
          >
            Auto Impire’s Racing Car Collection
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
            className="mx-10 hover:text-orange-500"
          >
            Feel the adrenaline rush with theRacing Car Models. Engineered for
            performance and built for speed, this racing marvel delivers
            exhilarating power and precision. Designed for those who crave the
            thrill of the track, it’s where engineering excellence meets
            high-octane excitement.
          </motion.p>

          <div className="flex justify-evenly items-center gap-5">
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
              className="w-80 h-80 "
            >
              <Image
                src={R_WelcomeOne}
                alt="welcome car image"
                className="rounded-xl object-cover w-full h-full"
                placeholder="blur"
                quality={100}
              />
            </motion.div>
            <div className="w-[600px] mx-5">
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
                    className="font-bold hover:text-zinc-700"
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
                    className="hover:text-orange-500"
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
