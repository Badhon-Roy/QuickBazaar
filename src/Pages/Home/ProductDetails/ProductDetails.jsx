import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])
    const { category_name, images, type, price, rating, product_color, product_name, product_details = ' ', features, fit } = product;
    return (
        <div className="max-w-[1400px] mx-auto md:px-8 px-4 my-16">
            <div className="flex justify-between gap-8">
                <div className="flex-1">
                    {images && images.length > 0 ? (
                        <>
                           <a target="_blank" rel="noopener noreferrer" href={images[0]}>
                                <img className="w-full h-[500px] object-cover rounded-2xl hover:border-blue-600 hover:border" src={images[0]} alt="" />
                            </a>
                            {images.length > 1 && (
                                <div className="flex justify-between gap-8 my-8">
                                    <div className="flex-1">
                                        <a target="_blank" rel="noopener noreferrer" href={images[1]}>
                                            <img className="w-full h-[300px] object-cover rounded-xl hover:border-blue-600 hover:border" src={images[1]} alt="" />
                                        </a>
                                    </div>
                                    <div className="flex-1">
                                        <a target="_blank" rel="noopener noreferrer" href={images[2]}>
                                            {images.length > 2 && <img className="w-full h-[300px] rounded-xl object-cover hover:border-blue-600 hover:border" src={images[2]} alt="" />}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <p>No images available</p>
                    )}
                    <h3 className="text-3xl font-medium mt-16">Product Details</h3>
                    <p className="my-5">{product_details}</p>
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl font-semibold">{product_name}</h2>
                    <p className="capitalize my-4 text-xl">Category : {category_name}</p>
                    <div className="flex items-center gap-16 my-4">
                        <p className="capitalize text-xl">Type : {type}</p>
                        <p className="text-xl" >Color : <span className="font-bold capitalize">{product_color}</span></p>
                    </div>

                    <span className="border-2 px-2 p-1 rounded-lg border-blue-600 text-blue-600 font-semibold">Price: {price}</span>
                    <div className="flex items-center gap-1 my-4">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="mt-1 text-xl">{rating}</p>
                    </div>
                    <button className="btn btn-block btn-primary my-4">Add to cart</button>

                    <div className="collapse collapse-plus bg-base-200 cursor-pointer">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Description
                        </div>
                        <div className="collapse-content">
                            <p>{product_details ? product_details.slice(0, 300) : ''}..</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mt-4">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Product Features
                        </div>
                        <div className="collapse-content">
                            <ul className="space-y-3">
                                {
                                    features?.map(feature => <li key={feature} className="flex items-center gap-2"><GoDotFill className="text-xs"></GoDotFill>{feature}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mt-4">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Fit
                        </div>
                        <div className="collapse-content">
                            <p>{fit}</p>
                        </div>
                    </div>
                    <div className="my-8 grid grid-cols-2 gap-5">
                        <div className="border p-4 rounded-lg">
                            <div className="flex items-center justify-center gap-5">
                                <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/3375/3375305.png" alt="" />
                                <div>
                                    <h3 className="text-xl font-medium mb-1">Free shipping</h3>
                                    <p>On orders over $200.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <div className="flex items-center justify-center gap-5">
                                <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/9183/9183512.png" alt="" />
                                <div>
                                    <h3 className="text-xl font-medium mb-1">Very easy to return</h3>
                                    <p>Just phone number.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <div className="flex items-center justify-center gap-5">
                                <img className="w-[80px]" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/nationwide-5370141-4485349.png" alt="" />
                                <div>
                                    <h3 className="text-xl font-medium mb-3">Nationwide Delivery</h3>
                                    <p>Fast delivery nationwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <div className="flex items-center justify-center gap-5">
                                <img className="w-[100px]" src="https://cdn4.iconfinder.com/data/icons/logistics-and-delivery-vol-2/64/easy-returns-512.png" alt="" />
                                <div>
                                    <h3 className="text-xl font-medium mb-3">Refunds policy</h3>
                                    <p>60 days return for any reason</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;