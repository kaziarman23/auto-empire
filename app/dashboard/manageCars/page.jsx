"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ManageCars() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [cars, setCars] = useState();

  // const filteredCars = cars.filter(
  //   (car) =>
  //     car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     car.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     car.modelName.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <Input
          type="text"
          placeholder="Search..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
        <Button variant="outline" className="ml-auto">
          Add New Car
        </Button>
      </div>
    </div>
  );
}

export default ManageCars;
