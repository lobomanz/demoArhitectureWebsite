import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    body::-webkit-scrollbar {
        width: 0px; /* removes the scrollbar */
        background: transparent;
    }

    /* Hide scrollbar for Firefox */
    body {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
    }
`;
