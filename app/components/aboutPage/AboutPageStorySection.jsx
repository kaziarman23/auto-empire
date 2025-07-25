"use client";

import Image from "next/image";
import { AboutStorySection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function AboutPageStorySection() {
  return (
    <div id="story" className="mx-auto h-screen w-4/5 overflow-x-hidden">
      <motion.h1
        {...getAnimation("bottom")}
        className="mb-5 text-center text-5xl font-bold italic text-stone-600"
      >
        {AboutStorySection.heading}
      </motion.h1>
      {/* image section */}
      <div className="flex h-2/3 w-full items-center justify-center gap-5 p-5">
        <motion.div {...getAnimation("left")} className="h-full w-1/2">
          <Image
            alt="our story image"
            src={AboutStorySection.image}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-2xl object-cover"
          />
        </motion.div>
        <div className="w-1/2 space-y-3">
          <motion.h1 {...getAnimation("right")} className="text-3xl font-bold">
            {AboutStorySection.title}
          </motion.h1>
          <motion.p
            {...getAnimation("right")}
            className="cursor-text text-left hover:text-orange-600"
          >
            {AboutStorySection.description}
          </motion.p>
        </div>
      </div>
      {/* stats section */}
      <motion.div
        {...getAnimation("bottom")}
        className="mx-auto flex w-fit items-center justify-center gap-5 rounded-2xl border border-white font-bold"
      >
        <div className="space-y-2 rounded-xl p-5">
          <h1 className="">Monthly Readers</h1>
          <h3 className="text-center">1M+</h3>
        </div>
        <hr className="h-16 w-[1px] bg-stone-600" />
        <div className="space-y-2 rounded-xl p-5">
          <h1>Countries Reached</h1>
          <h3 className="text-center">30+</h3>
        </div>
        <hr className="h-16 w-[1px] bg-stone-600" />
        <div className="space-y-2 rounded-xl p-5">
          <h1>Events Covered</h1>
          <h3 className="text-center">150+</h3>
        </div>
        <hr className="h-16 w-[1px] bg-stone-600" />
        <div className="space-y-2 rounded-xl p-5">
          <h1>Expert Reviews Published</h1>
          <h3 className="text-center">1,000+</h3>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPageStorySection;
