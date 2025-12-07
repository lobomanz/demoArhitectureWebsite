import styled from "styled-components";

export const StyledFooter = styled.footer`
    bottom: 0;
    color: black;
    background: #181818;
    border-top: 3px solid #e1e1e2;
    padding: 40px 40px 20px 40px;

    .footer-container {
        display: flex;
        flex-direction: column;
        gap: 40px;

        .contact {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            .title {
                font-size: 18px;
                text-align: left;
                color: #e1e1e2;
                margin-bottom: 10px;
            }

            .email {
                font-size: 16px;
                color: #e1e1e2;
                margin-bottom: 20px;

                a {
                    font-size: 16px;
                    text-decoration: none;
                    color: #e1e1e2;
                }

                a:hover {
                    text-decoration: underline;
                    color: #e1e1e2;
                    transition: ease-in 0.3s;
                }
            }

            .socials {
                display: flex;
                gap: 20px;

                a {
                    color: #e1e1e2;

                    svg {
                        width: 25px;
                        height: 25px;
                    }
                }

                a:hover {
                    transition: ease-in 0.2s;
                    color: #fff;
                }

            }
        }

        .copyright {
            text-align: center;
            font-size: 10px;
            color: #e1e1e2;
        }
    }
`;

