import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        min-height: 100vh;
        background-color: white;
    }

    html, body {
        font-family: 'gt-haptik-regular', sans-serif;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }

    button, input, select, textarea {
        &:focus {
            outline: none;
        }
    }

    a, button {
        cursor: pointer;
        text-decoration: none;
    }

    input, button, select, textarea {
        font-family: 'gt-haptik-regular', sans-serif;
        font-size: 16px;
    }

    input[type="color"],
    input[type="date"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="email"],
    input[type="month"],
    input[type="number"],
    input[type="password"],
    input[type="search"],
    input[type="tel"],
    input[type="text"],
    input[type="time"],
    input[type="url"],
    input[type="week"],
    select:focus,
    textarea {
        font-size: 16px;
    }

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }
`;

export default GlobalStyles;
