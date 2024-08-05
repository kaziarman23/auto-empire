"use client";

import Image from "next/image";
import React from "react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SuvPopularSection } from "@/app/constants";

function SuvPopularComponent() {
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
    <div>
      <div className="w-4/5 h-auto mx-auto">
        <h1 className="text-center text-2xl font-bold p-2">
          Discover Popular SUVs at Auto Impire
        </h1>
        <p>
          where we proudly showcase a curated selection of the most popular SUVs
          on the market today. Whether you’re searching for reliability, style,
          or cutting-edge technology, our showroom is stocked with SUVs that
          redefine driving excellence.
        </p>
        <div className="my-10 w-full h-full ">
          <div className="embla w-[600px] h-[400px] mx-auto">
            <div
              className="embla__viewport w-full h-[400px] border-2"
              ref={emblaRef}
            >
              <div className="embla__container w-full h-full">
                {SuvPopularSection.map((item) => (
                  <div className="embla__slide" key={item.id}>
                    <Image
                      src={item.image}
                      alt={`Carousel Image ${item.id}`}
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
        <p className="text-center mx-20 my-10">We’re thrilled to present these popular luxury cars, but they’re not available just yet. To ensure you don’t miss out, please place a pre-order now!</p>
      </div>
    </div>
  );
}

export default SuvPopularComponent;
