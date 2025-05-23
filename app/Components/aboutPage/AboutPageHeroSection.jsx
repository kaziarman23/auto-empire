import React from "react";
import { AboutHeroSection } from "../../constants";
import Image from "next/image";

function AboutPageHeroSection() {
  return (
    <div id='about' className="mx-auto h-screen w-4/5 overflow-hidden">
      <div className="mt-16 flex h-full w-full items-center justify-center">
        <div className="w-1/2 space-y-3 p-4">
          <h1 className="text-4xl">{AboutHeroSection.title}</h1>
          <p className="hover:text-orange-600 text-sm">
            {AboutHeroSection.description}
          </p>
          <p className="hover:text-orange-600 text-sm">
            {AboutHeroSection.descriptionTwo}
          </p>
          <p className="hover:text-orange-600 text-sm">
            {AboutHeroSection.descriptionThree}
          </p>
        </div>
        {/* image side */}
        <div className="flex h-full w-1/2 items-center justify-center gap-5 p-10">
          <div className="flex h-1/2 w-full items-center justify-center gap-2">
            <Image
              src={AboutHeroSection.imageOne}
              alt="about us image"
              className="h-full w-full rounded-xl object-cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageHeroSection;
