"use server";
import axios from "axios";

async function getBrands() {
  try {
    const response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/brands"
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
export { getBrands };
