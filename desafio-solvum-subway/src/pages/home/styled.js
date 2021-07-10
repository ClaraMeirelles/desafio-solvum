import styled from "styled-components";
import bannerPromo from '../../img/Banner_Promo.jpg'

export const HomePage = styled.main`
    min-height: 100vh;
    height: fit-content;
    justify-items: center;

    section{
        background-color: rgb(255 194 20);
        color: rgb(15 146 70);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 53vh;
        margin-bottom: 5vh;
        h1{
            font-size: 2.3rem;
        }
        :hover{
            text-decoration: underline;
        }
        img{
            width: 100%;
        }
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 420px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
    }
    @media screen and (min-device-width: 421px){
        display: grid;
        grid-template-rows: 30vh 1fr 1fr 1fr 30vh;
        grid-template-columns: 1fr 1fr;
        Header,Footer{
            grid-column: 1/3;
        }
    }
`

export const PageBanner = styled.section`
    background-color: white;
    border: 6px solid rgb(255 194 20);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
        height:100%;
    }


    @media screen and (min-device-width: 421px){
        width: 85vw;
        height: 90%;
        grid-column: 1/3; 
    }

    @media screen and (min-device-width: 320px) and (max-device-width: 420px){
        width: 80%;
        height: 30vh;
    }
`

export const PageSection = styled.section`
    width: 35vw;
    height: 90%;
    background-color: white;
    border: 6px solid rgb(255 194 20);
    img{
        height:100%;
        width:100%;
        overflow: hidden;
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 420px){
        width: 80%;
        height: 30vh;
    }
`
export const Promos = styled.div`
    height:100%;
    width: 100%;
    background-image: url(${bannerPromo});
    background-repeat: no-repeat;
    background-size: cover;
    h2{
        margin: 24px;
    }
`