import styled from "styled-components";

/* CONTAINERS */
export const GalleryContainer = styled.div`
    position: relative;
    overflow: hidden;

    @media (max-width: 1080px) {
        width: 100%;
        margin-inline: 0;
        max-height: 350px;
    }
`;

export const GalleryContainerService = styled(GalleryContainer)`
    margin-inline: 200px;
    width: calc(100% - 400px);
    height: calc(100vh - 300px);
`;

/* IMAGE CONTAINER */
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 80vh;
    max-width: 100vw;
    object-fit: contain;
    transition: opacity 0.5s ease;
    user-select: none;
`;

/* CHEVRONS */
export const ChevronButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: relative;
    height: 10px;
    width: 40px;

    &::before, &::after {
        position: absolute;
        content: "";
        border-radius: 10px;
        background-color: white;
        width: 20px;
        height: 5px;
    }

    &.left-one::after {
        transform: rotate(45deg) translateX(8px) translateY(8px);
    }

    &.left-one::before {
        transform: rotate(135deg);
    }

    &.right-one::after {
        transform: rotate(225deg) translateX(8px) translateY(8px);
    }

    &.right-one::before {
        transform: rotate(135deg);
    }
`;

/* LEFT & RIGHT WRAPPERS */
export const LeftWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`;

export const RightWrapper = styled.div`
    position: absolute;
    top: calc(50% + 11px);
    right: 20px;
    transform: translateY(-50%);

    @media (min-width: 1024px) {
        top: calc(50% + 5px);
    }
`;

/* COUNTER */
export const Counter = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
`;
