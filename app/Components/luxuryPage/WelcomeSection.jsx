import { luxuryPageWelcomeSection } from "@/app/constants";
import Image from "next/image";
import React from "react";

function welcomeSection() {
  return (
    <>
      <div>
        <div className="w-3/4 h-[550px] mx-auto flex justify-evenly items-center flex-col gap-5">
          <h1 className="font-bold text-2xl">{luxuryPageWelcomeSection.title}</h1>
          <p className="mx-10">{luxuryPageWelcomeSection.discription}</p>

          <div className="flex justify-evenly items-center gap-5">
            
            <div className="w-[600px] mx-5">
              <h2 className="text-center font-bold text-xl">
                {luxuryPageWelcomeSection.question}
              </h2>
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <h3 className="font-bold">{luxuryPageWelcomeSection.answerOne}</h3>
                  <p>{luxuryPageWelcomeSection.answerDis}</p>
                </div>
                <div>
                  <h3 className="font-bold">{luxuryPageWelcomeSection.answerTwo}</h3>
                  <p>{luxuryPageWelcomeSection.answerDisTwo}</p>
                </div>
                <div className="font-bold">
                  <h3>{luxuryPageWelcomeSection.answerThree}</h3>
                  <p>{luxuryPageWelcomeSection.answerDisThree}</p>
                </div>
                <div className="font-bold">
                  <h3>{luxuryPageWelcomeSection.answerFour}</h3>
                  <p>{luxuryPageWelcomeSection.answerDisFour}</p>
                </div>
              </div>
            </div>

            <div className="w-80 h-80">
                <Image src={luxuryPageWelcomeSection.image} alt="welcome car image"
                className="rounded-xl"
                placeholder="blur"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default welcomeSection;
