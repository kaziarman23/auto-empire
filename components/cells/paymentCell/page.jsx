import { useRouter } from "next/navigation";
import useToast from "../../Shared/useCustomToast";
import { useInitPaymentMutation } from "../../../app/redux/api/paymentsApi";

function PaymentCell({ getValue, orderData }) {
  // rtk query
  const [initPayment] = useInitPaymentMutation();

  const router = useRouter();
  const { showSuccess, showError } = useToast();

  const value = getValue();
  const isPaid = value === "Paid";

  const handleClick = async () => {
    const res = await initPayment(orderData).unwrap();

    if (res?.GatewayPageURL) {
      router.push(res.GatewayPageURL);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-xl px-6 py-1 text-sm font-medium capitalize ${
        isPaid
          ? "bg-green-400 text-black hover:bg-green-600"
          : "bg-yellow-400 text-black hover:bg-yellow-600"
      }`}
    >
      {value === "paid" ? value : "pay"}
    </button>
  );
}

export default PaymentCell;
