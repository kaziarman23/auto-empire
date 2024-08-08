"use client";

import { motion } from "framer-motion";
import React from "react";

function SuvWelcomeComponent() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/images/SuvCarImages/S_WelcomeOne.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content absolute inset-x-0 bottom-0 p-6">
        <div className="max-w-xl mx-auto">
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
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="mb-5 text-sm font-bold text-center sm:text-base md:text-lg xl:text-2xl"
          >
            Your Ultimate Destination for Premium SUVs
          </motion.h1>
          <motion.p
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="text-sm"
          >
            Discover the perfect blend of power, style, and versatility at Auto
            Impire. Whether you&#39;re seeking rugged off-road capabilities,
            luxurious comfort, or advanced technology, we’ve got the SUV that
            matches your lifestyle. Explore our curated selection of top-rated
            SUVs from leading brands, and drive with confidence knowing you’ve
            chosen from the best in the industry.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default SuvWelcomeComponent;
