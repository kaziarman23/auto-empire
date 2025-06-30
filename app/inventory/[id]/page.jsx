"use client";

import { useParams } from "next/navigation";
import { useGetCarsQuery } from "../../redux/api/carsApi";
import useToast from "../../components/Shared/useCustomToast";
import { useEffect, useMemo } from "react";
import Image from "next/image";

function CarDetails(params) {
  // states
  const { showError } = useToast();
  const { id } = useParams();
  const { data: carsData, isLoading, isError, error } = useGetCarsQuery();

  const carInfo = useMemo(
    () => carsData?.filter((data) => data._id === id),
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

  console.log("id: ", id);
  console.log("carInfo: ", carInfo);

  return (
    <div id="hero" className="mx-auto h-[100vh] w-4/5 overflow-hidden">
      <h1 className="mt-20 text-center text-4xl font-bold italic text-stone-600">
        Car Details
      </h1>
      {/* Card Section */}
     
    </div>
  );
}

export default CarDetails;
