
// import bannerImg from "../../../assets/images/E-commerce Product Banner Design.jpg"
// import bannerImg2 from "../../../assets/images/Facebook Cover Design Psd.jpg"
// import bannerImg3 from "../../../assets/images/New Arrival Fashion Sale Banner for Instagram Post Design.jpg"
import bannerImg4 from "../../../assets/images/Screenshot_9.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Banner = () => {
    return (
        <div className="">


            <>
                <Swiper  spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation ,Pagination, Autoplay]}
            navigation
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide> <img className="md:w-full lg:h-[700px] md:h-[500px]  md:object-cover" src={bannerImg4} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;