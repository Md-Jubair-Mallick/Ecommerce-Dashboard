import { useQuery } from "@tanstack/react-query"
import { fetchOrderDetails, fetchCustomerDetails } from "../api/OrderDetails"
const useOrderDetails = (id) => {
    const { data: order, error, isLoading, isError } = useQuery({
        queryKey: ['order', id],
        queryFn: () => fetchOrderDetails(id)
    })
    const { data: customer, error: customerError, isLoading: customerIsLoading, isError: customerIsError } = useQuery({
      queryKey: ['customer', order?.customer_id],
      queryFn: () => fetchCustomerDetails(order?.customer_id),
      enabled: !! order?.customer_id
    })
  return { order, error, isLoading, isError, customer, customerError, customerIsError, customerIsLoading }
}
export default useOrderDetails