import { Product } from "@/types/models/product";

const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    images: [item.image],
    price: item.price,
    rating: item.rating
  }));
}

export async function fetchProductById(id: number): Promise<Product | null> {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) return null;

  const item = await res.json();

  return {
    id: item.id,
    title: item.title,
    images: [item.image],
    price: item.price,
    rating: item.rating
  };
}
