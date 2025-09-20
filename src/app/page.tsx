import MainSlider from "@/components/sliders components/MainSlider";
import { getCategories } from "./actions/categories.action";
import CategorySliderComponent from "@/components/sliders components/CategorySliderComponent";
import { getProducts } from "./actions/products.action";
import ProductsGridSystem from "@/components/products components/ProductsGridSystem";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);

  const response = await getCategories();  
  const data = response?.data;
  console.log(data);
  const { data: products } = await getProducts();
  return (
    <>
      <MainSlider />
      <CategorySliderComponent category={data} />
      <ProductsGridSystem products={products}></ProductsGridSystem>
    </>
  );
}
