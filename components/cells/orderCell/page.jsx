import React from "react";

function OrderCell({ getValue }) {
  const value = getValue();

  let styles = "bg-gray-400 text-black";
  if (value === "Processing") styles = "bg-blue-400 text-black";
  if (value === "Delivered") styles = "bg-green-400 text-black";
  if (value === "Cancelled") styles = "bg-red-500 text-black";
  if (value === "Failed") styles = "bg-orange-500 text-black";

  return (
    <button
      disabled
      className={`cursor-not-allowed rounded-xl px-6 py-1 text-sm font-medium capitalize ${styles}`}
    >
      {value}
    </button>
  );
}

export default OrderCell;
