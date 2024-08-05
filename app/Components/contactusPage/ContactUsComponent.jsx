"use client";

import React from "react";
import { useForm } from "react-hook-form";

function ContactUsComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-96 h-4/5 rounded-2xl bg-zinc-800">
        <h1 className="text-2xl font-bold p-2 text-center">Contact Us</h1>
        <form
          className="ml-10 my-5 text-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name" className="text-xl">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            className="mb-3 mt-2 rounded-lg p-2"
            placeholder="Enter you'r Name"
            {...register("name", {
              required: "Name is Required",
            })}
          />
          <br />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <br />
          <input
            type="text"
            id="email"
            className="mb-3 mt-2 rounded-lg p-2"
            placeholder="Enter you'r Email"
            {...register("email", {
              required: "Email is Required",
              validate: (value) => {
                if(!value.includes("@")){
                    return "Email must include @"
                }
                return true
              },
            })}
          />
          <br />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <label htmlFor="password" className="text-xl">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="mt-2 rounded-lg p-2"
            placeholder="Enter you'r Password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password have must at least 8 characters"
              },
            })}
          />
          <br />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn btn-outline btn-success mt-5">
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsComponent;
