"use client";
import { ProductDetails } from "@/app/types/productDetails.model";
import React from "react";
import { StarRating } from "react-flexible-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { addProductToCart } from "@/app/actions/cart.action";
import { useCart } from "@/app/context/CartContext";

export default function ProductsDetailsComp({
  productsDetails,
}: {
  productsDetails: ProductDetails;
}) {
  // console.log(productsDetails);
   const {getCartDetails} = useCart()
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
     await getCartDetails()
    }
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="w-full md:w-1/2">
        <Swiper
          slidesPerView={1}
          spaceBetween={3}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {productsDetails.images.map((src, index) => (
            <>
              <SwiperSlide key={index}>
                <div className="relative h-[600px] w-full">
                  <Image
                    src={src}
                    fill
                    sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw"
                    alt="slider image"
                    priority
                    loading="eager"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      <div className="w-full md:w-1/2 ">
        <h2 className="text-3xl font-bold tracking-tighter my-7">
          {productsDetails.title}
        </h2>
        <p className="text-slate-500 my-7 text-2xl tracking-tighter">
          {productsDetails.description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p>{productsDetails.category.name}</p>
            <p>{productsDetails.price} EGP</p>
          </div>
          <div className="flex gap-2">
            <StarRating
              initialRating={Math.floor(productsDetails.ratingsAverage)}
              dimension={5}
              isHoverEnabled={false}
            ></StarRating>
            <span>{productsDetails.ratingsAverage}</span>
          </div>
        </div>
        <Button onClick={()=> handleAddToCart(productsDetails._id)} className=" cursor-pointer w-full bg-amber-600 py-3 rounded-full my-7 hover:bg-amber-500">
          + Add To Cart
        </Button>
      </div>
    </div>
  );
}
