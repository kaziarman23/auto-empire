import { DataTable } from "@/components/data-table";
import { rows } from "./test";

function page() {
  const columns = [
    {
      accessorKey: "user Name",
      header: "Name",
    },
    {
      accessorKey: "user Email",
      header: "Email",
    },
    {
      accessorKey: "Buying Car",
      header: "carBrand",
    },
    ,
    {
      accessorKey: "Payment status",
      header: "PaymentStatus",
    },
    {
      accessorKey: "Car Status",
      header: "carStatus",
    },
  ];
  return <DataTable columns={columns} data={rows} />;
}

export default page;
