import styled from 'styled-components'

export const StyledFooter = styled.footer`
    display:flex;
    justify-content: space-evenly;
    width: 100vw;
    background-color: white;
    color: rgb(15 146 70); 

    li{
        transition: 0.3s ease;
        cursor: pointer;
    }
    section{
        display: flex;
        flex-direction: column;
        background-color: rgb(255 194 20);
        color: rgb(15 146 70);
        text-align: center;
        justify-content: center;
    }

    @media screen and (max-device-width: 420px){
        flex-direction: column;
        img{
            width: 50px;
        }
        ul{
            li:active{
                text-decoration: underline;
                background-color: rgb(15 146 70);
                color: white;
            }
        }
    }
    @media screen and (min-device-width: 421px){
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 50px 1fr 1fr;
        font-size: 0.9em;

        img{
            grid-column: 1/7;
        }

        ul{
            list-style: none;
            border-right: 1px solid rgb(15 146 70);
            li{
                padding: 8px;
                :hover{
                    text-decoration: underline;
                    background-color: rgb(15 146 70);
                    color: white;
                }
            }
        }

        section{
            grid-column: 1/7;
        }
    }
`

export const Logo = styled.img`
    height: 50px;
    padding: 8px;
`