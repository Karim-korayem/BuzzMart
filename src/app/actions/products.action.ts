"use server";
import axios from "axios";

async function getProducts() {
  try {
    const response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    return {
      data: response?.data?.data,
      status: response.status,
      message: response.data.message,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status,
        message: error.response?.data.message || "error ocured",
      };
    }
  }
}

async function getProductsDetails(id: string) {
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    return {
      data: response?.data?.data,
      status: response.status,
      message: response.data.message,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        status: error.response?.status,
        message: error.response?.data.message || "error ocured",
      };
    }
  }
}
export { getProducts, getProductsDetails };
