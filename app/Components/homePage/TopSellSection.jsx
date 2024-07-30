import { topSellComponentCards } from "@/app/constants";
import Image from "next/image";
import React from "react";

function TopSellSection() {
  return (
    <>
      <hr />
      <div className="my-5">
        <div className="w-1/2 h-auto mx-auto my-10 flex justify-center items-center gap-5 flex-col">
          <h1 className="font-bold text-2xl">
            Explore Our Top-Selling Vehicles
          </h1>
          <p>
            At Auto Impire, we’re proud to showcase our top-selling cars, each
            representing the pinnacle of excellence in their respective
            categories. Discover why these models have captured the hearts of
            our customers and continue to lead the way in luxury and performance
          </p>
          <div className="flex justify-evenly items-center gap-3 my-5">
            {topSellComponentCards.map((value) => (
                <div
                key={value.id}
                className="flex justify-evenly items-center"
                >
                    <div className="w-80 h-[515px] text-center ">
                        <Image src={value.image} alt="Top Sell Cars" className="rounded-xl object-cover"/>
                        <h1 className="text-lg font-bold my-3">{value.model}</h1>
                        <p className="mx-5 text-justify">{value.modelDetails}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSellSection;
