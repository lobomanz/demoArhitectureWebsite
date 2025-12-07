import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        margin-inline: 10px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`;

export const ResponsiveImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

// Overlay fades in on hover
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: opacity 0.3s ease;

    &.visible {
        opacity: 0.5;
    }
`;

// Center text that fades in
export const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.visible {
        opacity: 1;
    }

    h2 {
        margin: 0;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    color: black;
    text-transform: uppercase;
    margin-top: 10px;

    @media (min-width: 1024px) {
        display: none; /* same as your Vue desktop behavior */
    }
`;
