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
            .title {
                font-size: 28px;
                text-align: left;
                color: #e1e1e2;
                margin-bottom: 10px;
            }

            .email {
                a {
                    font-size: 22px;
                    text-decoration: none;
                    color: #e1e1e2;
                }

                a:hover {
                    text-decoration: underline;
                    color: #e1e1e2;
                    transition: ease-in 0.3s;
                }
            }
        }

        .copyright {
            text-align: center;
            font-size: 14px;
            color: #e1e1e2;
        }
    }
`;

