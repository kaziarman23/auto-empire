"use client";

import Image from "next/image";
import { AboutTeamSection } from "../../constants";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function AboutPageTeamSection() {
  return (
    <div
      id="team"
      className="mx-auto h-screen w-4/5 overflow-x-hidden overflow-y-hidden"
    >
      <motion.h1
        {...getAnimation("bottom")}
        className="text-center text-5xl font-bold italic text-stone-600"
      >
        {AboutTeamSection.title}
      </motion.h1>
      <div className="my-5 flex h-4/5 w-full items-center justify-center gap-5">
        <motion.div
          {...getAnimation("left")}
          className="flex h-full w-1/3 flex-col items-center justify-center gap-3"
        >
          <Image
            alt="Team section Image"
            src={AboutTeamSection.imageOne}
            quality={100}
            className="h-2/3 w-4/5 rounded-xl border border-white object-cover"
          />
          <motion.h1
            {...getAnimation("bottom", { delay: 1 })}
            className="text-2xl font-bold hover:text-orange-600"
          >
            {AboutTeamSection.nameOne}
          </motion.h1>
          <motion.h2
            {...getAnimation("bottom", { delay: 1.5 })}
            className="font-bold hover:text-orange-600"
          >
            {AboutTeamSection.postOne}
          </motion.h2>
          <motion.p
            {...getAnimation("bottom", { delay: 2 })}
            className="hover:text-orange-600"
          >
            {AboutTeamSection.roleOne}
          </motion.p>
        </motion.div>
        <motion.div
          {...getAnimation("bottom")}
          className="flex h-full w-1/3 flex-col items-center justify-center gap-3"
        >
          <Image
            alt="Team section Image"
            src={AboutTeamSection.imageTwo}
            quality={100}
            className="h-2/3 w-4/5 rounded-xl border border-white object-cover"
          />
          <motion.h1
            {...getAnimation("bottom", { delay: 1 })}
            className="text-2xl font-bold hover:text-orange-600"
          >
            {AboutTeamSection.nameTwo}
          </motion.h1>
          <motion.h2
            {...getAnimation("bottom", { delay: 1.5 })}
            className="font-bold hover:text-orange-600"
          >
            {AboutTeamSection.postTwo}
          </motion.h2>
          <motion.p
            {...getAnimation("bottom", { delay: 2 })}
            className="hover:text-orange-600"
          >
            {AboutTeamSection.roleTwo}
          </motion.p>
        </motion.div>
        <motion.div
          {...getAnimation("right")}
          className="flex h-full w-1/3 flex-col items-center justify-center gap-3"
        >
          <Image
            alt="Team section Image"
            src={AboutTeamSection.imageThree}
            quality={100}
            className="h-2/3 w-4/5 rounded-xl border border-white object-cover"
          />
          <motion.h1
            {...getAnimation("bottom", { delay: 1 })}
            className="text-2xl font-bold hover:text-orange-600"
          >
            {AboutTeamSection.nameThree}
          </motion.h1>
          <motion.h2
            {...getAnimation("bottom", { delay: 1.5 })}
            className="font-bold hover:text-orange-600"
          >
            {AboutTeamSection.postThree}
          </motion.h2>
          <motion.p
            {...getAnimation("bottom", { delay: 2 })}
            className="hover:text-orange-600"
          >
            {AboutTeamSection.roleThree}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPageTeamSection;
