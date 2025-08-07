"use client";

import Image from "next/image";
import { EmpireServiceSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function EmpireServiceComponent() {
  return (
    <div className="mx-auto w-11/12 overflow-hidden py-8 xl:h-[100vh] xl:w-4/5">
      {/* Title */}
      <motion.h1
        {...getAnimation("top")}
        className="mb-8 text-center text-xl font-bold italic text-stone-600 md:text-2xl xl:text-4xl"
      >
        {EmpireServiceSection.title}
      </motion.h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:h-[85%] xl:grid-cols-5 xl:grid-rows-2">
        {/* Text Section (spans 2 columns on large screens) */}
        <div className="space-y-4 p-4 sm:col-span-2">
          <motion.h1
            {...getAnimation("left", { delay: 1.5 })}
            className="text-lg font-semibold md:text-2xl xl:text-4xl"
          >
            {EmpireServiceSection.heading}
          </motion.h1>
          <motion.p
            {...getAnimation("left", { delay: 1.9 })}
            className="text-sm text-gray-600 transition-colors hover:text-orange-500 md:text-base"
          >
            {EmpireServiceSection.descriptionOne}
          </motion.p>
        </div>

        <motion.div
          {...getAnimation("right", { delay: 4.5 })}
          className="w-full xl:col-span-2 xl:col-start-3 xl:h-full"
        >
          <Image
            src={EmpireServiceSection.ImageOne}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          {...getAnimation("right", { delay: 6.5 })}
          className="w-full xl:col-start-5"
        >
          <Image
            src={EmpireServiceSection.ImageTwo}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          {...getAnimation("left", { delay: 3.5 })}
          className="w-full xl:row-start-2 xl:h-full"
        >
          <Image
            src={EmpireServiceSection.ImageThree}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          {...getAnimation("bottom", { delay: 5.5 })}
          className="w-full xl:row-start-2 xl:h-full"
        >
          <Image
            src={EmpireServiceSection.ImageFour}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          {...getAnimation("bottom", { delay: 7.5 })}
          className="w-full xl:row-start-2 xl:h-full"
        >
          <Image
            src={EmpireServiceSection.ImageFive}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          {...getAnimation("right", { delay: 2.8 })}
          className="h-full w-full sm:col-span-2 xl:row-start-2"
        >
          <Image
            src={EmpireServiceSection.ImageSix}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default EmpireServiceComponent;
