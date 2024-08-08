"use client";

import Image from "next/image";
import React from "react";
import {
  RaceCollactionSection,
  RaceCollactionSectionCars,
} from "@/app/constants";
import Link from "next/link";
import { motion } from "framer-motion";

function RaceCollactionComponent() {
  return (
    <div className="mt-20 mb-10">
      <hr />
      <div className="w-full h-[5300px] mx-auto sm:h-[5100px] lg:h-[2800px] xl:h-[2000px]">
        <motion.h1
          initial={{
            y: -100,
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
          className="text-center text-base font-bold p-3 my-5 hover:text-zinc-700 lg:text-lg xl:text-2xl"
        >
          {RaceCollactionSection.title}
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
          className="w-full h-40 text-sm mx-2 my-5 hover:text-orange-500 sm:w-4/5  sm:mx-auto sm:h-20 lg:text-lg xl:text-xl"
        >
          {RaceCollactionSection.discription}
        </motion.p>

        <div className="w-4/5 h-auto  my-5 mx-auto grid grid-cols-1 grid-rows-12 gap-2 place-items-center lg:grid-cols-2 lg:grid-rows-6 xl:grid-rows-4 xl:grid-cols-3">
          {RaceCollactionSectionCars.map((cars) => (
            <div
              key={cars.id}
              className="w-full h-full flex justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, ease: "easeInOut" }}
                className="w-[300px] h-[350px] my-5 overflow-hidden"
              >
                <Image
                  src={cars.image}
                  width={300}
                  height={200}
                  className="w-[300px] h-[200px] object-cover rounded-tl-xl rounded-tr-xl"
                  alt={cars.name}
                />
                <div className="w-full h-[150px] border-t-2 rounded-bl-xl rounded-br-xl  bg-zinc-900 ">
                  <h1 className="ml-5 my-2">{cars.name}</h1>
                  <h3 className="ml-5">Model : {cars.model}</h3>
                  <p className="ml-5 my-2">Price : {cars.price}$</p>
                  <p className="ml-5 my-2 text-blue-500">
                    <Link href="/contact-us">Get it Now</Link>
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
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
          className="w-4/5 text-sm mx-auto my-5 hover:text-orange-500  lg:text-lg xl:text-xl"
        >
          {RaceCollactionSection.about}
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
            ease: "easeInOut",
            duration: 1,
          }}
          className="font-bold w-4/5 mx-auto text-sm hover:text-zinc-700  lg:text-lg xl:text-xl"
        >
          {RaceCollactionSection.ending}
        </motion.p>
      </div>
    </div>
  );
}

export default RaceCollactionComponent;
