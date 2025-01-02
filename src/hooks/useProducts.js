import { useProductsQuery } from '../state/queries/productQueries';

const useProducts = () => {
  const { data, isLoading, isError } = useProductsQuery();
  return { products: data?.data || [], isLoading, isError };
};

export default useProducts;
