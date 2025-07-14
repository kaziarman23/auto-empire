"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useAddUserMutation } from "../../redux/api/usersApi";
import useToast from "../Shared/useCustomToast";
import { useDispatch } from "react-redux";
import {
  createUser,
  githubSignIn,
  googleSignIn,
  loginUser,
} from "../../redux/slices/userSlice";

function AuthinticationSection() {
  // State
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";
  const dispatch = useDispatch();
  const [addUser] = useAddUserMutation();
  const { showSuccess, showError } = useToast();

  // React Hook Form - Sign In
  const {
    register: registerSignIn,
    handleSubmit: handleSignIn,
    formState: { errors: signInErrors },
    reset: resetSignIn,
  } = useForm();

  // React Hook Form - Sign Up
  const {
    register: registerSignUp,
    handleSubmit: handleSignUp,
    formState: { errors: signUpErrors },
    reset: resetSignUp,
  } = useForm();

  // Handle Form Submit- Sign In
  const onSignIn = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push(from);

        // showing an alert
        showSuccess("Sign-In Successfull!");
      })
      .catch(() => {

        // showing an alert
        showError("Error In Signin Process, Try Again!");
      });
  };

  // Handle Form Submit- Sign Up
  const onSignUp = (data) => {
    // updating the user information by dispatch
    dispatch(createUser(data))
      .unwrap()
      .then(() => {
        // sending data in the server
        const userInfo = {
          userName: data.userName,
          userEmail: data.userEmail.trim().toLowerCase(),
          userPhoto:
            "https://i.pinimg.com/736x/90/d0/ad/90d0ad3daae6db158d099f7a6723ec3f.jpg",
          userIsVerified: false,
          userRole: "user",
        };

        addUser(userInfo);

        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push("/");

        // showing an alert
        showSuccess("Sign-Up Successfull!");
      })
      .catch(() => {

        // showing an alert
        showError("Error In Signup Process, Try Again!");
      });
  };

  // Handle Google Authintication
  const handleGoogleAuthintication = () => {
    dispatch(googleSignIn())
      .unwrap()
      .then((data) => {

        // sending data in the server
        const userInfo = {
          userName: data.userName,
          userEmail: data.userEmail,
          userPhoto: data.userPhoto,
          userIsVerified: data.userIsVerified,
          userRole: "user",
        };

        addUser(userInfo);

        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push(from);

        // showing an alert
        showSuccess("Sign-Up Successfull!");
      })
      .catch((error) => {

        // clearing all inputs
        resetSignIn();
        resetSignUp();

        // showing an alert
        showError("Error In Signup Process, Try Again!");
      });
  };

  // Handle Github Authintication
  const handleGithubAuthintication = () => {
    dispatch(githubSignIn())
      .unwrap()
      .then((data) => {
        // sending data in the server
        const userInfo = {
          userName: data.userName,
          userEmail: data.userEmail,
          userPhoto: data.userPhoto,
          userIsVerified: data.userIsVerified,
          userRole: "user",
        };

        addUser(userInfo);

        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push(from);

        // showing an alert
        showSuccess("Sign-Up Successfull!");
      })
      .catch(() => {

        // clearing all inputs
        resetSignIn();
        resetSignUp();

        // showing an alert
        showError("Error In Signup Process, Try Again!");
      });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <div
        className={`relative min-h-[480px] w-[768px] max-w-full overflow-hidden rounded-[30px] border-2 border-white bg-black ${isActive ? "active" : ""}`}
      >
        {/* Sign Up */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 transition-all duration-700 ease-in-out ${
            isActive ? "z-[5] translate-x-full opacity-100" : "z-[1] opacity-0"
          }`}
        >
          <form
            onSubmit={handleSignUp(onSignUp)}
            className="flex h-full flex-col items-center justify-center bg-black px-10"
          >
            <h1 className="text-xl font-bold">Create Account</h1>
            <div className="my-5 flex">
              <button
                onClick={handleGoogleAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 hover:bg-white hover:text-black"
              >
                <FaGoogle />
              </button>
              <button
                onClick={handleGithubAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 hover:bg-white hover:text-black"
              >
                <FaGithub />
              </button>
            </div>
            <span className="text-xs">or use your email for registration</span>
            {/* Signup Inputs */}
            <input
              type="text"
              placeholder="Name"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignUp("userName", { required: "Name is required" })}
            />
            {signUpErrors.userName && (
              <p className="text-xs text-red-500">
                {signUpErrors.userName.message}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignUp("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {signUpErrors.userEmail && (
              <p className="text-xs text-red-500">
                {signUpErrors.userEmail.message}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignUp("userPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {signUpErrors.userPassword && (
              <p className="text-xs text-red-500">
                {signUpErrors.userPassword.message}
              </p>
            )}
            <button className="mt-2 rounded-md border border-white bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In */}
        <div
          className={`absolute left-0 top-0 z-[2] h-full w-1/2 transition-all duration-700 ease-in-out ${
            isActive ? "translate-x-full" : ""
          }`}
        >
          <form
            onSubmit={handleSignIn(onSignIn)}
            className="flex h-full flex-col items-center justify-center bg-black px-10"
          >
            <h1 className="text-xl font-bold">Sign In</h1>
            <div className="my-5 flex">
              <button
                onClick={handleGoogleAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 hover:bg-white hover:text-black"
              >
                <FaGoogle />
              </button>
              <button
                onClick={handleGithubAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 hover:bg-white hover:text-black"
              >
                <FaGithub />
              </button>
            </div>
            <span className="text-xs">or use your email password</span>
            {/* Signin Inputs */}
            <input
              placeholder="Email"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignIn("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {signInErrors.userEmail && (
              <p className="text-xs text-red-500">
                {signInErrors.userEmail.message}
              </p>
            )}
            <input
              {...registerSignIn("userPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
            />
            {signInErrors.userPassword && (
              <p className="text-xs text-red-500">
                {signInErrors.userPassword.message}
              </p>
            )}
            <button className="mt-2 rounded-md border border-white bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black">
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={`absolute left-1/2 top-0 z-[1000] h-full w-1/2 overflow-hidden transition-all duration-700 ease-in-out ${
            isActive ? "-translate-x-full" : ""
          }`}
          style={{
            borderRadius: isActive ? "0 150px 100px 0" : "150px 0 0 100px",
          }}
        >
          <div
            className={`relative -left-full h-full w-[200%] bg-white text-black transition-all duration-700 ease-in-out ${
              isActive ? "translate-x-1/2" : ""
            }`}
          >
            {/* Toggle Left */}
            <div
              className={`absolute left-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out ${
                isActive ? "translate-x-0" : "-translate-x-[200%]"
              }`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="my-5 text-sm">
                Enter your personal details to use all of site features
              </p>
              <button
                className="mt-2 cursor-pointer rounded-md border-2 border-black bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black"
                id="login"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>

            {/* Toggle Right */}
            <div
              className={`absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out ${
                isActive ? "translate-x-[200%]" : ""
              }`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="my-5 text-sm">
                Register with your personal details to use all of site features
              </p>
              <button
                className="mt-2 cursor-pointer rounded-md border-2 border-black bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black"
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
