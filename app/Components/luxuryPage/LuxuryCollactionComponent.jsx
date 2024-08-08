"use client";

import Image from "next/image";
import React from "react";
import { CollactionLuxuryCars } from "@/app/constants";
import Link from "next/link";
import { motion } from "framer-motion";

function LuxuryCollactionComponent() {
  return (
    <div className="mt-20 mb-10">
      <hr />
      <div className="w-full h-[5185px] mx-auto md:h-[2850px] lg:h-[1900px]">
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
          className="text-center text-sm font-bold p-3 my-5 hover:text-zinc-700 sm:text-sm md:text-lg lg:text-2xl"
        >
          Discover Our Extensive Collection of Luxury Cars
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
          className="w-4/5 h-40 mx-5 my-5 hover:text-orange-500 text-sm sm:mx-auto lg:h-20"
        >
          We are thrilled to announce that our showroom now features an
          exclusive collection of luxury cars, meticulously curated to meet the
          highest standards of elegance and performance. At Auto Impire, we
          believe in offering our clients nothing but the best, and our latest
          collection exemplifies this commitment.
        </motion.p>

        <div className="w-4/5 h-auto  my-5 mx-auto  grid grid-cols-1 grid-rows-12 gap-2 place-items-center md:w-full md:gap-5 md:grid-cols-2 md:grid-rows-6 lg:w-4/5 lg:gap-5 lg:grid-cols-3 lg:grid-rows-4">
          {CollactionLuxuryCars.map((item) => (
            <div
              key={item.id}
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
                  src={item.image}
                  width={300}
                  height={200}
                  className="w-[300px] h-[200px] object-cover rounded-tl-xl rounded-tr-xl"
                  alt={item.name}
                />
                <div className="w-full h-[150px] border-t-2 rounded-bl-xl rounded-br-xl  bg-zinc-900 ">
                  <h1 className="ml-5 my-2">{item.name}</h1>
                  <h3 className="ml-5">Model : {item.model}</h3>
                  <p className="ml-5 my-2">Price : {item.price}$</p>
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
          className="w-4/5 h-28 text-sm mx-5 my-5 hover:text-orange-500 sm:mx-auto lg:h-10"
        >
          Ready to elevate your driving experience? Browse our current
          collection and find the luxury car that’s perfect for you. For more
          details or to schedule a private viewing, don’t hesitate to contact
          us.
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
          className="text-center font-bold text-sm hover:text-zinc-700 md:text-lg"
        >
          At Auto Impire, your next luxury car awaits.
        </motion.p>
      </div>
    </div>
  );
}

export default LuxuryCollactionComponent;
