import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, updateProduct, deleteProduct }    from "../api/ProductMutation";

export const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addProduct,
        onSuccess: (data) => {
            // Invalidate and refetch products query to ensure data is fresh
            queryClient.invalidateQueries('products');
            console.log('Product added successfully:', data);
        },
        onError: (error) => {
            console.error('Error adding product:', error);
        },
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, product }) => updateProduct(id, product),
        onSuccess: (data) => {
            // Invalidate and refetch products query to ensure data is fresh
            queryClient.invalidateQueries('products');
            console.log('Product updated successfully:', data);
        },
        onError: (error) => {
            console.error('Error updating product:', error);
        },
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: (data) => {
            // Invalidate and refetch products query to ensure data is fresh
            queryClient.invalidateQueries('products');
            console.log('Product deleted successfully:', data);
        },
        onError: (error) => {
            console.error('Error deleting product:', error);
        },
    });
};
