"use client";

import { useRouter } from "next/navigation";
import useToast from "../../Shared/useCustomToast";
import { useInitPaymentMutation } from "@/app/redux/api/paymentsApi";

function PaymentCell({ getValue, orderData, disabled }) {
  const [initPayment] = useInitPaymentMutation();
  const router = useRouter();
  const { showError } = useToast();

  const value = getValue();

  const handleClick = async () => {
    try {
      const res = await initPayment(orderData).unwrap();
      if (res?.GatewayPageURL) {
        router.push(res.GatewayPageURL);
      } else {
        showError("Payment gateway link not received.");
      }
    } catch (err) {
      showError("Payment initialization failed.");
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={value === "Paid" || disabled}
      className={`rounded-xl px-6 py-1 text-sm font-medium capitalize ${
        value === "Paid"
          ? "cursor-not-allowed bg-green-500 text-black hover:bg-green-600"
          : value === "Unpaid"
            ? "bg-yellow-400 text-black hover:bg-yellow-600"
            : value === "Failed"
              ? "bg-red-500 text-black hover:bg-red-600"
              : "bg-gray-400 text-black"
      } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {value === "Paid" ? "Paid" : value === "Failed" ? "Retry" : "Pay"}
    </button>
  );
}

export default PaymentCell;
