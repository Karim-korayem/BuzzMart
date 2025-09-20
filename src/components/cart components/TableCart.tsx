"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useCart } from "@/app/context/CartContext";
import { removeProduct, updateProduct } from "@/app/actions/cart.action";
import toast from "react-hot-toast";
import Link from "next/link";
import Loading from "@/app/loading";

export default function TableCart() {
  const { cartDetails, getCartDetails } = useCart();
  console.log(cartDetails);

  async function removeProductFromCart(productId: string) {
    const response = await removeProduct(productId);
    toast.success("Removed Succesfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await getCartDetails();
  }

  async function updateProductFromCart(productId: string, count: number) {
    const response = await updateProduct(productId, count);
    toast.success("Updated Succesfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await getCartDetails();
  }

  return (
    <>
      {!cartDetails ? (
        <Loading></Loading>
      ) : cartDetails?.numOfCartItems === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-4">
          <h2 className="text-3xl font-semibold">Your Cart is empty</h2>
          <Link href="/" className="text-blue-600 text-lg underline">
            Shop now
          </Link>
        </div>
      ) : (
        <div className="w-full mx-auto md:w-3/4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center p-6">Products</TableHead>
                <TableHead className="text-center p-6">Price</TableHead>
                <TableHead className="text-center p-6">Quantity</TableHead>
                <TableHead className="text-center p-6">Sub Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartDetails?.data?.products?.map((product) => (
                <TableRow key={product._id}>
                  <TableCell className="flex items-center justify-center gap-4 p-3 ">
                    <div className="relative">
                      <Badge
                        onClick={() =>
                          removeProductFromCart(product.product._id)
                        }
                        className="z-2 absolute top-[-10px] left-[-10] cursor-pointer rounded-full hover:bg-red-500 transition ease-in-out duration-400 "
                      >
                        X
                      </Badge>
                      <div className="relative w-[60px] h-[60px]">
                        <Image
                          src={product.product.imageCover}
                          alt="image"
                          fill
                          className="object-cover rounded"
                           sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    <div>
                      <p>
                        {product.product.title.split(" ").slice(0, 2).join(" ")}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center p-3">
                    {product.price} EGP
                  </TableCell>
                  <TableCell className="p-3">
                    <div className="text-center flex items-center justify-center p-3 gap-4">
                      <Button
                        onClick={() =>
                          updateProductFromCart(
                            product.product._id,
                            product.count + 1
                          )
                        }
                        className="border-1 border-slate-500 rounded-full px-2 py-1 cursor-pointer"
                      >
                        +
                      </Button>
                      <p>{product.count}</p>
                      <Button
                        onClick={() =>
                          updateProductFromCart(
                            product.product._id,
                            product.count - 1
                          )
                        }
                        className="border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer"
                      >
                        -
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-center p-3">
                    {product.price * product.count} EGP
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="bg-slate-200 dark:bg-slate-800">
                <TableCell className=" font-bold text-center p-6">
                  Total Price
                </TableCell>
                <TableCell className=" font-bold text-center p-6" colSpan={2}>
                  {cartDetails?.data?.totalCartPrice} EGP
                </TableCell>
                <TableCell className="text-center p-6">
                  <Link href="/checkout">
                    <Button className="px-10 py-5 rounded-md cursor-pointer">
                      CheckOut
                    </Button>{" "}
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
