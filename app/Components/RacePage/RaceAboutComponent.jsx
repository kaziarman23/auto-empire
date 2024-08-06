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
      <div className="w-4/5 h-[1590px] mx-auto">
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
          className="font-bold text-center text-2xl p-5 hover:text-zinc-700"
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
            className="font-bold text-xl my-5 hover:text-zinc-700"
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
            className=" hover:text-orange-500"
          >
            {RaceAboutSection.discription}
          </motion.p>
          <div className="w-2/3 h-full mx-auto my-10">
            <div className="flex justify-evenly items-center my-10">
              <div className="border-red-500">
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
                  className="mx-10 font-bold text-lg hover:text-zinc-700"
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
                  className="mx-10 hover:text-orange-500"
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
                className="w-[800px] h-60"
              >
                <Image
                  src={R_AboutOne}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="flex justify-evenly items-center my-10">
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
                className="w-[800px] h-60"
              >
                <Image
                  src={R_AboutTwo}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
              <div className="border-red-500">
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
                  className="mx-10 font-bold text-lg hover:text-zinc-700"
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
                  className="mx-10 hover:text-orange-500"
                >
                  {RaceAboutSection.explaintionTwo}
                </motion.p>
              </div>
            </div>

            <div className="flex justify-evenly items-center my-10">
              <div className="border-red-500">
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
                  className="mx-10 font-bold text-lg hover:text-zinc-700"
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
                  className="mx-10 hover:text-orange-500"
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
                className="w-[800px] h-60"
              >
                <Image
                  src={R_AboutThree}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="flex justify-evenly items-center my-10">
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
                className="w-[800px] h-60"
              >
                <Image
                  src={R_AboutFour}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
              <div className="border-red-500">
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
                  className="mx-10 font-bold text-lg hover:text-zinc-700"
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
                  className="mx-10 hover:text-orange-500"
                >
                  {RaceAboutSection.explaintionFour}
                </motion.p>
              </div>
            </div>

            <div className="flex justify-evenly items-center my-10">
              <div className="border-red-500">
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
                  className="mx-10 font-bold text-lg hover:text-zinc-700"
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
                  className="mx-10 hover:text-orange-500"
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
                className="w-[800px] h-60"
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
