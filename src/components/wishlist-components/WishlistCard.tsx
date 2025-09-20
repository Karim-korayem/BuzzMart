"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { removeProductFromWishlist } from "@/app/actions/wishlist.action";
import { WishlistItem } from "@/app/types/wishlistItem";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { useWishlist } from "@/app/context/WishlistContext";
import toast from "react-hot-toast";
import { useCart } from "@/app/context/CartContext";
import { addProductToCart } from "@/app/actions/cart.action";

export default function WishlistCard() {
const { getCartDetails } = useCart();
  const { wishlistDetails, getWishlistDetails } = useWishlist();
  console.log(wishlistDetails, "wishdetails");
  


  async function removeProductFromWishlistCard(productId: string) {
    const response = await removeProductFromWishlist(productId);
    toast.success("Removed Succesfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await getWishlistDetails();
  }

  
 async function handleAddToCart(productId: string) {
    const response = await addProductToCart(productId);
    console.log(response);
    toast.success(response?.message, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await getCartDetails();
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 container">
      {wishlistDetails?.map((wish: WishlistItem) => (
        <Card key={wish._id}>
          <CardHeader className="relative">
            <Badge
              onClick={() => removeProductFromWishlistCard(wish._id)}
              className="absolute top-[-10px] right-[10] text-red-500 cursor-pointer rounded-full hover:bg-red-500 hover:text-white transition ease-in-out "
            >
              X
            </Badge>
            <p className="text-center text-xl font-semibold">{wish.title}</p>
          </CardHeader>
          <CardContent>
            <div className="relative h-[250px] w-full">
              <Image
                src={wish.imageCover}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                alt={wish.title}
                priority
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="font-bold">
              {wish.price} <span className="font-normal">EGP</span>
            </p>
            <Button   onClick={() => handleAddToCart(wish._id)} className="cursor-pointer">Add to cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
