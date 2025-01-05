import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        background-color:#161A1E;
        padding-inline:7%;
        padding-block: 32px;
        font-family: "Inter", serif;

        @media screen and (width>375px){
            padding-inline:180px;
        }
    }
`;
