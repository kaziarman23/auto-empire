"use client";

import { DataTable } from "@/components/data-table";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "@/app/loading";
import { carData } from './transectionData';

function MyCarsPage() {
  const columns = [
    {
      accessorKey: "carName",
      header: "Car Name",
    },
    {
      accessorKey: "carModel",
      header: "Car Model",
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ getValue }) => {
        const value = getValue();
        const isPaid = value === "Paid";

        const handleClick = () => {
          // TODO: Have To do the payment stuff
        };

        return (
          <button
            onClick={handleClick}
            className={`rounded-xl px-6 py-1 text-sm font-medium capitalize ${
              isPaid
                ? "bg-green-400 text-black hover:bg-green-600"
                : "bg-yellow-400 text-black hover:bg-yellow-600"
            }`}
          >
            {value === "Paid" ? value : "pay"}
          </button>
        );
      },
    },
    {
      accessorKey: "paymentId",
      header: "Payment Id",
    },
  ];

  const { user, isLoading, isError, error } = useCurrentUser();

  if (isLoading) return <Loading message="Loading data..." />;

  if (isError || !user ) {
    return (
      <p className="text-red-600">
        Error: {error?.message || "Failed to load data."}
      </p>
    );
  }

  return <DataTable columns={columns} data={carData} />;
}

export default MyCarsPage;
