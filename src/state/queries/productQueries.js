import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../../api/productApi.js";

export function useProducts({page, sortBy, sortOrder}) {
  const { data, loading, error } = useQuery({
    queryKey: ["products", page, sortBy, sortOrder],
    queryFn: ()=>getProducts({page, sortBy, sortOrder}),
  });
  return { data: data?.data, loading, error };
}

export function useProductById(id) {
    const { data, loading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: ()=> getProductById(id),
  });
  
  return { products: data?.data, loading, error };
}
