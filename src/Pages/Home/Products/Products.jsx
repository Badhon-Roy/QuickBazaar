import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortByRating, setSortByRating] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState(new Set());

    useEffect(() => {
        axios.get(`http://localhost:5000/products?category_name=${category}`).then((res) => setProducts(res.data));
    }, [category]);

    const handlePriceLowToHigh = () => {
        setSortOrder("asc");
        setSortByRating(false);
    };

    const handlePriceHighToLow = () => {
        setSortOrder("desc");
        setSortByRating(false);
    };

    const handleBestRating = () => {
        setSortByRating(!sortByRating);
        setSortOrder(null);
    };

    const handleColorFilter = (color) => {
        setSelectedColor(selectedColor === color ? null : color);
    };

    const handleTypeFilter = (type) => {
        setSelectedTypes((prevTypes) => {
            const newTypes = new Set(prevTypes);
            if (newTypes.has(type)) {
                newTypes.delete(type);
            } else {
                newTypes.add(type);
            }
            return newTypes;
        });
    };

    const filteredProducts = products.filter((product) => {
        return (
            (!selectedColor || product.product_color === selectedColor) &&
            (!selectedTypes.size || selectedTypes.has(product.type))
        );
    });

    let sortedAndFilteredProducts = filteredProducts;

    if (sortByRating) {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "desc") {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => b.price - a.price);
    } else if (sortOrder === "asc") {
        sortedAndFilteredProducts = sortedAndFilteredProducts.slice().sort((a, b) => a.price - b.price);
    }

    return (
        <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="md:text-4xl text-3xl font-medium mt-24 mb-6 uppercase">{category} Collections</h2>
            <p className="md:w-2/4">We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            <div className="divider"></div>
            <div className="md:flex gap-8 my-16">
                <div className="md:w-1/4 border-r-2">

                    <h2 className="text-2xl font-medium">Category</h2>
                    {Array.from(new Set(products.map((product) => product.type))).map((type) => (
                        <div key={type} className="form-control flex items-start">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    onChange={() => handleTypeFilter(type)}
                                    checked={selectedTypes.has(type)}
                                />
                                <span className="label-text ml-5">{type}</span>
                            </label>
                        </div>
                    ))}



                    <h2 className="text-2xl font-medium mt-8">Sort Order</h2>
                    <div className="form-control flex items-start">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" onChange={handlePriceLowToHigh} />
                            <span className="label-text ml-5">Price Low - High</span>
                        </label>
                    </div>
                    <div className="form-control flex items-start">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" onChange={handlePriceHighToLow} />
                            <span className="label-text ml-5">Price High - Low</span>
                        </label>
                    </div>
                    <div className="form-control flex items-start">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" onChange={handleBestRating} />
                            <span className="label-text ml-5">Best Rating</span>
                        </label>
                    </div>




                    <h2 className="text-2xl font-medium mt-8">Color</h2>

                    {Array.from(new Set(products.map((product) => product.product_color))).map((product_color) => (
                        <div key={product_color} className="form-control flex items-start">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={selectedColor === product_color}
                                    onChange={() => handleColorFilter(`${product_color}`)}
                                />
                                <span className="label-text ml-5">{product_color}</span>
                            </label>
                        </div>
                    ))}
                </div>


                <div className="divider md:hidden"></div>
                <div className="md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {sortedAndFilteredProducts.map((product) => (
                        <Product key={product?._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;