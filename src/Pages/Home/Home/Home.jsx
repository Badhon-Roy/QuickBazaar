import { Link } from "react-router-dom";
import Step from "../../../Components/Step";
import useProducts from "../../../Components/useProducts";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import { useState } from "react";
import Fashion from "../../../Components/Fashion";

const Home = () => {
    const [products] = useProducts({ category: 'Kids Zone' });
    const [seeMore, setSeeMore] = useState(false)

    const handleClick = (isShow) => {
        setSeeMore(isShow)
    }
    console.log(seeMore);

    return (
        <div>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <Fashion></Fashion>
            <Step></Step>
            <div className="bg-[#fefce8] my-16 px-5">
                <div className="max-w-[1400px] mx-auto md:flex justify-between items-center gap-10 md:relative">
                    <div className="flex-1 flex justify-center">
                        <img className="md:absolute -top-20 md:left-2 lg:h-[570px] md:h-[500px] " src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo2.b3b05f98.png&w=1080&q=75" alt="" />
                    </div>
                    <div className="flex-1 lg:py-32 md:py-[92px] py-16 relative md:text-left text-center">
                        <div className="flex md:justify-start justify-center">
                            <img className="w-[100px]" src="https://i.ibb.co/b6828Lq/Colorful-Illustrative-Online-Shop-Logo-5.png" alt="" />
                        </div>
                        <p className="w-[20px] h-[20px] bg-[#8fd966] rounded-full absolute top-20 right-20"></p>
                        <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold my-6">Special offer <br /> in kids products</h2>
                        <p>Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto">
                {
                    seeMore === true ? <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 px-4">
                    {
                        products?.map(product => <div key={product?._id}>
                            <Link to={`/products/${product?.category_name}/${product?._id}`}>
                                <div className=" hover:border-blue-400 hover:border w-full md:h-[400px] h-[350px] bg-base-100 shadow-xl rounded">
                                    <figure><img className="w-full md:h-[200px] h-[150px] object-cover" src={product?.images[0]} alt="Shoes" /></figure>
                                    <div className="p-3 border-t pt-3">
                                        {
                                            product?.product_name && <h2 className="font-semibold">{product?.product_name.slice(0, 30)}..</h2>
                                        }
                                        <p className="mt-2">Type : {product?.type}</p>
                                        <p className="text-blue-600 font-semibold">Price: ${product?.price}</p>
                                        <p>Rating : {product?.rating}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div> : <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 px-4">
                    {
                        products?.slice(0,12).map(product => <div key={product?._id}>
                            <Link to={`/products/${product?.category_name}/${product?._id}`}>
                                <div className=" hover:border-blue-400 hover:border w-full md:h-[400px] h-[350px] bg-base-100 shadow-xl rounded">
                                    <figure className="relative"><img className="w-full md:h-[200px] h-[150px] object-cover" src={product?.images[0]} alt="Shoes" />
                                    {
                                        product?.discount > 0 && <span className={`absolute top-1 left-1 px-2 rounded font-bold border border-white shadow ${
                                            product?.discount < 10 ? 'bg-blue-500' : 
                                            (product?.discount > 10 && product?.discount <= 20 ? 'bg-green-500' : 'bg-red-500')
                                        }`}>
                                            {product?.discount}%
                                        </span>
                                    }
                                    </figure>
                                    <div className="p-3 border-t pt-3">
                                        {
                                            product?.product_name && <h2 className="font-semibold">{product?.product_name.slice(0, 30)}..</h2>
                                        }
                                        <p className="mt-2">Type : {product?.type}</p>
                                        <p className="text-blue-600 font-semibold">Price: ${product?.price}</p>
                                        <p>Rating : {product?.rating}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
                }
                <div className="flex justify-center my-5">
                    <button onClick={() => handleClick(!seeMore)} className="btn btn-secondary">
                        {
                            seeMore === true ? 'see less' : 'see more'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;