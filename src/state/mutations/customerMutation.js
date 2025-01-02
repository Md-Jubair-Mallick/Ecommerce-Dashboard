import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomer, deleteCustomer, updateCustomer } from "../../api/customerApi";

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCustomer) => createCustomer(newCustomer),
    onSuccess: (data) => {
      queryClient.invalidateQueries('customers');
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useDeleteCustomer = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteCustomer(id),
    onSuccess: () => {
      queryClient.invalidateQueries('customers');
      console.log("Customer deleted");
    },
    onError: (error) => {
      console.error(error);
    }
  });
};

export const useUpdateCustomer = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (customer) => {
      updateCustomer(id, customer)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('customers');
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
};