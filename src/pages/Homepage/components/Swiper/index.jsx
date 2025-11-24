import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {StyledSwiper} from "./styledHomepageSwiper.js";
import pic1 from "../../../../assets/Homepage/image1.png";
import pic2 from "../../../../assets/Homepage/image2.png";
import pic3 from "../../../../assets/Homepage/image1.png";
import { Mousewheel, Pagination } from 'swiper/modules';

export default function HomepageSwiper() {

    const images = [pic1, pic2, pic3];

    return (
        <>
            <StyledSwiper>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            </StyledSwiper>
        </>
    );
}