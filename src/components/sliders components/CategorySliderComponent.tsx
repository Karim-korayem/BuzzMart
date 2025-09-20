"use client";
import { Categories } from "@/app/types/category.model";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function CategorySliderComponent({
  category,
}: {
  category: Categories[];
}) {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={3}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper bg-gray-200 dark:bg-gray-600 "
      >
        {category.map((cat) => (
          <>
            <SwiperSlide className="pb-8" key={cat._id}>
              <div className="relative h-[250px] w-full">
                <Image
                  src={cat.image}
                  fill
                  sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw"
                  alt="slider image"
                  priority
                  loading="eager"
                />
              </div>
              <p className="text-center text-3xl">{cat.name} </p>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
