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
    <div className="mx-auto w-11/12 xl:w-4/5 max-w-screen-xl overflow-hidden py-12">
      {/* Header Section */}
      <div className="mb-10 flex flex-col items-center justify-center gap-4 px-4">
        <motion.h1
          {...getAnimation("top")}
          className="text-center text-base font-bold italic text-stone-600 sm:text-lg md:text-2xl lg:text-4xl"
        >
          {StockSection.title}
        </motion.h1>
        <motion.p
          {...getAnimation("left", { delay: 0.5 })}
          className="text-left text-sm text-white sm:text-base md:text-lg"
        >
          {StockSection.description}
        </motion.p>
        <motion.p
          {...getAnimation("top", { delay: 0.8 })}
          className="text-sm text-white text-left sm:text-base md:text-lg"
        >
          {StockSection.descriptionTwo}
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {StockCardSection.map((card, i) => (
          <motion.div
            key={i}
            {...cardAnimations[i % cardAnimations.length]} // Handles more than 3 cards
            className="rounded-2xl rounded-tr-[70px] border-2 border-white bg-black p-6 text-white shadow-md"
          >
            <h1 className="mb-2 text-center text-lg font-bold">
              {card.cardTitle}
            </h1>
            <p className="text-left text-sm">{card.cardDescription}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StockComponent;
