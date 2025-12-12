import styled from "styled-components"


export const StyledProjects = styled.div`
    max-width: 100vw;
    height: 100%;
    padding-top: 60px;
    background: #f5f4f0;


    .header {

        .logo, .glass-link {
            color: #1e1e1e;

        }
        .bar{
            background-color: #1e1e1e;
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
`;