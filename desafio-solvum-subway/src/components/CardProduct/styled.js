import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    border: 4px solid rgb(255 194 20);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
    padding: 16px;
    color: rgb(15 146 70);
    text-align:center;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
    :active{
        color: rgb(255 194 20)
    }

    @media screen and (max-device-width: 420px){
        height: 90vw;
        width: 90vw;
        img{
            max-width: 80vw;
        }
    }
    @media screen and (min-device-width: 421px){
        height: 36vh;
        width: 36vh;
    }
`

export const ImgCard = styled.img`
    max-width: 30vh;
`