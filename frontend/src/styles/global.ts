import { createGlobalStyle } from 'styled-components';

import isohelBackground from '../assets/isohel-background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background: #F0F0F0 url(${isohelBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialised;
    }

    button {
        cursor: pointer;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
`