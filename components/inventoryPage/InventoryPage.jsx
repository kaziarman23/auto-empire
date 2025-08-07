"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetCarsQuery } from "../../app/redux/api/carsApi";
import useToast from "../Shared/useCustomToast";
import { useEffect } from "react";
import Loading from "@/app/loading";

function InventoryPage() {
  // states
  const { data: carsData, isLoading, isError, error } = useGetCarsQuery();
  const { showError } = useToast();

  // handle errors
  useEffect(() => {
    if (isError) {
      console.error("Error While fetching Cars data: ", error.error);
      showError("Error While fetching Cars data");
    }
  }, [isError, error, showError]);

  // Handle Loading
  if (isLoading) {
    return <Loading message="Loading Cars Data..." />;
  }

  return (
    <div className="mx-auto h-full w-4/5 overflow-hidden">
      <h1 className="mb-10 mt-20 text-center text-5xl font-bold italic text-stone-600">
        Our Inventory
      </h1>
      <div className="grid h-full w-full grid-cols-3 gap-5">
        {carsData.map((card, i) => (
          <div
            key={i}
            className="card bg-base-100 h-[28rem] w-full overflow-hidden rounded-xl border-2 border-white shadow-sm"
          >
            <figure className="h-1/2 w-full">
              <Image
                src={card.image}
                alt={card.carName}
                quality={100}
                width={400}
                height={240}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body h-1/2 w-full space-y-3 p-5 text-white">
              <h2 className="card-title text-xl font-bold hover:text-orange-500">
                <span className="font-bold text-white">Model: </span>
                {card.carName}
              </h2>
              <p className="hover:text-orange-500">
                <span className="font-bold text-white">Brand: </span>
                {card.brand}
              </p>
              <p className="hover:text-orange-500">
                <span className="font-bold text-white">Price: </span>
                {card.price} BDT
              </p>
              <div className="card-actions cursor-pointer justify-end">
                <Link href={`/inventory/${card._id}`}>
                  <button className="btn w-full rounded-xl border border-white bg-black p-2 text-white delay-100 hover:bg-white hover:font-bold hover:text-black">
                    Get it Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryPage;
