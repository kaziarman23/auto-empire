import { SuvAboutSection } from "@/app/constants";
import Image from "next/image";
import React from "react";

function SuvAboutComponent() {
  return (
    <>
      <div>
        <div className="w-full h-[450px] bg-zinc-900">
          <h1 className="w-full h-10 text-2xl text-center font-bold p-2">
            About SUV Cars
          </h1>
          <div className="w-3/4 h-[400px] mx-auto flex justify-center items-center">
            <div className="w-1/2 h-full flex justify-evenly items-center">
              <Image
                src={SuvAboutSection.image}
                alt="Suv about page car"
                className="w-1/2 h-1/2 object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 h-full flex justify-center items-center flex-col gap-3">
              <h1 className="font-bold text-xl">{SuvAboutSection.title}</h1>
              <p>{SuvAboutSection.discription}</p>
              <h1 className="font-bold text-xl">{SuvAboutSection.titleTwo}</h1>
              <p>{SuvAboutSection.discriptionTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuvAboutComponent;
