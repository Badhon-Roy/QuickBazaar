import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CategorySlider = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/category');
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error.message);
        }
    };

    return (
        <div className="max-w-[1400px] mx-auto px-8 md:py-8">
            <h2 className="text-4xl font-bold my-8">Choose Your Category</h2>
            <div className="mx-4">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {categories.map(category => (
                        <SwiperSlide key={category._id}>
                            <Link to={`/products/${category?.category}`}>
                                <div className="shadow-lg rounded-xl my-5 border">
                                    <figure>
                                        <img className="w-full md:h-[250px] h-[250px] object-cover rounded-t-xl" src={category?.image} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title capitalize">{category?.category}</h2>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CategorySlider;
