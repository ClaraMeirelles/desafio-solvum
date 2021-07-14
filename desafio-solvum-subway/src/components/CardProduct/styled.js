import styled from "styled-components";

export const Card = styled.article`
    height: 36vh;
    width: 36vh;
    background-color: white;
    border: 4px solid rgb(255 194 20);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
    padding: 16px;
    color: rgb(15 146 70);
    :hover{
    text-decoration: underline;
}
:active{
    color: rgb(255 194 20)
}
`

export const ImgCard = styled.img`
width: 30vh;

`