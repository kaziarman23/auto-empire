"use client";

import React, { useState } from "react";
import VideoPlayer from "../VideoPlayer";
import R_PopularOne from "@/public/images/RacingCarImages/R_PopularOne.jpg";
import Image from "next/image";

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
      <div className="w-2/3 h-auto mx-auto">
        <h1 className="text-2xl font-bold text-center p-2">Join the Elite</h1>
        <div className="w-full h-[400px] my-3 pointer-events-none">
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
        <div className="w-full h-auto my-5 flex gap-2 flex-col">
          <h1 className="text-lg font-bold mx-10">
            Currentlly This is Our Popular Racing car
          </h1>
          <h3 className="mx-10 text-lg">Name: Ferrari 296 GT3</h3>
          <p className="mx-10"> Engine: 3.0L V6</p>
          <p className="mx-10"> Twin Turbo Hybrid Power: 441 kW / 600 hp</p>
          <p className="mx-10"> Torque: 712 Nm </p>
          <p className="mx-10"> kph: 2.9 seconds </p>
          <p className="mx-10"> Top Speed: 330 kph / 205 mph</p>
        </div>
      </div>
    </div>
  );
}

export default RacePopularComponent;
