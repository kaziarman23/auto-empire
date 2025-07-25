"use client";

import { StockSection, StockCardSection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function StockComponent() {
  const cardAnimations = [
    getAnimation("left", { delay: 0.3 }),
    getAnimation("top", { delay: 0.6 }),
    getAnimation("right", { delay: 0.9 }),
  ];

  return (
    <div className="mx-auto h-screen w-4/5 overflow-x-hidden">
      {/* Header Section */}
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-5">
        <motion.h1
          {...getAnimation("top")}
          className="sm:text-md md:text-md text-center text-sm font-bold italic text-stone-600 lg:text-4xl"
        >
          {StockSection.title}
        </motion.h1>
        <motion.p {...getAnimation("left", { delay: 0.5 })} className="text-lg">
          {StockSection.description}
        </motion.p>
        <motion.p {...getAnimation("top", { delay: 0.8 })} className="text-lg">
          {StockSection.descriptionTwo}
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="flex h-1/2 w-full items-center justify-center gap-5">
        {StockCardSection.map((card, i) => (
          <motion.div
            key={i}
            {...cardAnimations[i]}
            className="h-52 w-1/3 rounded-2xl rounded-tr-[70px] border-2 border-white p-5 bg-black shadow-md"
          >
            <h1 className="text-center text-lg font-bold">{card.cardTitle}</h1>
            <p className="text-left">{card.cardDescription}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StockComponent;
