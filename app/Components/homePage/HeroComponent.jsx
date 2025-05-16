import React from "react";
import Image from "next/image";
import { heroSection } from "@/app/constants";
// import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <>
      <div className="mx-auto flex h-[100vh] w-4/5">
        <div className="flex w-full flex-col items-center justify-center gap-10 p-5">
          <h1 className="text-4xl text-stone-600 font-bold">{heroSection.title}</h1>
          <span className="cursor-text text-left text-lg hover:text-orange-500">
            {heroSection.description}
          </span>
          <span className="cursor-text text-left text-lg hover:text-orange-500">
            {heroSection.secondDescription}
          </span>
          <h3 className="text-lg text-center text-stone-600 font-bold">{heroSection.subtitle}</h3>
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
    </>
  );
}

export default HeroComponent;
