"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetCarsQuery } from "../../app/redux/api/carsApi";
import useToast from "../Shared/useCustomToast";
import { useEffect, useState, useMemo } from "react";
import Loading from "@/app/loading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function InventoryPage() {
  // states
  const { data: carsData, isLoading, isError, error } = useGetCarsQuery();
  const { showError } = useToast();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // handle errors
  useEffect(() => {
    if (isError) {
      console.error("Error While fetching Cars data: ", error.error);
      showError("Error While fetching Cars data");
    }
  }, [isError, error, showError]);

  // debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // filter cars
  const filteredCars = useMemo(() => {
    if (!carsData) return [];
    return carsData.filter(
      (car) =>
        car.carName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        car.brand.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        String(car.model || "")
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()),
    );
  }, [carsData, debouncedSearch]);

  // pagination logic
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Handle Loading
  if (isLoading) {
    return <Loading message="Loading Cars Data..." />;
  }

  return (
    <div className="mx-auto h-full w-4/5 overflow-hidden">
      <h1 className="mb-10 mt-20 text-center text-5xl font-bold italic text-stone-600">
        Our Inventory
      </h1>
      <p className="mx-auto mt-10 text-left text-lg text-white">
        Browse our wide selection of vehicles. Use the search bar to quickly
        find a car by its
        <span className="font-semibold"> name</span>,{" "}
        <span className="font-semibold">brand</span>, or{" "}
        <span className="font-semibold">model</span>. You can also navigate
        through pages to explore our full inventory.
      </p>

      {/* Search Bar */}
      <div className="my-6 flex items-center justify-between gap-3 px-1">
        <Input
          type="text"
          placeholder="Search by name, brand, or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        {searchTerm && (
          <Button
            variant="outline"
            onClick={() => setSearchTerm("")}
            className="shrink-0"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Cars Grid */}
      <div className="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {paginatedCars.length > 0 ? (
          paginatedCars.map((card, i) => (
            <Card
              key={i}
              className="bg-base-100 h-[28rem] w-full overflow-hidden rounded-xl border-2 border-white shadow-sm"
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
              <CardContent className="h-1/2 w-full space-y-3 p-5 text-white">
                <h2 className="text-xl font-bold hover:text-orange-500">
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
                <div className="flex justify-end">
                  <Link href={`/inventory/${card._id}`}>
                    <Button className="w-full rounded-xl border border-white bg-black text-white hover:bg-white hover:font-bold hover:text-black">
                      Get it Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500">
            No cars found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default InventoryPage;
