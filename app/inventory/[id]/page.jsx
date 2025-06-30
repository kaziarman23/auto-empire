"use client";

import { useParams } from "next/navigation";
import { useGetCarsQuery } from "../../redux/api/carsApi";
import useToast from "../../components/Shared/useCustomToast";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

function CarDetails(params) {
  // states
  const { showError } = useToast();
  const { id } = useParams();
  const { data: carsData, isLoading, isError, error } = useGetCarsQuery();

  const carInfo = useMemo(
    () => carsData?.find((data) => data._id === id),
    [carsData, id],
  );

  // handle errors
  useEffect(() => {
    if (isError) {
      console.error("Error While fetching Cars data: ", error.error);
      showError("Error While fetching Cars data");
    }
  }, [isError, error, showError]);

  // Handle Loading
  if (isLoading) {
    return <div>Loading Car Details ...</div>;
  }

  if (!carInfo) {
    return <div className="mt-20 text-center text-xl">Car not found</div>;
  }
  console.log("id: ", id);
  console.log("carInfo: ", carInfo);

  return (
    <div id="hero" className="mx-auto h-[100vh] w-4/5 overflow-hidden">
      {/* Card Section */}
      <div className="mt-20 flex flex-col items-center gap-10 rounded-xl border-2 border-white p-6 shadow-md lg:flex-row">
        {/* Image */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="relative h-[500px] w-[600px]">
            <Image
              src={carInfo.image}
              alt={`${carInfo.carName} image`}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full space-y-4 text-lg text-white lg:w-1/2">
          <h1 className="text-4xl font-bold">{carInfo.brand} Car Details</h1>
          <p className="hover:text-orange-500">
            <span className="font-semibold text-white">Brand:</span>{" "}
            {carInfo.brand}
          </p>
          <p className="hover:text-orange-500">
            <span className="font-semibold text-white">Car Name:</span>{" "}
            {carInfo.carName}
          </p>
          <p className="hover:text-orange-500">
            <span className="font-semibold text-white">Model Name:</span>{" "}
            {carInfo.modelName}
          </p>
          <p className="hover:text-orange-500">
            <span className="font-semibold text-white">Price:</span> $
            {carInfo.price}
          </p>
          <p className="hover:text-orange-500">
            <span className="font-semibold text-white">Release Year:</span>{" "}
            {carInfo.releaseYear}
          </p>
          <p className="hover:text-orange-500">
            <span className="font-semibold text-white">Stock Available:</span>{" "}
            {carInfo.stockAvailable}
          </p>
          <div className="flex items-center justify-start gap-2">
            <Link href="/inventory">
              <Button variant="destructive">Previous Page</Button>
            </Link>
            <Button variant="success">Add To List</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
