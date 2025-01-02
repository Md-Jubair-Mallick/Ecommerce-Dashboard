import { useQuery } from "@tanstack/react-query";
import { getOrder, getById } from '../../api/orderAPI.js';

export function useGetOrder(filters) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['orders', filters],
        queryFn: () => getOrder(filters),
        select: (data) => data.data,
    });
    return { data, error, isLoading };
};

export function useGetOrderById(id) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['order', id],
        queryFn: () => getById(id),
        select: (data) => data.data,
    });
    return { data, error, isLoading };
};