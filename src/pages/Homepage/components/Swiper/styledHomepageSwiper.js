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
        gap: 14px;
        align-items: center;
    }

    .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.7);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.1s ease
    }
    .swiper-pagination-bullet:hover {
        background: rgba(255,255,255, 0.9);
        width: 10px;
        height: 10px;
    }

    .swiper-pagination-bullet-active {
        background: rgba(255,255,255, 0.9);
        width: 10px;
        height: 10px;
    }
`;
