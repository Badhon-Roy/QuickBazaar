import { useState } from "react";
import useAllProducts from "../Components/useAllProducts";
import AllProduct from "./AllProduct";

const AllProducts = () => {
    const [products] = useAllProducts();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    // Filter products based on search term
    const filteredProducts = products.filter(product => {
        return (
            product?.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product?.product_category?.toLowerCase().includes(searchTerm.toLowerCase()) || 
            product?.type?.toLowerCase().includes(searchTerm.toLowerCase()) || 
            !isNaN(searchTerm) && product?.price && parseInt(product.price) === parseInt(searchTerm)
        );
    });

    return (
        <div>
            <h2 className="md:text-4xl text-2xl font-bold relative text-center mb-8">
                <span className="text-color">All </span> Products {filteredProducts.length}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-b-4 border-[#ffb70d] md:w-36 w-32"></span>
            </h2>
            <div className="flex justify-center">
                <div>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="search product"
                            className="w-[400px] my-3 border-2 border-[#ffb70d] px-4 py-2 rounded"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="hidden">Search</button>
                    </form>
                </div>
            </div>
            {
                filteredProducts?.length > 0 ? (
                    <div className="space-y-6">
                        {
                            filteredProducts.map(product => <AllProduct key={product._id} product={product}></AllProduct>)
                        }
                    </div>
                ) : (
                    <div className="mt-16">
                        <div className="flex justify-center"><img className="md:w-[200px] w-[100px]" src="https://png.pngtree.com/png-vector/20220616/ourmid/pngtree-sad-apologizing-emoticon-holding-a-sign-with-the-text-sorry-png-image_5103588.png" alt="" /></div>
                        <h3 className="text-center mt-2 text-2xl">No products available</h3>
                    </div>
                )
            }
        </div>
    );
};

export default AllProducts;
