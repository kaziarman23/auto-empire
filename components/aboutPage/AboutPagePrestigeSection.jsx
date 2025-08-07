"use client";

import React from "react";
import { AboutPrestigeSection } from "../../app/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function AboutPagePrestigeSection() {
  return (
    <div id="about" className="mx-auto h-screen w-4/5 overflow-hidden">
      <motion.h1
        {...getAnimation("top")}
        className="mt-20 text-center text-4xl font-bold italic text-stone-600"
      >
        {AboutPrestigeSection.heading}
      </motion.h1>
      <div className="flex h-full w-full items-start justify-center">
        <div className="w-1/2 space-y-3 p-4">
          <motion.h1
            {...getAnimation("left", { delay: 0.5 })}
            className="text-4xl"
          >
            {AboutPrestigeSection.title}
          </motion.h1>
          <motion.p
            {...getAnimation("left", { delay: 1 })}
            className="text-left text-sm hover:text-orange-600"
          >
            {AboutPrestigeSection.description}
          </motion.p>
          <motion.p
            {...getAnimation("left", { delay: 1.5 })}
            className="text-left text-sm hover:text-orange-600"
          >
            {AboutPrestigeSection.descriptionTwo}
          </motion.p>
          <motion.p
            {...getAnimation("left", { delay: 2 })}
            className="text-left text-sm hover:text-orange-600"
          >
            {AboutPrestigeSection.descriptionThree}
          </motion.p>
        </div>
        {/* image side */}
        <div className="flex h-full w-1/2 items-start justify-center gap-5 p-10">
          <motion.div
            {...getAnimation("right", { delay: 2 })}
            className="flex h-1/2 w-full items-center justify-center gap-2"
          >
            <Image
              src={AboutPrestigeSection.imageOne}
              alt="about us image"
              className="h-full w-full rounded-xl object-cover"
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPagePrestigeSection;
