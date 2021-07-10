import logo from '../../img/subway-logo-new.png'
import { StyledHeader } from './styled'
import { goToDelivery, goToHome, goToStores } from '../../routes/coordinator'
import { useHistory } from 'react-router'
export default function Header() {
    const history = useHistory()
    return (
        <StyledHeader>
            <img onClick={() => goToHome(history)} src={logo} alt='logo Subway' />
            <ul>
                <li onClick={() => goToStores(history)}>Encontre uma loja</li>
                <li>Menu e Nutrição</li>
                <li>SUBS NBA</li>
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Franquia</li>
                <li onClick={() => goToDelivery(history)}>PEÇA JÁ!</li>
            </ul>
        </StyledHeader>
    )
}