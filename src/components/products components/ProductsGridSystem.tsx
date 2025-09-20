import React from "react";
import { Products } from "./../../app/types/product.model";
import ProductCard from "./ProductCard";

export default function ProductsGridSystem({
  products,
}: {
  products: Products[];
}) {
  console.log(products);

  return (
    <div className="mx-auto container">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
