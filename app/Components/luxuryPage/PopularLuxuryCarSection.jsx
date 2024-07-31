"use client";

import LuxuryPopularCarOne from "@/public/images/LuxuryPopularCarOne.jpg";
import LuxuryPopularCarTwo from "@/public/images/LuxuryPopularCarTwo.jpg";
import LuxuryPopularCarThree from "@/public/images/LuxuryPopularCarThree.jpg";
import LuxuryPopularCarFour from "@/public/images/LuxuryPopularCarFour.jpg";
import LuxuryPopularCarFive from "@/public/images/LuxuryPopularCarFive.jpg";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

function PopularLuxuryCarSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="my-5">
      <hr />
      <div className="w-1/2 h-[900] mx-auto">
        <h1 className="text-center text-2xl font-bold p-3">
          Popular Cars in Auto Impire
        </h1>
        <div className="w-full h-[400px] my-10">
          <div className="embla w-full h-full border-2" ref={emblaRef}>
            <div className="embla__container w-full h-full">
              <div className="embla__slide">
                <Image
                  src={LuxuryPopularCarOne}
                  alt="craousel Image one"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="embla__slide">
                <Image
                  src={LuxuryPopularCarTwo}
                  alt="craousel Image two"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="embla__slide">
                <Image
                  src={LuxuryPopularCarThree}
                  alt="craousel Image three"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="embla__slide">
                <Image
                  src={LuxuryPopularCarFour}
                  alt="craousel Image four"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="embla__slide">
                <Image
                  src={LuxuryPopularCarFive}
                  alt="craousel Image five"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-2xl">
          We’re thrilled to present these popular luxury cars, but they’re not
          available just yet. To ensure you don’t miss out, please place a
          pre-order now!
        </h1>
      </div>
    </div>
  );
}

export default PopularLuxuryCarSection;
