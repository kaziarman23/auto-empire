"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactHeroSection } from "../../constants";
import { getAnimation } from "@/utils/Animation";

function ContactPageHeroSection() {
  return (
    <div className="mx-auto h-screen w-4/5 overflow-hidden">
      <motion.h1
        {...getAnimation("top")}
        className="mb-10 mt-20 text-center text-5xl font-bold italic text-stone-600"
      >
        {ContactHeroSection.title}
      </motion.h1>

      <div className="flex items-center justify-center">
        <motion.div
          {...getAnimation("left", { delay: 0.2 })}
          className="h-full w-1/2 space-y-5 p-5"
        >
          <h1 className="text-2xl font-bold">Our Location</h1>
          <p className="cursor-text text-left hover:text-orange-500">
            {ContactHeroSection.discription}
          </p>
          <h4>{ContactHeroSection.subtitle}</h4>
          <p className="cursor-text hover:text-orange-500">
            {ContactHeroSection.openDay}
          </p>
          <p className="cursor-text hover:text-orange-500">
            {ContactHeroSection.Appointment}
          </p>
        </motion.div>

        <motion.div
          {...getAnimation("right", { delay: 0.4 })}
          className="h-1/2 w-1/2"
        >
          <Image
            alt="location image"
            src={ContactHeroSection.image}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPageHeroSection;
