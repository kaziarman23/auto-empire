const PaymentStatusButton = ({ status, onPay }) => {
  const isPaid = status.toLowerCase() === "paid";

  // Styles are determined dynamically based on the 'isPaid' status
  const buttonClasses = `
    rounded-xl px-6 py-2 text-sm font-medium capitalize transition-colors duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${
      isPaid
        ? "bg-green-100 text-green-800 cursor-not-allowed"
        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:ring-yellow-500"
    }
  `;

  // The onClick handler is only active if the status is not 'Paid'
  const handleClick = () => {
    if (!isPaid && onPay) {
      onPay();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
      disabled={isPaid}
      aria-label={isPaid ? `Status: Paid` : `Make Payment`}
    >
      {isPaid ? "Paid" : "Pay Now"}
    </button>
  );
};

// Main App component to demonstrate the usage of PaymentStatusButton
export default function App() {
  // Sample data simulating what you might get from an API
  const payments = [
    { id: 1, user: "Alice", paymentStatus: "Paid" },
    { id: 2, user: "Bob", paymentStatus: "Pending" },
    { id: 3, user: "Charlie", paymentStatus: "Unpaid" },
    { id: 4, user: "Diana", paymentStatus: "Paid" },
  ];

  // This function would handle the payment logic
  const handlePayment = (paymentId) => {
    // In a real app, you would show a modal or redirect to a payment page.
    // For this demo, we'll just log to the console.
    console.log(`Initiating payment for payment ID: ${paymentId}`);
    // You could show a confirmation message here using a toast or modal.
  };

  // This is how you might define your table columns using a library like TanStack Table
  const columns = [
    {
      accessorKey: "user",
      header: "User",
      cell: ({ getValue }) => <div className="font-medium">{getValue()}</div>,
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      // The cell renderer now uses the reusable PaymentStatusButton component
      cell: ({ row, getValue }) => {
        const status = getValue();
        const paymentId = row.original.id;

        return (
          <PaymentStatusButton
            status={status}
            onPay={() => handlePayment(paymentId)}
          />
        );
      },
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 font-sans">
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="p-6">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Customer Payments
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Below is a list of recent payments. Click &#34;Pay Now&#34; to
            complete a transaction.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((col) => (
                  <th key={col.accessorKey} scope="col" className="px-6 py-3">
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {payment.user}
                  </td>
                  <td className="px-6 py-4">
                    {/* Simulating the cell rendering logic from the column definition */}
                    <PaymentStatusButton
                      status={payment.paymentStatus}
                      onPay={() => handlePayment(payment.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
