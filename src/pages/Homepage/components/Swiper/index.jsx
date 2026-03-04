import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {StyledSwiper} from "./styledHomepageSwiper.js";
import {Mousewheel, Pagination, Autoplay} from "swiper/modules";
import { t } from "../../../../utils/i18n.js";

export default function HomepageSwiper({images = []}) {
    // images defaults to [] (fixes map undefined error)

    return (
        <StyledSwiper>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                mousewheel
                pagination={{clickable: true}}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: true
                }}
                speed={800}
                loop={true}
                modules={[Mousewheel, Pagination, Autoplay]}
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
                            {t("homepage.no_images")}
                        </div>
                    </SwiperSlide>
                )}

                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledSwiper>
    );
}
