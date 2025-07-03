import { DataTable } from "@/components/data-table";
import data from "../data.json";

function page() {
  return <DataTable data={data} />;
}

export default page;
