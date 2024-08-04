import { ReviewLuxuryCars } from "@/app/constants";
import Image from "next/image";
import React from "react";

function LuxuryReviewComponent() {
  return (
    <div className="my-5">
      <hr />
      <div className="w-3/4 h-[500px] mx-auto">
        <h1 className="text-center p-5 font-bold text-2xl">
          Customer Reviews At Auto Impire
        </h1>
        <div className="w-full h-96 gap-4 flex justify-center items-center ">
          {ReviewLuxuryCars.map((review) => (
            <div
              className="w-80 h-[365px] border flex justify-center items-center flex-col"
              key={review.id}
            >
              <div className="w-full h-32 flex justify-center items-center">
                <Image
                  src={review.image}
                  alt={review.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>

              <div className="bg-zinc-800 h-[237px]">
                <p className="mx-5 my-2">{review.review}</p>
                <h3 className="mx-5">{review.author}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LuxuryReviewComponent;
