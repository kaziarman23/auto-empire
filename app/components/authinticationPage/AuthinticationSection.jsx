"use client";

import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

function AuthinticationSection() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-100 font-[Montserrat]">
      <div
        className={`relative min-h-[480px] w-[768px] max-w-full overflow-hidden rounded-[30px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 transition-all duration-[600ms] ease-in-out ${
            isActive ? "z-[5] translate-x-full opacity-100" : "z-[1] opacity-0"
          }`}
        >
          <form className="flex h-full flex-col items-center justify-center bg-white px-10">
            <h1 className="text-xl font-bold">Create Account</h1>
            <div className="my-5 flex">
              <a
                href="#"
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300"
              >
                <FaGithub />
              </a>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm outline-none"
            />
            <button className="mt-2 rounded-md border border-transparent bg-indigo-800 px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div
          className={`absolute left-0 top-0 z-[2] h-full w-1/2 transition-all duration-[600ms] ease-in-out ${
            isActive ? "translate-x-full" : ""
          }`}
        >
          <form className="flex h-full flex-col items-center justify-center bg-white px-10">
            <h1 className="text-xl font-bold">Sign In</h1>
             <div className="my-5 flex">
              <a
                href="#"
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300"
              >
                <FaGithub />
              </a>
            </div>
            <span className="text-xs">or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm outline-none"
            />
            <a href="#" className="mb-2 mt-4 text-sm text-gray-700">
              Forget Your Password?
            </a>
            <button className="mt-2 rounded-md border border-transparent bg-indigo-800 px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white">
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={`absolute left-1/2 top-0 z-[1000] h-full w-1/2 overflow-hidden rounded-[150px_0_0_100px] transition-all duration-[600ms] ease-in-out ${
            isActive ? "-translate-x-full rounded-[0_150px_100px_0]" : ""
          }`}
        >
          <div
            className={`relative -left-full h-full w-[200%] bg-gradient-to-r from-indigo-400 to-indigo-800 text-white transition-all duration-[600ms] ease-in-out ${
              isActive ? "translate-x-1/2" : ""
            }`}
          >
            {/* Toggle Left */}
            <div
              className={`absolute left-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-all duration-[600ms] ease-in-out ${
                isActive ? "translate-x-0" : "-translate-x-[200%]"
              }`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="my-5 text-sm">
                Enter your personal details to use all of site features
              </p>
              <button
                className="mt-2 rounded-md border border-white bg-transparent px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white"
                id="login"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>

            {/* Toggle Right */}
            <div
              className={`absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-all duration-[600ms] ease-in-out ${
                isActive ? "translate-x-[200%]" : ""
              }`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="my-5 text-sm">
                Register with your personal details to use all of site features
              </p>
              <button
                className="mt-2 rounded-md border border-white bg-transparent px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white"
                id="register"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthinticationSection;
