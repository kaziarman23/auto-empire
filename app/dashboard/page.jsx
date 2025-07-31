import React from "react";

function DashboardPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="mb-4 text-3xl font-bold">Welcome to the Dashboard</h1>

      <p className="mb-6 text-lg">
        At <span className="font-semibold text-orange-400">AutoEmpire</span>, we
        specialize in premium vehicle management and sales solutions. Whether
        you&#39;re managing a fleet or browsing top-tier listings, our platform
        empowers you with the tools you need to succeed.
      </p>

      <p className="mb-8">
        On this dashboard, you can:
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>View and manage your car listings</li>
          <li>Track sales performance and inquiries</li>
          <li>Monitor vehicle inventory in real time</li>
          <li>Access detailed analytics and reports</li>
        </ul>
      </p>

      <div className="mt-12 border-t border-gray-700 pt-6">
        <h2 className="mb-2 text-2xl font-semibold text-orange-400">
          About AutoEmpire
        </h2>
        <p className="text-gray-300">
          AutoEmpire was founded with a mission to transform the way vehicles
          are bought, sold, and managed. Our technology-first approach enables
          dealerships, individual sellers, and fleet managers to operate with
          speed, insight, and confidence. We are committed to innovation,
          reliability, and delivering exceptional value to our clients across
          the automotive industry.
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;
