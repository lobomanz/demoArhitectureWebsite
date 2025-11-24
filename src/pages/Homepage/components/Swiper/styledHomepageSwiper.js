import styled from "styled-components"

export const StyledSwiper = styled.div`
    height: 100vh;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-wrapper {
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #444;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .swiper-pagination {
        display: flex;
        flex-direction: column;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        position: fixed;
        z-index: 10;
        gap: 10px;
    }

    .swiper-pagination-bullet {
        background: #fff;
        opacity: 0.5;
        width: 10px;
        height: 10px;
    }

    .swiper-pagination-bullet-active {
        background: #ff4081;
        opacity: 1;
    }
`;
