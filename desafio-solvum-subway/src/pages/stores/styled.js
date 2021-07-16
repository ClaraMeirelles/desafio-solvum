import styled from "styled-components";

export const MapPage = styled.main`
display: flex;
justify-content: center;
padding: 16px;
@media screen and (max-device-width: 420px){
    padding: 16px 0;
    iframe{
        width: 100vw;
    }
}
`