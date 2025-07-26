"use client";

import React from "react";
import Image from "next/image";
import { TopSellSection, TopSellSectionCards } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function TopSellComponent() {
  const animationConfig = TopSellSectionCards.map((_, index) =>
    getAnimation(index % 2 === 0 ? "left" : "right", {
      delay: 0.5 + index * 0.3,
    }),
  );

  return (
    <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center gap-5 overflow-x-hidden md:w-4/5 xl:h-[100vh]">
      <motion.h1
        {...getAnimation("top")}
        className="text-base font-bold italic text-stone-600 sm:text-3xl md:text-4xl"
      >
        {TopSellSection.title}
      </motion.h1>

      {/* Top Selling Car Section */}
      <div className="flex h-4/5 w-full flex-col items-center justify-center gap-5 md:flex-row">
        {TopSellSectionCards.map((value, index) => (
          <div
            key={value.id}
            className="flex h-full w-full flex-col items-center justify-center p-5"
          >
            <motion.div {...animationConfig[index]} className="h-2/3 w-full">
              <Image
                src={value.image}
                alt="Top Sell Cars"
                quality={100}
                placeholder="blur"
                className="h-full w-full rounded-2xl object-cover"
              />
            </motion.div>

            <div className="h-1/3 w-full">
              <motion.h1
                {...getAnimation("bottom", { delay: 1 + index * 0.2 })}
                className="my-3 text-lg font-bold"
              >
                {value.model}
              </motion.h1>
              <motion.p
                {...getAnimation("bottom", { delay: 1.2 + index * 0.2 })}
                className="text-left text-sm hover:text-orange-500"
              >
                {value.modelDetails}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSellComponent;
