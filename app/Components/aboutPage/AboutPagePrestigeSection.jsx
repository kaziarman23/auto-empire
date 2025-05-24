import React from "react";
import { AboutPrestigeSection } from "../../constants";
import Image from "next/image";

function AboutPagePrestigeSection() {
  return (
    <div id="about" className="mx-auto h-screen w-4/5 overflow-hidden">
      <h1 className="mt-20 text-center text-4xl font-bold italic text-stone-600">
        {AboutPrestigeSection.heading}
      </h1>
      <div className="flex h-full w-full items-start justify-center">
        <div className="w-1/2 space-y-3 p-4">
          <h1 className="text-4xl">{AboutPrestigeSection.title}</h1>
          <p className="text-left text-sm hover:text-orange-600">
            {AboutPrestigeSection.description}
          </p>
          <p className="text-left text-sm hover:text-orange-600">
            {AboutPrestigeSection.descriptionTwo}
          </p>
          <p className="text-left text-sm hover:text-orange-600">
            {AboutPrestigeSection.descriptionThree}
          </p>
        </div>
        {/* image side */}
        <div className="flex h-full w-1/2 items-start justify-center gap-5 p-10">
          <div className="flex h-1/2 w-full items-center justify-center gap-2">
            <Image
              src={AboutPrestigeSection.imageOne}
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

export default AboutPagePrestigeSection;
