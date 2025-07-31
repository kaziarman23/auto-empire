"use client";

import React from "react";

function Loading({ message = "Loading..." }) {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <h1 className="text-xs font-bold italic text-stone-600 sm:text-sm md:text-base lg:text-lg xl:text-5xl">
        {message}
      </h1>
    </div>
  );
}

export default Loading;
