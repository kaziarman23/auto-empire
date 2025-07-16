"use client";

import { DataTable } from "@/components/data-table";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "@/app/loading";
import Image from "next/image";
import { useGetOrdersQuery } from "../../redux/api/orderListApi";

function MyCarsPage() {
  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ getValue }) => (
        <Image
          src={getValue()}
          alt="Car"
          width={80} // 24 * 4
          height={60} // 16 * 4
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
      header: "Car Brand",
    },
    {
      accessorKey: "modelName",
      header: "Car Model",
    },
    {
      accessorKey: "price",
      header: "Car Price",
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ getValue }) => {
        const value = getValue();
        const isPaid = value === "Paid";
        return (
          <button
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              isPaid ? "bg-green-400 text-black" : "bg-yellow-400 text-black"
            }`}
          >
            {value}
          </button>
        );
      },
    },
    {
      accessorKey: "orderStatus",
      header: "Order Status",
      cell: ({ getValue }) => {
        const value = getValue();
        let styles = "bg-gray-400 text-black";
        if (value === "Confirmed") styles = "bg-blue-400 text-black";
        if (value === "Delivered") styles = "bg-green-400 text-black";
        if (value === "Cancelled") styles = "bg-red-400 text-black";

        return (
          <button
            className={`rounded-full px-3 py-1 text-sm font-medium ${styles}`}
          >
            {value}
          </button>
        );
      },
    },
  ];

  const { user, isLoading, isError, error } = useCurrentUser();
  const {
    data: orderData,
    isLoading: ordersLoading,
    isError: ordersIsError,
    error: ordersError,
  } = useGetOrdersQuery();

  if (isLoading || ordersLoading) return <Loading />;

  if (isError || ordersIsError || !user || !orderData) {
    return (
      <p className="text-red-600">
        Error:{" "}
        {error?.message || ordersError?.message || "Failed to load data."}
      </p>
    );
  }

  // Ensure email is defined and safely filter
  const orders =
    orderData?.filter((order) => order.buyerEmail === user?.userEmail) ?? [];

  return <DataTable columns={columns} data={orders} />;
}

export default MyCarsPage;
