import React from "react";
import Image from "next/image";
import { topSellSection, topSellSectionCards } from "@/app/constants";
// import { motion } from "framer-motion";

function TopSellComponent() {
  return (
    <>
      <div className="mx-auto flex h-[100vh] w-4/5 flex-col items-center justify-center gap-5">
        <h1 className="md:text-md text-5xl font-bold text-stone-600">
          {topSellSection.title}
        </h1>
        {/* Top Selling Car Section */}
        <div className="flex h-4/5 w-full items-center justify-center gap-5">
          {topSellSectionCards.map((value) => (
            <div
              key={value.id}
              className="flex h-full w-full flex-col items-center justify-center p-5"
            >
              <div className="h-2/3 w-full">
                <Image
                  src={value.image}
                  alt="Top Sell Cars"
                  className="h-full w-full rounded-2xl"
                />
              </div>
              <div className="h-1/3 w-full">
                <h1 className="my-3 text-lg font-bold">{value.model}</h1>
                <p className="text-left text-lg hover:text-orange-500">
                  {value.modelDetails}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopSellComponent;
