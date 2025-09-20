"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function LogInPage() {
  const [errorMessage, seterrorMessage] = useState(null);
  const router = useRouter();
  interface Inputs {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  async function onSubmit(values: Inputs) {
    console.log(values);
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect:false
      });
      console.log(response);
       if(response?.ok){
        router.push("/")
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="w-1/2 mx-auto my-10">
      <h2 className="text-3xl tracking-tighter font-bold my-5">Log in now</h2>
      {errorMessage && (
        <p className="text-red-500 text-center text-2xl">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" className="px-7 py-5 mt-4 cursor-pointer">
          Log in
        </Button>
      </form>
    </div>
  );
}
