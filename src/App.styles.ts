import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/natalia-y.jpg'

export const GlobalStyle = createGlobalStyle `
    html {
        height: 100vh;
    }

    body {
        height: 100vh;
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #000;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Otomanopee One', sans-serif;
        background-size: 100%;
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        background: black;
        color: white;
        border: none;
    }

    .start {
        max-width: 200px;
    }

`