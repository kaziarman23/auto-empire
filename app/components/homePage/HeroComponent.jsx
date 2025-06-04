import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
// import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <>
      <div id="hero" className="mx-auto h-[100vh] w-4/5 overflow-hidden">
        <h1 className="mt-20 text-center text-4xl font-bold italic text-stone-600">
          {heroSection.title}
        </h1>
        <div className="flex">
          <div className="flex w-full flex-col items-center justify-center gap-10 p-5">
            <span className="cursor-text text-left text-lg hover:text-orange-500">
              {heroSection.description}
            </span>
            <span className="cursor-text text-left text-lg hover:text-orange-500">
              {heroSection.secondDescription}
            </span>
            <h3 className="text-center text-lg font-bold text-stone-600">
              {heroSection.subtitle}
            </h3>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={heroSection.image}
              alt="hero section image"
              quality={100}
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
