import axios from "axios";
import { useEffect, useState } from "react";


const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://quick-bazaar-com-server.vercel.app/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);
    return [products];
};

export default useAllProducts;