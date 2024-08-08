"use client";

import { RaceAboutSection } from "@/app/constants";
import Image from "next/image";
import React from "react";
import R_AboutOne from "@/public/images/RacingCarImages/R_AboutOne.jpg";
import R_AboutTwo from "@/public/images/RacingCarImages/R_AboutTwo.jpg";
import R_AboutThree from "@/public/images/RacingCarImages/R_AboutThree.jpg";
import R_AboutFour from "@/public/images/RacingCarImages/R_AboutFour.jpg";
import R_AboutFive from "@/public/images/RacingCarImages/R_AboutFive.jpg";
import { motion } from "framer-motion";

function RaceAboutComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-full h-[1485px] mx-auto sm:h-[1305px] md:h-[1700px]">
        <motion.h1
          initial={{
            y: -50,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="font-bold text-center text-base p-5 hover:text-zinc-700 md:text-lg xl:text-2xl"
        >
          About Racing Cars
        </motion.h1>
        <div className="mx-10">
          <motion.h1
            initial={{
              x: -50,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="font-bold text-sm my-5 hover:text-zinc-700 md:text-base xl:text-xl"
          >
            {RaceAboutSection.title}
          </motion.h1>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="text-sm hover:text-orange-500 md:text-base"
          >
            {RaceAboutSection.discription}
          </motion.p>
          <div className="w-full h-auto mx-auto my-10 xl:w-2/3 ">
            <div className="flex justify-evenly items-center gap-2 my-10">
              <div className="w-40 md:w-60">
                <motion.h1
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="font-bold text-sm hover:text-zinc-700 md:text-lg"
                >
                  {RaceAboutSection.pointOne}
                </motion.h1>
                <motion.p
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text-sm hover:text-orange-500 md:text-lg"
                >
                  {RaceAboutSection.explaintionOne}
                </motion.p>
              </div>
              <motion.div
                initial={{
                  x: 50,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-40 h-40 md:w-60 md:h-60"
              >
                <Image
                  src={R_AboutOne}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="flex justify-evenly items-center gap-2 my-10">
              <motion.div
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-40 h-40 md:w-60 md:h-60"
              >
                <Image
                  src={R_AboutTwo}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
              <div className="w-40 md:w-60">
                <motion.h1
                  initial={{
                    x: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="font-bold text-sm hover:text-zinc-700 md:text-lg"
                >
                  {RaceAboutSection.pointTwo}
                </motion.h1>
                <motion.p
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text-sm  hover:text-orange-500 md:text-lg"
                >
                  {RaceAboutSection.explaintionTwo}
                </motion.p>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-2 my-10">
              <div className="w-40 md:w-60">
                <motion.h1
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="font-bold text-sm hover:text-zinc-700 md:text-lg"
                >
                  {RaceAboutSection.pointThree}
                </motion.h1>
                <motion.p
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text-sm hover:text-orange-500 md:text-lg"
                >
                  {RaceAboutSection.explaintionThree}
                </motion.p>
              </div>
              <motion.div
                initial={{
                  x: 50,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-40 h-40 md:w-60 md:h-60"
              >
                <Image
                  src={R_AboutThree}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="flex justify-evenly items-center gap-2 my-10">
              <motion.div
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-40 h-40 md:w-60 md:h-60"
              >
                <Image
                  src={R_AboutFour}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
              <div className="w-40 md:w-60">
                <motion.h1
                  initial={{
                    x: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="font-bold text-sm hover:text-zinc-700 md:text-lg"
                >
                  {RaceAboutSection.pointFour}
                </motion.h1>
                <motion.p
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text-sm hover:text-orange-500 md:text-lg"
                >
                  {RaceAboutSection.explaintionFour}
                </motion.p>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-2 my-10">
              <div className="w-40 md:w-60">
                <motion.h1
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="font-bold text-sm hover:text-zinc-700 md:text-lg"
                >
                  {RaceAboutSection.pointFive}
                </motion.h1>
                <motion.p
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text-sm hover:text-orange-500 md:text-lg"
                >
                  {RaceAboutSection.explaintionFive}
                </motion.p>
              </div>
              <motion.div
                initial={{
                  x: 50,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-40 h-40 md:w-60 md:h-60"
              >
                <Image
                  placeholder="blur"
                  src={R_AboutFive}
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceAboutComponent;
