"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { LuxuryPopularCars } from "@/app/constants";
import { motion } from "framer-motion";

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
      <div className="w-4/5 h-[450px] mx-auto sm:h-[500px] md:h-[700px] xl:w-1/2 xl:h-[700px]">
        <motion.h1
          initial={{
            y: -50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="text-center text-sm font-bold p-3 hover:text-zinc-700 md:text-md lg:text-lg xl:text-2xl"
        >
          Popular Customized Cars in Auto Empire
        </motion.h1>
        <div className="w-full h-[200px] my-10 sm:h-[300px] md:h-[500px]">
          <div className="embla">
            <div
              className="embla__viewport w-full h-[200px] border-2 sm:h-[300px]
              md:h-[500px]"
              ref={emblaRef}
            >
              <div className="embla__container w-full h-full">
                {LuxuryPopularCars.map((item) => (
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
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="text-center hover:text-orange-500"
        >
          We’re thrilled to present these popular luxury cars, but they’re not
          available just yet. To ensure you don’t miss out, please place a
          pre-order now!
        </motion.p>
      </div>
    </div>
  );
}

export default LuxuryPopularComponent;
