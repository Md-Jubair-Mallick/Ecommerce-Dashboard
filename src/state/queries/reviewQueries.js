import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../api/reviewApi";

export const useGet = (filters) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["reviews", filters],
        queryFn: () => getReviews(filters),
        select: (data) => data.data,
})

return { data, error, isLoading };
}