"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../../components/data-table";
import Loading from "@/app/loading";
import { useDeleteCarMutation, useGetCarsQuery } from "../../redux/api/carsApi";
import { SquarePen, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useToast from "../../components/Shared/useCustomToast";

function ManageCars() {
  // rtk querys
  const {
    data: carsData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCarsQuery();
  const [deleteCar] = useDeleteCarMutation();

  // states
  const router = useRouter();
  const { showSuccess, showError } = useToast();

  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  // Sync fetched data
  useEffect(() => {
    if (carsData) {
      setCars(carsData);
      setFilteredCars(carsData); // show all by default
    }
  }, [carsData]);

  // Debounced search effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();
      if (!term) {
        setFilteredCars(cars);
      } else {
        const filtered = cars.filter(
          (car) =>
            car.brand.toLowerCase().includes(term) ||
            car.carName.toLowerCase().includes(term) ||
            car.modelName.toLowerCase().includes(term),
        );
        setFilteredCars(filtered);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, cars]);

  const handleClear = () => {
    setSearchTerm("");
    setFilteredCars(cars);
  };

  // Loading state
  if (isLoading) return <Loading message="Loading Cars data..." />;

  // Error state
  if (isError) {
    console.error("Error message:", error);
    return (
      <div className="p-6 text-center text-red-500">
        {error?.message || "Something went wrong!"}
      </div>
    );
  }

  // handle empty car data
  if (!carsData || carsData.length === 0) {
    return (
      <h1 className="mt-10 text-center text-lg">
        There are no car records available.
      </h1>
    );
  }

  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ getValue }) => (
        <Image
          src={getValue() || "/placeholder.jpg"}
          alt="Car"
          width={80}
          height={60}
          className="rounded object-cover"
        />
      ),
    },
    {
      accessorKey: "carName",
      header: "Car Name",
    },
    {
      accessorKey: "brand",
      header: "Brand Name",
    },
    {
      accessorKey: "modelName",
      header: "Car Model",
    },
    {
      accessorKey: "price",
      header: "Car Price",
      cell: ({ getValue }) => `${Number(getValue()).toLocaleString()} BTD`,
    },
    {
      accessorKey: "releaseYear",
      header: "Release Year",
    },
    {
      accessorKey: "stockAvailable",
      header: "Stock Available",
    },
    {
      accessorKey: "Action",
      header: "Action",
      cell: ({ row }) => {
        const carId = row.original._id;

        const handleUpdate = () => {
          router.push(`/dashboard/manageCars/updateCar?id=${carId}`);
        };

        const handleDelete = async () => {
          console.log("carid :", carId);
          await deleteCar(carId)
            .then(() => {
              showSuccess("Car Deleted Successfully!");
            })
            .catch(() => {
              console.log("Error adding car:", error);
              showError("Failed to delete car. Please try again.");
            })
            .finally(() => refetch());
        };
        return (
          <div className="flex items-center justify-center gap-2">
            {/* update button */}
            <button
              onClick={handleUpdate}
              className="cursor-pointer rounded-lg bg-yellow-600 px-3 py-1 text-sm font-medium capitalize text-black hover:bg-yellow-500"
            >
              <SquarePen size={20} />
            </button>
            {/* delete button */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="cursor-pointer rounded-lg bg-red-500 px-3 py-1 text-sm font-medium capitalize text-black hover:bg-red-600">
                  <Trash size={20} />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the car record.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-5">
      <div className="mx-auto mb-6 flex w-[95%] flex-wrap items-center gap-4">
        <Input
          type="text"
          placeholder="Search by brand, name, or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/3"
        />
        <Button variant="outline" onClick={handleClear}>
          Clear
        </Button>
        <Button
          variant="outline"
          className="ml-auto"
          onClick={() => router.push("/dashboard/manageCars/addCar")}
        >
          Add New Car
        </Button>
      </div>
      <DataTable columns={columns} data={filteredCars} />
    </div>
  );
}

export default ManageCars;
