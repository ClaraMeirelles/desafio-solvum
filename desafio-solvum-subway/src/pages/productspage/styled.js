import styled from "styled-components"

export const ProductPageDisplay = styled.main`
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;

    @media screen and (min-device-width: 421px){
        align-items: space-evenly;
        justify-content: space-evenly;
        article{
            max-width: 90vw;
        }
    }
    @media screen and (max-device-width: 420px){
        flex-direction: row;
        align-items: center;
        gap: 1vh;
        width: 100vw;
        max-width: 420px;
        article{
            max-width: 90vw;
        }
    }
`