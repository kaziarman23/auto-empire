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
        <div className="mx-auto my-10 flex h-screen w-4/5 flex-col items-center justify-center gap-5 overflow-x-hidden">
          <motion.h1
            {...getAnimation("top")}
            className="text-md font-bold italic text-stone-600 md:text-xl xl:text-5xl"
          >
            {latestSection.title}
          </motion.h1>
          <motion.span
            {...getAnimation("left", { delay: 1 })}
            className="cursor-text text-left text-lg hover:text-orange-500"
          >
            {latestSection.description}
          </motion.span>
          <div className="my-5 flex flex-col items-center justify-center gap-3 xl:flex-row">
            {latestSectionImages.map((img, index) => {
              return (
                <motion.div
                  {...animationConfig[index]}
                  className="h-80 w-80 object-cover"
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
