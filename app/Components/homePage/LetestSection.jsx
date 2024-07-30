"use client";

import { latestComponent, latestComponentImages } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

function letestSection() {
  return (
    <>
      <hr />
      <div className="my-5">
        <div className="w-4/5 h-auto mx-auto my-10 flex justify-center items-center gap-5 flex-col">
          <h1 className="font-bold text-2xl">{latestComponent.title}</h1>
          <p>{latestComponent.discription}</p>
          <div className="flex justify-evenly items-center gap-3 my-5">
            {latestComponentImages.map((img, index) => {
              let href;
              if (index === 0) {
                href = "/luxury-cars";
              } else if (index === 1) {
                href = "/race-cars";
              } else {
                href = "/suv-cars";
              }
              return (
                <div
                  className="w-80 h-80 object-cover"
                  key={index}
                >
                  <Link href={href}>
                    <Image src={img.image} alt="Latest Cars" placeholder="blur" title="Click it if you'r Interestate"/>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default letestSection;
