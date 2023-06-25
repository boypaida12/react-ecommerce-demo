/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

function MobileScreenSlide() {
  return (
    <>
      <div className="d-lg-none">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 15,
            shadowScale: 0.85,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={ImageProductOne} className=" rounded-start-5" alt="/"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageProductTwo} alt="/"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageProductThree} alt="/"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageProductFour} className=" rounded-end-5" alt="/"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default MobileScreenSlide;
