import { DataTable } from "@/components/data-table";
import { rows } from "./testData";

function page() {
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
  ];
  return <DataTable columns={columns} data={rows} />;
}

export default page;
