import styled from "styled-components";

export const ProjectWrapper = styled.div`
max-width:calc(100vw - 60px);
margin:auto;
    width: 100%;
    padding-bottom: 20px;
    display: grid;
    background: #f5f4f0;
    grid-template-areas:
    "big big small1"
    "big big small2" 
    "small3 small4 small4";
    grid-template-columns: 2fr 1fr 1fr;
    gap: 12px;

    .card {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }

    .card:nth-child(1) {
        grid-area: big;
    }

    .card:nth-child(2) {
        grid-area: small1;
    }

    .card:nth-child(3) {
        grid-area: small2;
    }

    .card:nth-child(4) {
        grid-area: small3;
    }

    .card:nth-child(5) {
        grid-area: small4;
    }

    @media (max-width: 568px) {
        display: flex;
        flex-direction: column;

    }
`;

export const ProjectCardWrapper = styled.div`
    width: 31vw;

    /* Mobile behavior */
    @media (max-width: 768px) {
        max-width: calc(100vw - 90px);
        padding-inline: 15px;
        padding-top: 10px;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* Anchor tag inside card */

    a {
        text-decoration: none;

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

    &:hover {
        cursor: pointer;
    }
`;
