import { useQuery } from "@tanstack/react-query";
import { getCustomerById, getCustomerList } from "../../api/customerApi";

// console.log(page);

export const useCustomers = ({status, page}) => {
    const { data, error, isLoading } = useQuery({
            queryKey: ["customers", status, page],
            queryFn: ()=> getCustomerList({status, page})

    }
    );
    return { customers:data?.data?.customers, error, isLoading };
};

export const useCustomerById = (id) => {
    const { data, error, isLoading } = useQuery({
            queryKey: ["customer", id],
            queryFn: ()=> getCustomerById(id)

    }
    );
    return { customer:data?.data, error, isLoading };
}