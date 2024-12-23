import { useQuery } from "@tanstack/react-query";
import fetchProductDetails from "../api/ProductDetails";

const useProductDetails = (id) => {
    return useQuery({
        queryKey: ['productDetails', id],
        queryFn: () => fetchProductDetails(id),
    });
};

export default useProductDetails;

/** To Do:
* - Utilize initial data from cached products until product details are fetched.
*/
