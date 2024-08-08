"use client";

import { latestSection, latestSectionImages } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function LetestComponent() {
  const animationVariants = {
    one: {
      initial: {
        x: -150,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.4,
      },
    },
    two: {
      initial: {
        y: 150,
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.4,
      },
    },
    three: {
      initial: {
        x: 150,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <hr />
      <div className="my-5">
        <div className="w-[350px] h-[1260px] mx-auto my-10 flex justify-center items-center gap-5 flex-col xl:w-4/5 xl:h-[600px]">
          <h1 className="font-bold text-md md:text-xl xl:text-2xl">
            {latestSection.title}
          </h1>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { ease: "backIn", duration: 0.8 },
            }}
            className="hover:text-orange-500"
          >
            {latestSection.discription}
          </motion.p>
          <div className="flex justify-center items-center flex-col gap-3 my-5 xl:flex-row">
            {latestSectionImages.map((img, index) => {
              return (
                <motion.div
                  initial={
                    animationVariants[
                      index === 0 ? "one" : index === 1 ? "two" : "three"
                    ].initial
                  }
                  whileInView={
                    animationVariants[
                      index === 0 ? "one" : index === 1 ? "two" : "three"
                    ].whileInView
                  }
                  transition={
                    animationVariants[
                      index === 0 ? "one" : index === 1 ? "two" : "three"
                    ].transition
                  }
                  className="w-80 h-80 object-cover"
                  key={index}
                >
                  <Link
                    href={
                      index === 0
                        ? "/luxury-cars"
                        : index === 1
                        ? "/race-cars"
                        : "/suv-cars"
                    }
                  >
                    <Image
                      src={img.image}
                      alt="Latest Cars"
                      placeholder="blur"
                      title="Click it if you'r Interestate"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LetestComponent;
