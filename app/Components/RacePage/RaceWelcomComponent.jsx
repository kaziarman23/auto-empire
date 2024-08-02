import React from "react";
import { RaceWelcomeSection } from "@/app/constants";
import Image from "next/image";
import R_WelcomeOne from "@/public/images/RacingCarImages/R_WelcomeOne.jpg";

function RaceWelcomeComponent() {
  return (
    <>
      <div>
        <div className="w-3/4 h-[600px] mx-auto flex justify-evenly items-center flex-col gap-5">
          <h1 className="font-bold text-2xl mt-5">
            Auto Impire’s Racing Car Collection
          </h1>
          <p className="mx-10">
            {" "}
            Feel the adrenaline rush with theRacing Car Models. Engineered for
            performance and built for speed, this racing marvel delivers
            exhilarating power and precision. Designed for those who crave the
            thrill of the track, it’s where engineering excellence meets
            high-octane excitement.
          </p>

          <div className="flex justify-evenly items-center gap-5">
          <div className="w-80 h-80 ">
                <Image src={R_WelcomeOne} alt="welcome car image"
                className="rounded-xl object-cover w-full h-full"
                placeholder="blur" quality={100}/>
            </div>
            <div className="w-[600px] mx-5">
                {RaceWelcomeSection.map((item) => (
                       <div key={item.id} className="my-2">
                       <h3 className="font-bold">{item.point}</h3>
                       <p>{item.explaintion}</p>
                     </div>                      
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaceWelcomeComponent;



