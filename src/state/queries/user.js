import { useQuery } from "@tanstack/react-query";
import { me } from "../../api/authApi";

export const useMe = (id) => {
    const { data, error, isLoading } = useQuery({
            queryKey: ["customer", id],
            queryFn: ()=> me(id)

    }
    );
    return { me:data?.data, error, isLoading };
}