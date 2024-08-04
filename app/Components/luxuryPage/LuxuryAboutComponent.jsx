import { luxaryAboutSection, luxaryAboutSectionCards } from "@/app/constants";
import Image from "next/image";
import React from "react";

function LuxuryAboutComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-4/5 h-[900px] mx-auto">
        <h1 className="font-bold text-center text-2xl p-5">
          About Luxury Cars
        </h1>
        <div className="mx-10">
          <h1 className="font-bold text-xl my-5">{luxaryAboutSection.title}</h1>
          <p>{luxaryAboutSection.discription}</p>
          <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-5 my-10">
            {luxaryAboutSectionCards.map((value) => (
              <div key={value.id} className="w-80 h-80">
                <div className="w-full h-full relative">
                  <div className="opacity-0 hover:opacity-30">
                    <Image
                      src={value.image}
                      alt="About Luxury cars Image"
                      placeholder="blur"
                      className="w-full h-full object-cover absolute left-0 top-0 transition-opacity duration-300 ease-in-out"
                    />
                  </div>

                  <div className="w-full h-full border-2 bg-black cursor-not-allowed">
                    <h1 className="text-lg text-center font-bold mt-2">
                      {value.pointTitle}
                    </h1>
                    <p className="mx-5">{value.pointDis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default LuxuryAboutComponent;
