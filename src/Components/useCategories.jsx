import { useQuery } from '@tanstack/react-query';

const fetchCategories = async () => {
    const response = await fetch('https://quick-bazaar-com-server.vercel.app/category');
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
};

const useCategories = () => {
    const { data: categories, isLoading, error } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories
    });

    return { categories, isLoading, error };
};

export default useCategories;

