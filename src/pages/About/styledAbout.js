import styled from "styled-components";
import heroImg from "../../assets/About/aboutimg1.jpg";

export const StyledAbout = styled.div`
    height: 100%;
    width: 100%;
    background-color: #1e1e1e;

    .container::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    .container {
        width: 100%;
        padding-bottom: 40px;
        -ms-overflow-style: none;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
            background: transparent;
        }

        .hero-section {
            position: relative;
            overflow: hidden;
            height: 100vh;


            &::before {
                content: "";
                position: absolute;
                inset: 0;
                background-image: url(${heroImg});
                background-size: cover;
                background-position: center;
                filter: blur(40px);
                z-index: 0;
            }

            .title-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;

                h2 {
                    text-transform: uppercase;
                    color: #e9e6df;
                    text-align: center;
                }
            }
        }

        .about-section {
            overflow: hidden;
            background-color: #1e1e1e;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .section-one {
                display: flex;
                width: 100%;
                padding: 0 20px;
                background-color: #1e1e1e;


                .left-container {
                    display: flex;
                    flex-direction: column;
                    width: 60%;
                    padding: 20px 80px 0 0;

                    .section-one-title {
                        color: #e9e6df;
                        font-size: 26px;
                        font-weight: 600;
                    }

                    .section-one-description {
                        color: #e9e6df;
                        font-size: 26px;
                        font-weight: 500;
                        letter-spacing: 1.3px;
                    }
                }

                .right-container {
                    width: 40%;
                    padding: 60px 20px 20px 40px;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 600px;
                    }
                }
            }

            .section-two {
                height: 400px;
                width: 100%;
                background-color: #1e1e1e;
                padding: 0 20px;

                .section-two-container {
                    width: 60%;

                    p {
                        font-size: 20px;
                        color: #e9e6df;
                        letter-spacing: 1.3px;
                        font-weight: 500;

                    }
                }
            }

            .section-three {
                display: flex;
                width: 100%;
                padding: 0 20px;
                background-color: #1e1e1e;

                .left-container {
                    width: 40%;
                    padding: 60px 20px 20px 40px;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 600px;
                    }
                }

                .right-container {
                    display: flex;
                    flex-direction: column;
                    width: 60%;
                    padding: 20px 80px 0 0;

                    .section-three-title {
                        color: #e9e6df;
                        font-size: 26px;
                        font-weight: 500;
                        letter-spacing: 1.3px;
                    }

                    .section-three-description {
                        font-size: 20px;
                        color: #e9e6df;
                        letter-spacing: 1.3px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
`;

