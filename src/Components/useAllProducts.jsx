import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
    const response = await fetch('https://quick-bazaar-com-server.vercel.app/products');
    if (!response.ok) {
        throw new Error('Failed to fetch All products');
    }
    return response.json();
};

const useAllProducts = () => {
    const { data: allProducts, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    return [ allProducts, isLoading, error ];
};

export default useAllProducts;