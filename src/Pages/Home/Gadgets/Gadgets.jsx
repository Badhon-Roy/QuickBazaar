import fashionImage from "../../../assets/images/Gadgets square social media post template.jpg";
import useProducts from "../../../Components/useProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Gadgets = () => {
    const [products = [], isLoading] = useProducts({ category: 'Gadgets' });
    if (isLoading) {
        return <p>Loading....</p>;
    }

    return (
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between gap-5 md:mt-64 mt-32">
            <div className="w-1/3">
                <img className="h-full rounded" src={fashionImage} alt="Fashion Banner" />
            </div>
            <div className="w-2/3">
                <Swiper
                    slidesPerView={5}
                    grid={{
                        rows: 2,
                        fill: 'row'
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    {products?.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/products/${product?.category_name}/${product?._id}`}>
                                <div className="bg-white p-4 rounded-lg shadow-md text-center h-[250px] hover:border-[#fdc816] hover:border-2">
                                    <img className="w-[200px] h-[100px] object-cover mx-auto mb-2 border" src={product?.images[0]} alt={product?.product_name} />
                                    <h3 className="font-semibold text-black">{product?.product_name.slice(0, 12)}..</h3>
                                    <p className="text-gray-500">{product?.category_name}</p>
                                    <del className="text-red-500 font-bold">${product?.price}</del>
                                    <p className="text-red-500 font-bold">${((product?.price) - (parseFloat(product?.price) * ((parseFloat(product?.discount)) / 100))).toFixed(2)}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Gadgets;
