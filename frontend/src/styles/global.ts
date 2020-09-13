import { createGlobalStyle } from 'styled-components';

import isohelBackground from '../assets/isohel-logo.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #000000 url(${isohelBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialised;
    }

    button {
        cursor: pointer;
    }
`