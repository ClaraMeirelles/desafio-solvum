import styled from "styled-components";

export const HomePage = styled.main`
min-height: 100vh;
height: fit-content;
justify-items: center;

@media screen and (min-device-width: 320px) and (max-device-width: 420px){
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
}
@media screen and (min-device-width: 421px){
    display: grid;
    grid-template-rows: 20vh 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    Header{
        grid-column: 1/3;
    }
}
`

export const PageBanner = styled.section`
    background-color: white;
    border: 6px solid rgb(255 194 20);


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
    @media screen and (min-device-width: 320px) and (max-device-width: 420px){
        width: 80%;
        height: 30vh;
    }
`