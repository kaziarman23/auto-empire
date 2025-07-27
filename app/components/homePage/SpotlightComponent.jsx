"use client";

import Image from "next/image";
import { SpotlightSection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function SpotlightComponent() {
  return (
    <div className="mx-auto h-full w-11/12 overflow-hidden xl:h-[100vh] xl:w-4/5">
      <motion.h1
        {...getAnimation("top")}
        className="mb-6 mt-12 text-center text-lg font-bold italic text-stone-600 sm:text-2xl xl:text-4xl"
      >
        {SpotlightSection.title}
      </motion.h1>

      <div className="flex flex-col items-center justify-center gap-5 md:flex-row xl:items-start">
        <div className="h-full w-full space-y-5 xl:w-4/6">
          <motion.h1
            {...getAnimation("left", { delay: 0.8 })}
            className="text-lg font-bold md:text-base lg:text-xl xl:text-4xl"
          >
            {SpotlightSection.headline}
          </motion.h1>
          <motion.p
            {...getAnimation("left", { delay: 1.5 })}
            className="cursor-text text-sm hover:text-orange-500 md:text-xs lg:text-base"
          >
            {SpotlightSection.descriptionOne}
          </motion.p>
          <motion.p
            {...getAnimation("left", { delay: 2 })}
            className="cursor-text text-sm hover:text-orange-500 md:text-xs lg:text-base"
          >
            {SpotlightSection.descriptionTwo}
          </motion.p>
          <motion.p
            {...getAnimation("left", { delay: 2.5 })}
            className="cursor-text text-sm hover:text-orange-500 md:text-xs lg:text-base"
          >
            {SpotlightSection.descriptionThree}
          </motion.p>
        </div>

        <motion.div
          {...getAnimation("right", { delay: 4 })}
          className="flex h-full w-full flex-col items-center justify-center xl:w-2/6"
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
