import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const SpecialDiscounts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://quick-bazaar-com-server.vercel.app/products/discount')
            .then((res) => setProducts(res.data));
    }, []);
    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <div className="md:mb-16 mb-8">
                <img className="md:block hidden w-full md:object-cover md:object-top" src="https://i.ibb.co/yB8QP9T/Fashion-sale-web-banner-design-2.jpg" alt="" />
                <img className="md:hidden h-[200px] w-full" src="https://i.ibb.co/xFtGpSQ/Fashion-sale-web-banner-design-3.jpg" alt="" />
            </div>
            <Swiper
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    426: {
                        slidesPerView: 2.5,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4.5,
                    },
                }}
            >
                {products?.map(product => (
                    <SwiperSlide key={product._id}>
                        <Link to={`/products/${product?.category_name}/${product?._id}`}>
                            <div className="border p-2 bg-[#20293e] hover:border-[#fdc816] hover:border w-full md:h-[400px] h-[350px] shadow-xl rounded">
                                <figure className="relative"><img className="w-full md:h-[200px] h-[150px] rounded object-cover" src={product?.images[0]} alt="Shoes" />
                                    <span className="absolute top-1 left-1 bg-[#ffb50c] px-2 rounded font-bold border border-white shadow">{product?.discount}%</span>
                                </figure>
                                <div className="p-3 border-t pt-3">
                                    {
                                        product?.product_name && <h2 className="font-semibold">{product?.product_name.slice(0, 25)}..</h2>
                                    }
                                    <p className="mt-2 text-[#ff9902]">Category: <span className="uppercase">{product?.category_name}</span></p>
                                    <p >Type : {product?.type}</p>
                                    <div className="flex items-center gap-4">
                                        <del className="text-blue-600 font-semibold">Price: ${product?.price}</del>
                                        <p className="text-blue-600 font-semibold">Price: ${((product?.price) - (parseFloat(product?.price) * ((parseFloat(product?.discount)) / 100))).toFixed(2)}</p>
                                    </div>
                                    <p>Rating : {product?.rating}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SpecialDiscounts;