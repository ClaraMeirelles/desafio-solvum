import styled from "styled-components";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    height:fit-content;
    width: 100%;
    background-color: white;
    padding: 6px;
    color: rgb(15 146 70);
    img{
        margin-left: 16px;
        cursor: pointer;
    }
  
    @media screen and (max-device-width: 420px){  
        height: 13vh;      
        img{
            height: 5vh;
        }
        li{
            font-size: 0.9rem;
            font-weight: bold;
            z-index: 1;
        }
    }
`

export const MenuItem = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    list-style:none;
    position: relative;
    display: flex;
    background-color: white;

    li{
        cursor: pointer;
        padding: 8px;
        border-right: 1px solid rgb(15 146 70);
        display: block;
        :hover{
            text-decoration: underline;
            background-color: rgb(15 146 70);
            color: white;
            }
        }
        ul{
            position:absolute;
            display: none;
            background-color: white;
            color:rgb(15 146 70);
            padding:6px;
            margin:0;
            border-radius: 10px;
        }
        li:hover ul{
            display: block;
        }
        li ul li{
            border:none;
            border-bottom: 1px solid rgb(15 146 70);
        }
    }

    @media screen and (max-device-width: 420px){
        padding: 0;
        padding-right: 40px;

        ul{
            position:absolute;
            background-color: white;
            color:rgb(15 146 70);
            margin:0;
        }
        li{
            padding: 3px;
            margin: 0;
        }
        li:active ul{
            display: block;
        }
        li ul li{
            border:none;
            border-bottom: 1px solid rgb(15 146 70);
            margin-left: -10px;
            background-color: white;
        }
    }

    @media screen and (min-device-width: 421px){
        background-color: white;
        width: fit-content;
        padding: 6px;        
    }
`
