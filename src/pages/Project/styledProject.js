import styled from "styled-components";

export const StyledProject = styled.div`
    margin: 0 auto;
    padding: 40px;
    background: #f5f4f0;

    .header {
        background: #f5f4f0;

        .logo {
            color: #1e1e1e;

        }

        .navigation {
            a {
                color: #1e1e1e;
                font-family: "Inter", sans-serif;
                font-size: 18px;
                text-decoration: none;
                padding: 0 8px;
            }

            a:hover {
                color: black;
                transition: all 0.1s ease;
            }
        }
    }

    .project-title {
        margin-left: 0;
        margin-bottom: 20px;
        font-size: 36px;
        text-align: left;

        @media (max-width: 768px) {
            font-size: 28px;
        }
    }

    .project-text {
        margin-top: 20px;
        max-width: 1500px;

        h2 {
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
        }
    }

    @media (max-width: 768px) {
        padding: 20px;

        .project-text {

            h2 {
                font-size: 26px;
            }

            p {
                font-size: 16px;
            }
        }
    }
`;

