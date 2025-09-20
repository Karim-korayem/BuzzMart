"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function MainSlider() {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <Image
              src="/sliderImgs/slider1.webp"
              fill
              alt="slider image"
              priority
              loading="eager"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="text-xl absolute top-[35px] left-[25px]  md:top-[200px] md:left-[70px]">
            <h2 className="text-cyan-300 font-bold my-3">Summer Collection</h2>
            <p className="text-cyan-300 font-bold my-3">Check latest offers</p>
            <Button className="px-10 text-cyan-400 ">
              Shop Now <MoveRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <Image
              src="/sliderImgs/slider2.jpg"
              fill
              alt="slider image"
              priority
              loading="eager"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="text-xl absolute top-[35px] left-[25px]  md:top-[200px] md:left-[70px]">
            <h2 className="text-fuchsia-600 font-bold my-3">
              Summer Collection
            </h2>
            <p className="text-fuchsia-600 font-bold my-3">
              Check latest offers
            </p>
            <Button className="px-10 text-fuchsia-600">
              Shop Now <MoveRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <Image
              src="/sliderImgs/slider5.jpg"
              fill
              alt="slider image"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="text-xl absolute top-[35px] left-[25px]  md:top-[200px] md:left-[70px]">
            <h2 className="text-yellow-300 font-bold my-3">
              Summer Collection
            </h2>
            <p className="text-yellow-300 font-bold my-3">
              Check latest offers
            </p>
            <Button className="px-10 text-yellow-400">
              Shop Now <MoveRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <Image
              src="/sliderImgs/slider4.jpg"
              fill
              alt="slider image"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="text-xl absolute top-[35px] left-[25px]  md:top-[200px] md:left-[70px]">
            <h2 className=" text-pink-400 font-bold my-3">Summer Collection</h2>
            <p className="text-pink-400 font-bold my-3">Check latest offers</p>
            <Button className="px-10 text-pink-400">
              Shop Now <MoveRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <Image
              src="/sliderImgs/slider3.jpg"
              fill
              alt="slider image"
            
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="text-xl absolute top-[35px] left-[25px]  md:top-[200px] md:left-[70px]">
            <h2 className="text-amber-500 font-bold my-3">Summer Collection</h2>
            <p className="text-amber-500 font-bold my-3">Check latest offers</p>
            <Button className="px-10 text-amber-500">
              Shop Now <MoveRight />
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
