"use client";

import { luxuryPageWelcomeSection } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function LuxuryWelcomeComponent() {
  return (
    <>
      <div>
        <div className="w-3/4 h-[600px] mx-auto flex justify-evenly items-center flex-col gap-5">
          <motion.h1
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            }}
            className="font-bold text-2xl hover:text-zinc-700"
          >
            {luxuryPageWelcomeSection.title}
          </motion.h1>
          <motion.p
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            }}
            className="mx-10 hover:text-orange-500"
          >
            {luxuryPageWelcomeSection.discription}
          </motion.p>

          <div className="flex justify-evenly items-center gap-5">
            <div className="w-[600px] mx-5">
              <motion.h2
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
                  duration: 1,
                  delay: 0.6,
                }}
                className="text-center font-bold text-xl hover:text-zinc-700"
              >
                {luxuryPageWelcomeSection.question}
              </motion.h2>
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <motion.h3
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
                      duration: 1,
                      delay: 0.7,
                    }}
                    className="font-bold hover:text-zinc-700"
                  >
                    {luxuryPageWelcomeSection.answerOne}
                  </motion.h3>
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
                      duration: 0.8,
                      delay: 0.8,
                    }}
                    className="hover:text-orange-500"
                  >
                    {luxuryPageWelcomeSection.answerDis}
                  </motion.p>
                </div>
                <div>
                  <motion.h3
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
                      duration: 1,
                      delay: 0.9,
                    }}
                    className="font-bold hover:text-zinc-700"
                  >
                    {luxuryPageWelcomeSection.answerTwo}
                  </motion.h3>
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
                      duration: 0.8,
                      delay: 1,
                    }}
                    className="hover:text-orange-500"
                  >
                    {luxuryPageWelcomeSection.answerDisTwo}
                  </motion.p>
                </div>
                <div className="font-bold">
                  <motion.h3
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
                      duration: 1,
                      delay: 1.1,
                    }}
                    className="font-bold hover:text-zinc-700"
                  >
                    {luxuryPageWelcomeSection.answerThree}
                  </motion.h3>
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
                      duration: 0.8,
                      delay: 1.2,
                    }}
                    className="hover:text-orange-500"
                  >
                    {luxuryPageWelcomeSection.answerDisThree}
                  </motion.p>
                </div>
                <div className="font-bold">
                  <motion.h3
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
                      duration: 1,
                      delay: 1.3,
                    }}
                    className="font-bold hover:text-zinc-700"
                  >
                    {luxuryPageWelcomeSection.answerFour}
                  </motion.h3>
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
                      duration: 0.8,
                      delay: 1.4,
                    }}
                    className="hover:text-orange-500"
                  >
                    {luxuryPageWelcomeSection.answerDisFour}
                  </motion.p>
                </div>
              </div>
            </div>

            <motion.div
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
                duration: 0.8,
                delay: 1.2,
              }}
              className="w-80 h-80"
            >
              <Image
                src={luxuryPageWelcomeSection.image}
                alt="welcome car image"
                className="rounded-xl"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LuxuryWelcomeComponent;
