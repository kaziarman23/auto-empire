"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function ContactUsComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await emailjs.send(
        "service_10511gd",
        "template_5kzeo65",
        data,
        "IalesJMFLKnrqZHs1"
      );

      alert(
        "Thank you for your message. A confirmation email has been sent to you."
      );
      reset();
    } catch (error) {
      console.error("There was an error!", error);
      alert("There was a problem sending your message. Please try again.");
    }
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
            placeholder="name"
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
            placeholder="email"
            {...register("email", {
              required: "Email is Required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
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
            placeholder="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password have must at least 8 characters",
              },
            })}
          />
          <br />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-outline btn-success mt-5"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsComponent;
