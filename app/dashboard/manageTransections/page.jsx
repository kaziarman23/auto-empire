"use client";

import { DataTable } from "@/components/data-table";
import Loading from "@/app/loading";
import { useGetTransactionsQuery } from "@/app/redux/api/transactionListApi";
import PaymentCell from "@/components/cells/paymentCell/page";
import OrderCell from "@/components/cells/orderCell/page";

function MyCarsPage() {
  const columns = [
    { accessorKey: "transactionId", header: "Transaction ID" },
    { accessorKey: "carName", header: "Car Name" },
    { accessorKey: "modelName", header: "Car Model" },

    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue }) => `${Number(getValue()).toLocaleString()} BTD`,
    },
    { accessorKey: "card_issuer", header: "Card Issuer" },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ getValue, row }) => {
        return (
          <PaymentCell
            getValue={getValue}
            orderData={row.original}
            disabled={true}
          />
        );
      },
    },
    {
      accessorKey: "orderStatus",
      header: "Order Status",
      cell: ({ getValue }) => {
        return <OrderCell getValue={getValue} />;
      },
    },
  ];

  const { data, isLoading, isError, error } = useGetTransactionsQuery();

  if (isLoading) return <Loading message="Loading data..." />;

  if (isError) {
    return (
      <p className="text-red-600">
        Error:
        {error?.message || "Failed to load data."}
      </p>
    );
  }

  return <DataTable columns={columns} data={data} />;
}

export default MyCarsPage;
