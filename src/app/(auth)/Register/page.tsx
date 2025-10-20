"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const [errorMessage, seterrorMessage] = useState(null);
  const router = useRouter();
  interface Inputs {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  async function onSubmit(values: Inputs) {
    console.log(values);
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      console.log(response);
      if (response?.data?.message === "success") {
        router.push("/Log-in");
      }
      seterrorMessage(null);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        seterrorMessage(error.response?.data.message);
      }
    }
  }
  return (
    <div className="w-1/2 mx-auto my-10">
      <h2 className="text-3xl tracking-tighter font-bold my-5">Register now</h2>
      {errorMessage && (
        <p className="text-red-500 text-center text-2xl">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Enter your name"
          className="p-5 my-3.5"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <Input
          type="email"
          placeholder="Enter your email"
          className="p-5 my-3.5"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input
          type="password"
          placeholder="Enter your password"
          className="p-5 my-3.5"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <Input
          type="password"
          placeholder="Confirm your password"
          className="p-5 my-3.5"
          {...register("rePassword", { required: "Confirm your password" })}
        />
        {errors.rePassword && (
          <p className="text-red-500">{errors.rePassword.message}</p>
        )}
        <Input
          type="tel"
          placeholder="Enter your phone number"
          className="p-5 my-3.5"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        <Button type="submit" className="px-7 py-5 mt-4 cursor-pointer">
          Register
        </Button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link
            href="/Log-in"
            className="font-medium text-primary underline hover:text-primary/80 transition-colors"
          >
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
}
