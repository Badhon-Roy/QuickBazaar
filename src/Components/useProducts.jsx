import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://quick-bazaar-com-server.vercel.app/products?category_name=${category}`);
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching products:', error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return [ products, isLoading, error ];
};

export default useProducts;
