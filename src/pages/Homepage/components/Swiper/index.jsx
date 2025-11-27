import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSwiper } from "./styledHomepageSwiper.js";
import { Mousewheel, Pagination } from "swiper/modules";

export default function HomepageSwiper({ images = [] }) {
    // images defaults to [] (fixes map undefined error)

    return (
        <StyledSwiper>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={30}
                mousewheel
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                {images.length === 0 && (
                    <SwiperSlide>
                        <div
                            style={{
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#aaa",
                            }}
                        >
                            No images found for this site.
                        </div>
                    </SwiperSlide>
                )}

                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledSwiper>
    );
}
