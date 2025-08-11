"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const router = useRouter();

  // useEffect(() => {
  //   // Optional: redirect to orders page after a few seconds
  //   const timer = setTimeout(() => {
  //     router.push("/orders"); // change this to where you want them to go
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md rounded-xl border border-green-300 bg-black p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-green-600">Payment Successful 🎉</h1>
        <p className="mt-3 text-white">
          Thank you! Your payment has been processed successfully.
        </p>
        <p className="mt-1 text-sm text-white">
          You will be redirected shortly...
        </p>

        <button
          onClick={() => router.push("/orders")}
          className="mt-6 w-full rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
        >
          Go to My Orders
        </button>
      </div>
    </main>
  );
}
