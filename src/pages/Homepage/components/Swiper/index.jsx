import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {StyledSwiper} from "./styledHomepageSwiper.js";
import pic1 from "../../../../assets/Homepage/image1.jpg";
import pic2 from "../../../../assets/Homepage/image2.jpg";
import pic3 from "../../../../assets/Homepage/image3.jpg";
import pic4 from "../../../../assets/Homepage/image4.jpg";
import pic5 from "../../../../assets/Homepage/image5.jpg";
import { Mousewheel, Pagination } from 'swiper/modules';

export default function HomepageSwiper() {

    const images = [pic1, pic2, pic3, pic4, pic5];

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