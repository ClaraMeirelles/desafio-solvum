import styled from "styled-components";
import bannerPromo from '../../img/Banner_Promo.jpg'

export const HomePage = styled.main`
    margin-top: 32px;
    justify-items: center;
    align-items: center;
    section{
        background-color: rgb(255 194 20);
        color: rgb(15 146 70);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    @media screen and (max-device-width: 420px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
    }
    @media screen and (min-device-width: 421px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
`

export const PageBanner = styled.section`
    background-color: white;
    border: 6px solid rgb(255 194 20);
    position: relative;
    img{
        height: 100%;
        object-fit: cover;
    }
    @media screen and (min-device-width: 421px){
        width: 85vw;
        grid-column: 1/3; 
    }
    @media screen and (max-device-width: 420px){
        height: 30vh;
        img{
            height: 100%;
            overflow: hidden;
        }
    }
`

export const PageSection = styled.section`
    background-color: white;
    border: 6px solid rgb(255 194 20);
    img{
        height:100%;
        width:100%;
    }
    @media screen and (max-device-width: 420px){
        height: fit-content;
    }
    @media screen and (min-device-width: 421px){
        min-height: 50vh;
        width: 35vw;
        height: fit-content;
    }
`
export const Promos = styled.div`
    background-image: url(${bannerPromo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    h2{
        margin: 24px;
    }
    @media screen and (min-device-width: 421px){
        min-height: 40vh;
        width: 35vw;

    }
    @media screen and (max-device-width: 420px){
        height: 40vh;
        width: 98vw;
    }
`

export const MenuItem = styled.li`

`
export const BannerIcons = styled.nav`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;

    img{
        height: 80px;
        max-width: 88px;
        object-fit: contain;
        :hover{
            height: 85px;

        }
    }

    @media screen and (max-device-width: 420px){
        width: 100vw;
            img{
                height: 50px;
                max-width: 56px;
            }
    }
`