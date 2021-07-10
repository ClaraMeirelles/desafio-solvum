import logo from '../../img/subway-logo-new.png'
import { StyledHeader } from './styled'
export default function Header() {
    return (
        <StyledHeader>
        <img src={logo} alt='logo Subway' />
        <ul>
            <li>Encontre uma loja</li>
            <li>Menu e Nutrição</li>
            <li>SUBS NBA</li>
            <li>Social</li>
            <li>Sobre nós</li>
            <li>Carreiras</li>
            <li>Franquia</li>
            <li>PEÇA JÁ!</li>
        </ul>
        </StyledHeader>
    )
}