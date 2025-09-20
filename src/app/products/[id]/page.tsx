import { getProductsDetails } from "@/app/actions/products.action";
import ProductsDetailsComp from "@/components/products components/ProductsDetailsComp";
import React from "react";

export default async function ProductsDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { data: productsDetails } = await getProductsDetails(id);
 

  return <div className="mx-auto container ">
<ProductsDetailsComp productsDetails={productsDetails} ></ProductsDetailsComp>
  </div>;
}
