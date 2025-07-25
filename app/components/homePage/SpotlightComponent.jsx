"use client";

import Image from "next/image";
import { SpotlightSection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function SpotlightComponent() {
  return (
    <div className="overflow-x-hidden mx-auto h-[100vh] w-4/5">
      <motion.h1
        {...getAnimation("top")}
        className="mb-6 mt-12 text-center text-4xl font-bold italic text-stone-600"
      >
        {SpotlightSection.title}
      </motion.h1>

      <div className="flex items-start justify-center gap-5">
        <div className="h-full w-4/6 space-y-5">
          <motion.h1
            {...getAnimation("left", { delay: 0.8 })}
            className="text-4xl font-bold"
          >
            {SpotlightSection.headline}
          </motion.h1>
          <motion.p
            {...getAnimation("left", { delay: 1.5 })}
            className="cursor-text text-base hover:text-orange-500"
          >
            {SpotlightSection.descriptionOne}
          </motion.p>
          <motion.p
            {...getAnimation("left", { delay: 2 })}
            className="cursor-text text-base hover:text-orange-500"
          >
            {SpotlightSection.descriptionTwo}
          </motion.p>
          <motion.p
            {...getAnimation("left", { delay: 2.5 })}
            className="cursor-text text-base hover:text-orange-500"
          >
            {SpotlightSection.descriptionThree}
          </motion.p>
        </div>

        <motion.div
          {...getAnimation("right", { delay: 4 })}
          className="flex h-full w-2/6 flex-col items-center justify-center"
        >
          <Image
            src={SpotlightSection.ImageOne}
            alt="poster image one"
            quality={100}
            placeholder="blur"
            className="rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default SpotlightComponent;
