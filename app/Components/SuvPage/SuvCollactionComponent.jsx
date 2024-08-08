"use client"


import Image from "next/image";
import React from "react";
import {
  SuvCollactionSection,
  SuvCollactionSectionCars,
} from "@/app/constants";
import Link from "next/link";
import { motion } from "framer-motion";

function SuvCollactionComponent() {
  return (
    <div className="mt-20 mb-10">
      <hr />
      <div className="w-full h-[5195px] mx-auto sm:h-[5100px] md:h-[2800px] lg:h-[1950px]">
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
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.9,
          }}
          className="text-center text-sm font-bold p-3 my-5 hover:text-zinc-700 sm:text-base lg:text-lg xl:text-2xl"
        >
          {SuvCollactionSection.title}
        </motion.h1>
        <motion.p
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.9,
          }}
          className="w-4/5 mx-10 my-5 text-sm hover:text-orange-500 sm:mx-auto"
        >
          {SuvCollactionSection.discription}
        </motion.p>
        <div className="w-4/5 h-auto  my-5 mx-auto  grid grid-cols-1 grid-rows-12 gap-2 place-items-center md:w-full md:gap-5 md:grid-cols-2 md:grid-rows-6 lg:w-4/5 lg:gap-5 lg:grid-cols-3 lg:grid-rows-4">
          {SuvCollactionSectionCars.map((cars) => (
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
        <h1
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.9,
          }}
          className="w-4/5 text-sm mx-auto my-5 hover:text-zinc-700 lg:text-lg"
        >
          Ready to elevate your driving experience? Browse our current
          collection and find the luxury car that’s perfect for you. For more
          details or to schedule a private viewing, don’t hesitate to contact
          us.
        </h1>
        <motion.p
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.9,
          }}
          className="text-center font-bold text-sm hover:text-orange-500 sm:text-base lg:text-lg xl:text-xl"
        >
          At Auto Impire, your next luxury car awaits.
        </motion.p>
      </div>
    </div>
  );
}

export default SuvCollactionComponent;
