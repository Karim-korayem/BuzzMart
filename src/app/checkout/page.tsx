"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../context/CartContext";
import { getCashPayment, getOnlinePayment } from "../actions/payment.action";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function checkoutPage() {
  const [errorMessage, seterrorMessage] = useState(null);
  const router = useRouter();
  const { cartDetails, setCartdetails } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online" | null>(
    null
  );
  const cartId = cartDetails?.cartId;
  interface Inputs {
    details: string;
    city: string;
    phone: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  async function onSubmit(values: Inputs) {
    if (paymentMethod == "cash") {
      try {
        const response = await getCashPayment(cartId as string, values);
        console.log(response);
        if (response?.data.status === "success") {
          setCartdetails(null);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (paymentMethod == "online") {
      try {
        const response = await getOnlinePayment(cartId as string, values);
        console.log(response);
        if (response?.data.status === "success") {
          window.location.href = response.data.session.url;
        }
      } catch (error) {
        console.log(error);
      }
    }
    console.log(paymentMethod, "from checkout");
  }
  return (
    <div className="w-1/2 mx-auto my-10">
      <h2 className="text-3xl tracking-tighter font-bold my-5">Payment</h2>
      {errorMessage && (
        <p className="text-red-500 text-center text-2xl">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Enter your details"
          className="p-5 my-3.5"
          {...register("details", { required: "details is required" })}
        />
        {errors.details && (
          <p className="text-red-500">{errors.details.message}</p>
        )}

        <Input
          type="tel"
          placeholder="Enter your phone number"
          className="p-5 my-3.5"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <Input
          type="text"
          placeholder="Enter your city"
          className="p-5 my-3.5"
          {...register("city", { required: "city is required" })}
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}

        <RadioGroup
          onValueChange={(val) => setPaymentMethod(val as "online" | "cash")}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash">Cash Payment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online">Online Payment</Label>
          </div>
        </RadioGroup>

        <Button type="submit" className="px-7 py-5 mt-4 cursor-pointer">
          Checkout
        </Button>
      </form>
    </div>
  );
}
