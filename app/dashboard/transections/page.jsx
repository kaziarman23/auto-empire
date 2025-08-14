"use client";

import { DataTable } from "@/components/data-table";
import useCurrentUser from "@/hooks/useCurrentUser";
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

  // states
  const {
    data: transactionData,
    isLoading: transactionLoading,
    isError: transactionIsError,
    error: transactionError,
  } = useGetTransactionsQuery();

  const { user, isLoading, isError, error } = useCurrentUser();

  if (isLoading || transactionLoading)
    return <Loading message="Loading data..." />;

  if (isError || !user || transactionIsError) {
    return (
      <p className="text-red-600">
        Error:{" "}
        {error?.message || "Failed to load data." || transactionError?.message}
      </p>
    );
  }

  const data = transactionData.filter(
    (tran) => tran.buyerEmail === user.userEmail,
  );

  return <DataTable columns={columns} data={data} />;
}

export default MyCarsPage;
