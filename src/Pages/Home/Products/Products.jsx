import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {category} = useParams()
    const [products , setProducts] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/products?category_name=${category}`)
        .then(res => setProducts(res.data) )
    },[category])
    return (
        <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-4xl font-medium mt-24 mb-6">{category} Collections</h2>
            <h2>{products.length}</h2>
            <p className="w-2/4">We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            <div className="divider"></div> 
            <div className="flex gap-8 my-16">
                <div className="w-1/4">

                </div>
                <div className="w-3/4 grid grid-cols-3 gap-5">
                    {
                        products.map(product => <Product key={product?._id} product={product}></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;