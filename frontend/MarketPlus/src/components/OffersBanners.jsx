import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OffersBanners.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function OffersBanners() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <img src="/images/offers5.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="/images/offers6.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="/images/offers2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="/images/offers3.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
