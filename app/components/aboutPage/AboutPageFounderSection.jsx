"use client";

import Image from "next/image";
import { AboutFounderSection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function AboutPageFounderSection() {
  return (
    <div
      id="founder"
      className="mx-auto flex h-screen w-4/5 flex-col items-center justify-center overflow-x-hidden"
    >
      <motion.h1
        {...getAnimation("top")}
        className="text-center text-4xl font-bold italic text-stone-600"
      >
        {AboutFounderSection.title}
      </motion.h1>
      <div className="mx-auto flex w-full items-center justify-center space-y-3">
        <motion.div
          {...getAnimation("left", { delay: 1 })}
          className="flex h-full w-1/2 items-center justify-center"
        >
          <Image
            src={AboutFounderSection.Image}
            quality={100}
            alt="Founder page Image"
            className="h-4/5 w-4/5 rounded-xl bg-white"
          />
        </motion.div>
        <div className="w-1/2 space-y-3 p-5">
          <motion.p
            {...getAnimation("right", { delay: 1 })}
            className="text-left hover:text-orange-600"
          >
            <q> {AboutFounderSection.description}</q>
          </motion.p>
          <motion.h1
            {...getAnimation("bottom", { delay: 1 })}
            className="font-bold"
          >
            {AboutFounderSection.author}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default AboutPageFounderSection;
