import { DataTable } from "@/components/data-table";
import { rows } from "./test";

function page() {
  const columns = [
    {
      accessorKey: "buyerName",
      header: "Buyer Name",
    },
    {
      accessorKey: "buyerEmail",
      header: "Buyer Email",
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
      accessorKey: "paymentStatus",
      header: "Payment Status",
    },
    {
      accessorKey: "orderStatus",
      header: "Car Status",
    },
  ];
  return <DataTable columns={columns} data={rows} />;
}

export default page;
