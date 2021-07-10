import styled from 'styled-components'

export const StyledFooter = styled.footer`
    height: fit-content;
    width: 99vw;
    background-color: white;
    padding: 6px;
    color: rgb(15 146 70); 
    ul{
        display: flex;
        flex-direction: column;
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
    ul{
        li:active, li:hover{
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