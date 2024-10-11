// Import Swiper React component
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Offers.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import required modules
import { Navigation } from "swiper/modules";


function Offers() {
    return (
        <div>
            <Swiper
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                loop={true}
                modules={[Navigation]}
                 
            >
                <SwiperSlide>FREE SHIPPING OVER $75 USD & EASY RETURNS</SwiperSlide>
                <SwiperSlide>UP TO 40% OFF | DEALS ON SMARTPHONES</SwiperSlide>
                <SwiperSlide>
                    Starting ₹299 | Bestselling Styles From Top Brands
                </SwiperSlide>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
        </div>
    )
}

export default Offers
