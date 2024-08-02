import { RaceAboutSection } from "@/app/constants";
import Image from "next/image";
import React from "react";
import R_AboutOne from "@/public/images/RacingCarImages/R_AboutOne.jpg";
import R_AboutTwo from "@/public/images/RacingCarImages/R_AboutTwo.jpg";
import R_AboutThree from "@/public/images/RacingCarImages/R_AboutThree.jpg";
import R_AboutFour from "@/public/images/RacingCarImages/R_AboutFour.jpg";
import R_AboutFive from "@/public/images/RacingCarImages/R_AboutFive.jpg";

function RaceAboutComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-4/5 h-[1590px] mx-auto">
        <h1 className="font-bold text-center text-2xl p-5">
          About Racing Cars
        </h1>
        <div className="mx-10">
          <h1 className="font-bold text-xl my-5">{RaceAboutSection.title}</h1>
          <p>{RaceAboutSection.discription}</p>
          <div className="w-2/3 h-full mx-auto my-10">
            <div className="flex justify-evenly items-center my-10">
              <div className="border-red-500">
                <h1 className="mx-10 font-bold text-lg">
                  {RaceAboutSection.pointOne}
                </h1>
                <p className="mx-10 ">{RaceAboutSection.explaintionOne}</p>
              </div>
              <div className="w-[800px] h-60">
                <Image
                  src={R_AboutOne}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex justify-evenly items-center my-10">
              <div className="w-[800px] h-60">
                <Image
                  src={R_AboutTwo}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="border-red-500">
                <h1 className="mx-10 font-bold text-lg">
                  {RaceAboutSection.pointTwo}
                </h1>
                <p className="mx-10 ">{RaceAboutSection.explaintionTwo}</p>
              </div>
            </div>

            <div className="flex justify-evenly items-center my-10">
              <div className="border-red-500">
                <h1 className="mx-10 font-bold text-lg">
                  {RaceAboutSection.pointThree}
                </h1>
                <p className="mx-10 ">{RaceAboutSection.explaintionThree}</p>
              </div>
              <div className="w-[800px] h-60">
                <Image
                  src={R_AboutThree}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex justify-evenly items-center my-10">
              <div className="w-[800px] h-60">
                <Image
                  src={R_AboutFour}
                  placeholder="blur"
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="border-red-500">
                <h1 className="mx-10 font-bold text-lg">
                  {RaceAboutSection.pointFour}
                </h1>
                <p className="mx-10 ">{RaceAboutSection.explaintionFour}</p>
              </div>
            </div>

            <div className="flex justify-evenly items-center my-10">
              <div className="border-red-500">
                <h1 className="mx-10 font-bold text-lg">
                  {RaceAboutSection.pointFive}
                </h1>
                <p className="mx-10 ">{RaceAboutSection.explaintionFive}</p>
              </div>
              <div className="w-[800px] h-60">
                <Image
                  placeholder="blur"
                  src={R_AboutFive}
                  alt="about racing cars"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default RaceAboutComponent;
