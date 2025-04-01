import { Product, ProductsResponse } from "@/types/product";

const API_BASE_URL = "https://dummyjson.com/products";

export async function getProducts(
  limit: number = 10,
  skip: number = 0
): Promise<ProductsResponse> {
  const res = await fetch(`${API_BASE_URL}?limit=${limit}&skip=${skip}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}