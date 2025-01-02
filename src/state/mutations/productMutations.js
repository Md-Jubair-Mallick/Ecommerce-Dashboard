import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct, updateProduct, deleteProduct } from '../../api/productApi';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (product) => {
      createProduct(product)
      // console.log(product)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('products');
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useDeleteProduct = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      console.log("Products deleted");
    },
    onError: (error) => {
      console.error(error);
    }
  });
};

export const useUpdateProduct = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product) => updateProduct(id, product),
    onSuccess: (data) => {
      queryClient.invalidateQueries('products');
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
};