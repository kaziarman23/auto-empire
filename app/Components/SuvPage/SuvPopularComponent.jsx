"use client";

import Image from "next/image";
import React from "react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SuvPopularSection } from "@/app/constants";
import { motion } from "framer-motion";

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
      <div className="w-4/5 h-[500px] mx-auto sm:h-[600px] lg:h-[600px] xl:h-[700px]">
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
            delay: 0.7,
            ease: "easeInOut",
            duration: 0.8,
          }}
          className="text-center text-sm font-bold p-2 hover:text-zinc-700 md:text-base xl:text-2xl"
        >
          Discover Popular SUVs at Auto Impire
        </motion.h1>
        <motion.p
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.9,
          }}
          className="text-sm hover:text-orange-500 xl:text-xl"
        >
          where we proudly showcase a curated selection of the most popular SUVs
          on the market today. Whether you’re searching for reliability, style,
          or cutting-edge technology, our showroom is stocked with SUVs that
          redefine driving excellence.
        </motion.p>
        <div className="my-10 mx-auto w-full md:h-[250px] lg:w-[400px] lg:h-[350px] xl:w-[600px] xl:h-[400px]">
          <div className="embla mx-auto md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] xl:w-[600px] xl:h-[400px]">
            <div
              className="embla__viewport border-2 w-full md:h-[200px] lg:w-[400px] lg:h-[300px] xl:w-[600px] xl:h-[400px]"
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
        <motion.p
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            ease: "easeInOut",
            duration: 0.9,
          }}
          className="w-full text-center text-sm my-10 hover:text-orange-500 lg:text-lg"
        >
          We’re thrilled to present these popular luxury cars, but they’re not
          available just yet. To ensure you don’t miss out, please place a
          pre-order now!
        </motion.p>
      </div>
    </div>
  );
}

export default SuvPopularComponent;
