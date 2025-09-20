"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Products } from "@/app/types/product.model";
import Image from "next/image";
import { StarRating } from "react-flexible-star-rating";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Link from "next/link";
import { addProductToCart } from "@/app/actions/cart.action";
import toast from "react-hot-toast";
import { useCart } from "@/app/context/CartContext";
import { addProductToWishlist } from "@/app/actions/wishlist.action";
import { useWishlist } from "@/app/context/WishlistContext";

export default function ProductCard({ product }: { product: Products }) {
  const { getCartDetails } = useCart();
 const{getWishlistDetails} = useWishlist()

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

   async function handleAddProductToWishlist(productId: string) {
    const response = await addProductToWishlist(productId);
    console.log(response);
    toast.success(response?.message, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await getWishlistDetails();
  }



  return (
    <div>
      <Card className="relative group overflow-hidden">
        <div className="absolute flex flex-col gap-3 z-1 top-52 right-[-100px] group-hover:right-0 transition-all duration-500 ease-in-out  trans">
          <button
            onClick={() => handleAddToCart(product._id)}
            className="px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer"
          >
            <ShoppingCart />
          </button>
          <button   onClick={() => handleAddProductToWishlist(product._id)} className="px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer">
            <Heart />
          </button>
          <button className="px-2 py-2 bg-slate-200 text-black hover:text-blue-600 cursor-pointer">
            <Link href={`/products/${product._id}`}>
              <ZoomIn />
            </Link>
          </button>
        </div>
        <CardHeader>
          <CardTitle>
            {product.title.split(" ").slice(0, 4).join(" ")}
          </CardTitle>
          <CardDescription>
            {product.description.split(" ").slice(0, 4).join(" ")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px]">
            <Image
              src={product.imageCover}
              alt={product.title}
              fill
              sizes="(max-width:768px) 100vw ,(max-width:1200) 50vw , 25vw"
              priority
            ></Image>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h2 className="text-lg font-bold">
            <span>{product.price}</span>{" "}
            <span className="font-normal">EGP</span>
          </h2>
          <div className="flex gap-2">
            <StarRating
              initialRating={Math.floor(product.ratingsAverage)}
              dimension={5}
              isReadOnly={true}
            ></StarRating>
            <p>{product.ratingsAverage}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
