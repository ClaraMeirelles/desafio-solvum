import styled from "styled-components";

export const StyledHeader = styled.header`
    height:fit-content;
    width: 99vw;
    background-color: white;
    padding: 6px;
    color: rgb(15 146 70);
    li>ul{
        display:none;
        } 

@media screen and (max-device-width: 420px){
    display: flex;
    ul{
        li{
            display: none;
        }

        :active,:hover{
            li{
            display: block;
            position: absolute;
            text-decoration: underline;
            background-color: rgb(15 146 70);
            color: white;
            
            }
        }
    }
}
@media screen and (min-device-width: 421px){
    display: grid;
    grid-template-rows: 1fr 1fr;

    ul{
        display: flex;
        list-style: none;

        li{
            padding: 8px;
            border-right: 1px solid rgb(15 146 70);

            :hover{
                text-decoration: underline;
                background-color: rgb(15 146 70);
                color: white;
            }
        }
    }
}

`