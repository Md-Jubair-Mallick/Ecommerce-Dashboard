import { useMutation, useQueryClient } from "@tanstack/react-query";
import { post, put } from "../../api/orderAPI.js";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newOrder) => post(newOrder),
    onSuccess: (data) => {
      queryClient.invalidateQueries('orders');
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useUpdateOrder = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (status) => {
      put(id, status)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('orders');
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
};