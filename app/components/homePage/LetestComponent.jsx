"use client";

import { latestSection, latestSectionImages } from "@/app/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function LetestComponent() {
  const animationConfig = [
    getAnimation("left", { delay: 0.2 }),
    getAnimation("bottom", { delay: 0.4 }),
    getAnimation("right", { delay: 0.6, opacityFrom: -10, opacityTo: 1 }),
  ];

  return (
    <>
      <div>
        <div className="mx-auto my-10 flex h-full w-11/12 flex-col items-center justify-center gap-5 overflow-hidden sm:h-screen xl:w-4/5">
          <motion.h1
            {...getAnimation("top")}
            className="text-2xl font-bold italic text-stone-600 md:text-xl xl:text-5xl"
          >
            {latestSection.title}
          </motion.h1>
          <motion.span
            {...getAnimation("left", { delay: 1 })}
            className="cursor-text text-left text-base hover:text-orange-500 sm:text-lg xl:text-lg"
          >
            {latestSection.description}
          </motion.span>
          <div className="my-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {latestSectionImages.map((img, index) => {
              return (
                <motion.div
                  {...animationConfig[index]}
                  className="h-40 w-40 object-cover md:h-52 md:w-52 lg:h-72 lg:w-72"
                  key={index}
                >
                  <Image
                    src={img.image}
                    alt="Latest Cars"
                    quality={100}
                    placeholder="blur"
                    className="rounded-xl object-cover"
                    title="Click it if you'r Interestate"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LetestComponent;
