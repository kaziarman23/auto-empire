"use client";

import React from "react";

function Loading({ message = "Loading..." }) {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <h1 className="text-5xl font-bold italic text-stone-600">{message}</h1>
    </div>
  );
}

export default Loading;
