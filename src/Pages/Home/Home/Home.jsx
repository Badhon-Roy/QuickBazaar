import { Link } from "react-router-dom";
import Step from "../../../Components/Step";
import useProducts from "../../../Components/useProducts";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import { useState } from "react";
import Footer from "../../../Components/Footer";
import Lottie from "react-lottie";
import animationData from '../../../../public/Loading Animation/Animation - 1724431087326.json';
import SpecialDiscounts from "../../../Components/SpecialDiscounts";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
    const [products,isLoading] = useProducts({ category: 'Kids Zone' });
    const [seeMoreKidProducts, setSeeMoreKidProducts] = useState(false)

    const handleShowKidsProducts = (isShow) => {
        setSeeMoreKidProducts(isShow)
    }


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    if (isLoading) {
        return <Lottie
            options={defaultOptions}
            height={300}
            width={300}
        />
    }

    return (
        <div>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <SpecialDiscounts></SpecialDiscounts>
            <Step></Step>
            <Gadgets></Gadgets>
            <div className="max-w-[1400px] mx-auto my-16 p-4 md:flex justify-between gap-10">
                <Link to='/coffees' className="md:w-3/5">
                    <div className="md:h-[300px] md:mt-0 mt-8 object-cover flex flex-col justify-center px-10 text-white rounded-lg p-4"  style={{
                        backgroundImage: "url('https://prestashop.coderplace.com/PRS03/PRS03061/demo/modules/cp_cmsbanner3/views/img/cms-banner2.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <p className="text-xl">50% Off</p>
                        <h2 className="md:text-3xl text-2xl font-bold my-3"> Organic <br /> Cherry Juice
                        </h2>
                       <a href="" className="underline">shop now</a>
                    </div>
                </Link>
            </div>
            <div className="my-16 px-5">
                <div className="max-w-[1400px] mx-auto md:flex justify-between items-center gap-10 md:relative">
                    <div className="flex-1 flex justify-center">
                        <img className="md:absolute bottom-0 md:left-2 lg:h-[570px] md:h-[500px] " src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo2.b3b05f98.png&w=1080&q=75" alt="" />
                    </div>
                    <div className="flex-1 lg:py-32 md:py-[92px] py-16 relative md:text-left text-center">
                        <div className="flex md:justify-start justify-center">
                            <img className="w-[100px]" src="https://i.ibb.co/b6828Lq/Colorful-Illustrative-Online-Shop-Logo-5.png" alt="" />
                        </div>
                        <p className="w-[20px] h-[20px] bg-[#ffb70d] rounded-full absolute top-20 right-20"></p>
                        <p className="w-[20px] h-[20px] bg-[#ffb70d] rounded-full absolute bottom-20 left-40"></p>
                        <div>
                            <h2 className="relative lg:text-6xl md:text-5xl text-3xl font-semibold my-6 text-[#ffb70d]">Special offer <br /> in kids <br /> products</h2>
                            <img className="absolute md:-bottom-20 -bottom-28 md:right-5 right-0 w-2/3" src="https://www.advologysolution.com/images/Union-3.gif" alt="" />
                        </div>
                        <p className="text-[#ffb70d] md:w-1/2">Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                       
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto lg:px-0 px-4 my-32">
                <h2 className="mt-4 mb-8 md:text-3xl text-xl font-medium text-center">Kids' Corner: Discover Our Special Products!</h2>
                {
                    seeMoreKidProducts === true ? <div className=" grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
                        {
                            products?.map(product => <div key={product?._id}>
                                <Link to={`/products/${product?.category_name}/${product?._id}`}>
                                    <div className="border p-2 bg-[#20293e] hover:border-[#fdc816] hover:border w-full md:h-[400px] h-[350px] shadow-xl rounded ">
                                        <figure className="relative"><img className="w-full md:h-[200px] h-[150px] object-cover rounded" src={product?.images[0]} alt="Shoes" />
                                            {
                                                product?.discount > 0 && <span className={`absolute top-1 left-1 px-2 rounded font-bold border border-white shadow text-white ${product?.discount > 20 ? 'bg-[#ff9902]' : 'bg-red-500'
                                                    }`}>
                                                    {product?.discount}%
                                                </span>
                                            }
                                        </figure>
                                        <div className="border-t pt-3">
                                            {
                                                product?.product_name && <h2 className="md:font-semibold">{product?.product_name.slice(0, 30)}..</h2>
                                            }
                                            <p className="mt-2">Type : {product?.type}</p>
                                            <p className="text-blue-600 font-semibold">Price: ${product?.price}</p>
                                            <p>Rating : {product?.rating}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                        }
                    </div> : <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
                        {
                            products?.slice(0, 12).map(product => <div key={product?._id}>
                                <Link to={`/products/${product?.category_name}/${product?._id}`}>
                                    <div className="border p-2 bg-[#20293e] hover:border-[#fdc816] hover:border w-full md:h-[400px] h-[350px] shadow-xl rounded">
                                        <figure className="relative"><img className="w-full md:h-[200px] h-[150px] object-cover rounded" src={product?.images[0]} alt="Shoes" />
                                            {
                                                product?.discount > 0 && <span className={`absolute top-1 left-1 px-2 rounded font-bold border border-white shadow text-white ${product?.discount > 20 ? 'bg-[#ff9902]' : 'bg-red-500'
                                                    }`}>
                                                    {product?.discount}%
                                                </span>
                                            }
                                        </figure>
                                        <div className="border-t pt-3">
                                            {
                                                product?.product_name && <h2 className="md:font-semibold">{product?.product_name.slice(0, 30)}..</h2>
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
                    <button onClick={() => handleShowKidsProducts(!seeMoreKidProducts)} className="BTN">
                       <span> {
                            seeMoreKidProducts === true ? 'see less' : 'see more'
                        }</span>
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;