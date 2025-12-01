import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 40px;

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
        margin-top: 40px;
        max-width: 1000px;
        margin-inline: auto;

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

