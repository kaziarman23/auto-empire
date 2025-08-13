"use client";

import { useRouter } from "next/navigation";
import useToast from "../../Shared/useCustomToast";
import { useInitPaymentMutation } from "../../../app/redux/api/paymentsApi";

function PaymentCell({ getValue, orderData }) {
  const [initPayment] = useInitPaymentMutation();
  const router = useRouter();
  const { showError } = useToast();

  const value = getValue();
  const isPaid = value?.toLowerCase() === "paid";

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
      disabled={isPaid}
      className={`rounded-xl px-6 py-1 text-sm font-medium capitalize ${
        isPaid
          ? "cursor-not-allowed bg-green-400 text-black hover:bg-green-600"
          : "bg-yellow-400 text-black hover:bg-yellow-600"
      }`}
    >
      {isPaid ? value : "pay"}
    </button>
  );
}

export default PaymentCell;
