"use client";

import Image from "next/image";
import React from "react";
import { CollactionLuxuryCars } from "@/app/constants";

// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-autoscroll";

function CollactionLuxuryCarSection() {
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [
  //   AutoScroll({ delay: 1000, stopOnMouseEnter: true, stopOnInteraction: false }),
  // ]);

  // AutoScroll plugin package in not installing

  return (
    <div className="mt-20 mb-10">
      <hr />
      <div className="w-full h-[800] mx-auto">
        <h1 className="text-center text-2xl font-bold p-3 my-5">
          Discover Our Extensive Collection of Luxury Cars
        </h1>
        <p className="w-1/2 mx-auto my-5">
          At Auto Impire, we pride ourselves on offering a vast and diverse
          selection of the finest vehicles. From elegant sedans and powerful
          sports cars to sophisticated SUVs and stunning convertibles, each
          model in our collection is meticulously curated to meet the highest
          standards of luxury and craftsmanship.
        </p>

        <div className="w-4/5 h-auto mx-auto  grid grid-cols-3 grid-rows-4 gap-5 place-items-center">
          
        </div>


        {/* {CollactionLuxuryCars.map((item) => (
            <div
              className="w-60 h-40 flex justify-center items-center flex-col"
              key={item.id}
            >
              <div className="w-[80%] h-[80%]">
                <Image
                  src={item.image}
                  alt="Luxury Collaction cars"
                  className="w-full h-full rounded-xl"
                  placeholder="blur"
                />
              </div>
              <h1 className="text-center p-2">{item.name}</h1>
              
            </div>
          ))} */}


        {/* <div className="autoScrollDiv w-full h-[200px] my-10">
          <div className="embla w-full h-full " ref={emblaRef}>
            <div className="embla__container w-40 h-40 border-2 my-5">
              {CollactionLuxuryCars.map((item) => (
                <div key={item.id} className="embla__slide">
                <Image src={item.image} alt="slider images" className="w-full h-full" />
              </div>
              ))}
            </div>
          </div>
        </div> */}

        <h1 className="w-1/2 mx-auto my-5">
          Ready to elevate your driving experience? Browse our current
          collection and find the luxury car that’s perfect for you. For more
          details or to schedule a private viewing, don’t hesitate to contact
          us.
        </h1>
        <p className="text-center font-bold text-2xl">
          At Auto Impire, your next luxury car awaits.
        </p>
      </div>
    </div>
  );
}

export default CollactionLuxuryCarSection;
