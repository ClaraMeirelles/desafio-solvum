import styled from "styled-components";

export const StyledHeader = styled.header`
    height:fit-content;
    width: 99vw;
    background-color: white;
    padding: 6px;
    color: rgb(15 146 70);

@media screen and (max-device-width: 420px){
    display: flex;
    margin: 0;
    padding:16px;
    min-height: 10vh;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s;
    ul nav{
        display:block;
        font-size: 30px;
    }
}
@media screen and (min-device-width: 421px){
    display: grid;
    grid-template-rows: 1fr 1fr;
    ul{
        width: 0;
    }
    nav{
        display:none;
    }
}
`

export const MenuItem = styled.ul`
    list-style:none;
    position: relative;
    display: flex;
    li{
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
    display: flex;
    flex-direction:column;
    position:relative;
    height: fit-content;
    :active li{
            display:block;
            margin-left: -100px;
            position: absolute;
            height: 16px;
        }
    
        li{
            display: none;
        :active{
            li{
            display: block;
            position: absolute;
            text-decoration: underline;
            background-color: rgb(15 146 70);
            color: white;
            
            }
        }
}
    @media screen and (min-device-width: 421px){
        padding:0;
    }
    
`
