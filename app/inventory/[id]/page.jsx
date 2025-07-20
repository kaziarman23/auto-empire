"use client";

import { useParams, useRouter } from "next/navigation";
import { useGetCarsQuery } from "../../redux/api/carsApi";
import useToast from "../../components/Shared/useCustomToast";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useGetUsersQuery } from "../../redux/api/usersApi";
import { useSelector } from "react-redux";
import { useAddOrderMutation } from "../../redux/api/orderListApi";
import Loading from '@/app/loading';

function CarDetails() {
  const { id } = useParams();
  const { showError, showSuccess } = useToast();
  const router = useRouter();

  // Redux state
  const currentUser = useSelector((state) => state.user);

  // Queries
  const [addOrder] = useAddOrderMutation();
  const { data: userData, isLoading: usersLoading } = useGetUsersQuery();
  const {
    data: carsData,
    isLoading: carsLoading,
    isError,
    error,
  } = useGetCarsQuery();

  // Get current user from users list
  const usersArray = Array.isArray(userData) ? userData : userData?.users;
  const user = useMemo(() => {
    return usersArray?.find(
      (u) =>
        u.userEmail?.toLowerCase().trim() ===
        currentUser?.userEmail?.toLowerCase().trim(),
    );
  }, [usersArray, currentUser]);

  // Get car info
  const carInfo = useMemo(() => {
    return carsData?.find((car) => car._id === id);
  }, [carsData, id]);

  // Handle errors
  useEffect(() => {
    if (isError) {
      console.error("Error While fetching Cars data:", error?.error);
      showError("Error while fetching car data.");
    }
  }, [isError, error, showError]);

  // Handle loading
  if (carsLoading || usersLoading) {
    return <Loading message="Loading User Data..." />;
  }

  if (!carInfo) {
    return (
      <div className="mt-20 text-center text-xl text-white">Car not found.</div>
    );
  }

  const handleSubmit = async () => {
    const orderData = {
      buyerName: user.userName,
      buyerEmail: user.userEmail,
      buyerId: user._id,
      brand: carInfo.brand,
      carName: carInfo.carName,
      modelName: carInfo.modelName,
      price: carInfo.price,
      image: carInfo.image,
      paymentStatus: "Unpaid",
      orderStatus: "Pending",
    };

    try {
      await addOrder(orderData).unwrap();
      showSuccess("Order Taken Successfully");
      router.push("/inventory");
    } catch (error) {
      console.error("Order error:", error);
      showError("Something Went Wrong!, Try Again");
      router.push("/inventory");
    }
  };

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
            <Button variant="success" onClick={handleSubmit}>
              Add To List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
