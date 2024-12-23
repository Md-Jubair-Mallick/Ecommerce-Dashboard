import fetchProductList from '../api/ProductList'
import { useQuery } from '@tanstack/react-query';

// Custom hook to query a product list with pagination and sorting
const useProductList = (page = 1, sortBy = 'name', sortOrder = 'asc') => {
    const { data, error, isLoading, isFetching, isFetched, isError } = useQuery({
        queryKey: ['products', page, sortBy, sortOrder],
        queryFn: () => fetchProductList(page, sortBy, sortOrder),
        staleTime: 1000 * 60 * 15,
        keepPreviousData: true
    });
    const productData = {
        products: data?.products?.data,
        totalPages: data?.totalPages,
        error,
        isLoading,
        isFetching,
        isFetched,
        isError
    };
    return productData
}

export default useProductList;
    
