"use client";

import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer";
import R_PopularOne from "@/public/images/RacingCarImages/R_PopularOne.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

function RacePopularComponent() {
  const [showPostContent, setShowPostContent] = useState(false);

  const handleVideo = () => {
    setShowPostContent(true);
  };

  const handleVideoFinish = () => {
    setShowPostContent(false);
  };

  return (
    <div className="my-5">
      <hr />
      <div className="w-full h-[560px] mx-auto md:w-4/5 lg:w-2/3 xl:1/2 xl:h-[700px]">
        <motion.h1
          initial={{
            y: 50,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-xl font-bold text-center p-2 hover:text-zinc-700 xl:text-2xl"
        >
          Join the Elite
        </motion.h1>
        <div className="w-5/6 h-52 mx-auto my-3 pointer-events-none xl:h-80">
          {!showPostContent ? (
            <Image
              src={R_PopularOne}
              alt="cars"
              className="w-full h-full object-cover rounded-xl"
              placeholder="blur"
              quality={100}
            />
          ) : (
            <VideoPlayer
              className="w-full h-full mx-auto "
              videoUrl="/videos/SportsCarVideo.mp4"
              type="video/mp4"
              onFinish={handleVideoFinish}
            />
          )}
        </div>
        <button
          className="btn btn-outline btn-info mx-10 my-5 p-2"
          onClick={handleVideo}
        >
          Watch Promotion
        </button>
        <div className="w-[500px] h-[225px]my-5 flex gap-2 flex-col">
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-base font-bold mx-10 hover:text-zinc-700 xl:text-lg"
          >
            Currentlly This is Our Popular Racing car
          </motion.h1>
          <motion.h3
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mx-10 text-base hover:text-zinc-700 lg:text-lg"
          >
            Name: Ferrari 296 GT3
          </motion.h3>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mx-10 text-sm hover:text-orange-500"
          >
            Engine: 3.0L V6
          </motion.p>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mx-10 text-sm hover:text-orange-500"
          >
            Twin Turbo Hybrid Power: 441 kW / 600 hp
          </motion.p>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 1.1,
              ease: "easeInOut",
            }}
            className="mx-10 text-sm hover:text-orange-500"
          >
            Torque: 712 Nm
          </motion.p>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="mx-10 text-sm hover:text-orange-500"
          >
            kph: 2.9 seconds
          </motion.p>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 1.3,
              ease: "easeInOut",
            }}
            className="mx-10 text-sm hover:text-orange-500"
          >
            Top Speed: 330 kph / 205 mph
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default RacePopularComponent;
