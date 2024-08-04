"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { LuxuryPopularCars } from "@/app/constants";

function LuxuryPopularComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="my-5">
      <hr />
      <div className="w-1/2 h-[900] mx-auto">
        <h1 className="text-center text-2xl font-bold p-3">
        Popular Customized Cars in Auto Impire
        </h1>
        <div className="w-full h-[400px] my-10">
          <div className="embla">
            <div
              class="embla__viewport  w-full h-[400px] border-2"
              ref={emblaRef}
            >
              <div className="embla__container w-full h-full">
                {LuxuryPopularCars.map((item) => (
                  <div className="embla__slide" key={item.id}>
                    <Image
                      src={item.image}
                      alt="craousel Image one"
                      className="w-full h-full object-cover"
                      placeholder="blur"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <button
                className="embla__prev p-2 hover:text-white text-slate-700"
                onClick={scrollPrev}
              >
                Prev
              </button>
              <button
                className="embla__next hover:text-white text-slate-700"
                onClick={scrollNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <p className="text-center">
          We’re thrilled to present these popular luxury cars, but they’re not
          available just yet. To ensure you don’t miss out, please place a
          pre-order now!
        </p>
      </div>
    </div>
  );
}

export default LuxuryPopularComponent;
