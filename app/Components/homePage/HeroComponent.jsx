import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
// import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <>
      <div className="mx-auto grid h-[100vh] w-4/5 grid-cols-5 grid-rows-6">
        <div className="col-span-2 row-span-4 flex w-full flex-col items-center justify-center gap-2 p-5">
          <h1 className="text-2xl font-bold">{heroSection.title}</h1>
          <span className="cursor-text text-left text-lg hover:text-orange-500">
            {heroSection.discription}
          </span>
        </div>
        <div className="col-span-3 col-start-3 row-span-4 h-full w-full p-5">
          <Image
            src={heroSection.image}
            alt="hero section image"
            quality={100}
            className="rounded-xl object-cover"
            placeholder="blur"
          />
        </div>
        <div className="col-span-5 row-span-2 row-start-5 border border-blue-500">
          3
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
