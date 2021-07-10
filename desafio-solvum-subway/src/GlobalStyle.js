import { createGlobalStyle } from "styled-components";

export  const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    background-color: rgb(15 146 70);
    font-family: Roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-items: center;
}

a{
    color: rgb(15 146 70);
    text-decoration: none;
}
`