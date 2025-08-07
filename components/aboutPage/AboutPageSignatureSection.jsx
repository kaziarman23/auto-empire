"use client";

import Image from "next/image";
import { AboutSignatureSection } from "../../app/constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function AboutPageSignatureSection() {
  return (
    <div className="mx-auto flex h-screen w-4/5 flex-col items-center justify-center gap-5 overflow-x-hidden">
      <motion.h1
        {...getAnimation("top")}
        className="sm:text-md md:text-md mt-5 text-sm font-bold italic text-stone-600 lg:text-4xl"
      >
        {AboutSignatureSection.title}
      </motion.h1>
      <motion.p
        {...getAnimation("left", { delay: 1 })}
        className="mx-10 text-sm hover:text-orange-500"
      >
        {AboutSignatureSection.discription}
      </motion.p>

      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-evenly">
        <div className="mx-5 w-4/5 lg:w-[300px] xl:w-[600px]">
          <motion.h2
            {...getAnimation("bottom", { delay: 1 })}
            className="mb-3 text-center text-2xl font-bold italic text-stone-600"
          >
            {AboutSignatureSection.question}
          </motion.h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <motion.h3
                {...getAnimation("left", { delay: 1 })}
                className="font-bold hover:text-blue-500"
              >
                {AboutSignatureSection.answerOne}
              </motion.h3>
              <motion.p
                {...getAnimation("top", { delay: 1 })}
                className="hover:text-orange-500"
              >
                {AboutSignatureSection.answerDis}
              </motion.p>
            </div>
            <div>
              <motion.h3
                {...getAnimation("left", { delay: 1 })}
                className="font-bold hover:text-blue-500"
              >
                {AboutSignatureSection.answerTwo}
              </motion.h3>
              <motion.p
                {...getAnimation("top", { delay: 1 })}
                className="hover:text-orange-500"
              >
                {AboutSignatureSection.answerDisTwo}
              </motion.p>
            </div>
            <div className="font-bold">
              <motion.h3
                {...getAnimation("left", { delay: 1 })}
                className="font-bold hover:text-blue-500"
              >
                {AboutSignatureSection.answerThree}
              </motion.h3>
              <motion.p
                {...getAnimation("top", { delay: 1 })}
                className="hover:text-orange-500"
              >
                {AboutSignatureSection.answerDisThree}
              </motion.p>
            </div>
            <div className="font-bold">
              <motion.h3
                {...getAnimation("left", { delay: 1 })}
                className="font-bold hover:text-blue-500"
              >
                {AboutSignatureSection.answerFour}
              </motion.h3>
              <motion.p
                {...getAnimation("top", { delay: 1 })}
                className="hover:text-orange-500"
              >
                {AboutSignatureSection.answerDisFour}
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          {...getAnimation("right", { delay: 1.5 })}
          className="h-60 w-60 lg:w-[300px]"
        >
          <Image
            src={AboutSignatureSection.image}
            alt="welcome car image"
            className="rounded-xl"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPageSignatureSection;
