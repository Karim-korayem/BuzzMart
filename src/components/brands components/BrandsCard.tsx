import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Categories } from "@/app/types/category.model";
import { getBrands } from "@/app/actions/brands.action";

export default async function BrandsCard() {
  const response = await getBrands();
  const categories = response?.data;
  console.log(response?.data);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 container">
      {categories.map((cat: Categories) => (
        <Card key={cat._id}>
          <div className="relative h-[250px] w-full">
            <Image
              src={cat.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              alt={cat.name}
              priority
            />
          </div>
          <CardContent>
            <p className="text-center text-xl font-semibold">{cat.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
