import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: -40px;
    left: 0;
    width: calc(100% - 100px);
    z-index: 1000;
    background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 10%, /* fully transparent until 70% */ /* smooth fade 0 → 0.4 from 70–90% */ rgba(0, 0, 0, 0.3) 40%,
                /* smooth fade 0.4 → 0.5 from 90–100% */ rgba(0, 0, 0, 0.6) 100%
    );
    padding: 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: top 0.6s ease, opacity 0.6s ease;
    opacity: 0;

    &.show {
        top: 0;
        opacity: 1;
    }

    .logo {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: white;
        font-size: 22px;
    }

    .navigation {
        display: flex;
        gap: 30px;

        a {
            font-family: "Inter", sans-serif;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;
            color: white;
            padding: 0 8px;
        }

        a:hover {
            color: #e9e6df;
            transition: all 0.1s ease;
        }
    }
`;

