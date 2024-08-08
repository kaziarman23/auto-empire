"use client";

import { ReviewLuxuryCars } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function LuxuryReviewComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-4/5 h-[1200px] mx-auto lg:h-[500px]">
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
            delay: 0.4,
            duration: 1,
            ease: "easeIn",
          }}
          className="text-center p-5 font-bold text-sm hover:text-zinc-700 md:text-md lg:text-2xl"
        >
          Customer Reviews At Auto Impire
        </motion.h1>
        <div className="w-full h-auto gap-4 flex justify-center items-center flex-col lg:flex-row">
          {ReviewLuxuryCars.map((review) => (
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
                delay: 0.5,
                duration: 1,
                ease: "easeIn",
              }}
              className="w-80 h-[365px] border flex justify-center items-center flex-col lg:h-[400px]"
              key={review.id}
            >
              <div className="w-full h-32 flex justify-center items-center">
                <Image
                  src={review.image}
                  alt={review.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>

              <div className="bg-zinc-800 h-[237px] lg:h-[300px]">
                <p className="mx-5 my-2">{review.review}</p>
                <h3 className="mx-5">{review.author}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LuxuryReviewComponent;
