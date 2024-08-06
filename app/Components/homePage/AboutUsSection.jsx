"use client";

import Image from "next/image";
import React from "react";
import { aboutUsComponent } from "@/app/constants";
import { motion } from "framer-motion";

function AboutUsSection() {
  return (
    <>
      <hr />
      <div className="my-5">
        <div className="w-4/5 h-96 mx-auto my-10  flex justify-evenly items-center ">
          {aboutUsComponent.map((item) => (
            <>
              <div className="w-80 h-80" key={item.id}>
                <motion.div
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                    ease: "easeIn",
                  }}
                  className="w-full h-full border-2 relative flex flex-col justify-center items-center"
                >
                  <div className="opacity-0 hover:opacity-30">
                    <Image
                      src={item.image}
                      alt="about us image"
                      className="w-full h-full object-cover absolute left-0 top-0 transition-opacity duration-300 ease-in-out"
                    />
                  </div>

                  <div className="bg-black w-full h-full">
                    <h1 className="p-2 font-bold text-2xl text-center">
                      {item.title}
                    </h1>
                    <p className="mx-4">{item.discription}</p>
                  </div>
                </motion.div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUsSection;
