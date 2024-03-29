import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = ({category}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://quick-bazaar-com-server.vercel.app/products?category_name=${category}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, [category]);

    return [products];
};

export default useProducts;