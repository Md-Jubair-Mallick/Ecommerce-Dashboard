import { useQuery } from "@tanstack/react-query"
import fetchOrderDetails from "../api/OrderDetails"

const useOrderDetails = (id) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['order', id],
        queryFn: () => fetchOrderDetails(id)
    })
  return {data}
}
export default useOrderDetails