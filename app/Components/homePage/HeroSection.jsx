import React from "react";
import Image from "next/image";
import { heroComponent } from "../../constants";

function HeroSection() {
  return (
    <>
      <div className="w-1/2 h-[500px] relative mx-auto my-5">
        <Image
          src={heroComponent.image}
          alt="hero"
          quality={100}
          objectFit="cover"
          placeholder="blur"
        />
        <div className="w-full h-28 absolute top-80 p-5 text-white  flex justify-center items-center flex-col gap-2">
          <h1 className="text-2xl font-bold">{heroComponent.title}</h1>
          <p className="text-sm text-justify">{heroComponent.discription}</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
