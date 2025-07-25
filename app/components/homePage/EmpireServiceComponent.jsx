"use client";

import Image from "next/image";
import { EmpireServiceSection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function EmpireServiceComponent() {
  return (
    <div className="mx-auto h-[100vh] w-4/5 overflow-hidden">
      <motion.h1
        {...getAnimation("top")}
        className="my-5 text-center text-4xl font-bold italic text-stone-600"
      >
        {EmpireServiceSection.title}
      </motion.h1>

      {/* grid section */}
      <div className="grid h-[85%] grid-cols-5 grid-rows-2 gap-2">
        <div className="col-span-2 space-y-3 p-5">
          <motion.h1
            {...getAnimation("left", { delay: 1.5 })}
            className="text-4xl"
          >
            {EmpireServiceSection.heading}
          </motion.h1>
          <motion.p
            {...getAnimation("left", { delay: 1.9 })}
            className="cursor-text text-base hover:text-orange-500"
          >
            {EmpireServiceSection.descriptionOne}
          </motion.p>
        </div>
        <motion.div
          {...getAnimation("right", { delay: 4.5 })}
          className="col-span-2 col-start-3 h-full w-full"
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
          className="col-start-5"
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
          className="row-start-2 h-full w-full"
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
          className="row-start-2 h-full w-full"
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
          className="row-start-2 h-full w-full"
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
          className="col-span-2 row-start-2 h-full w-full"
        >
          <Image
            src={EmpireServiceSection.ImageSix}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default EmpireServiceComponent;
