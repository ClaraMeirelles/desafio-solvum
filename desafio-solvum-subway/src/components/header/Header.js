import logo from '../../img/subway-logo-new.png'
import { MenuItem, StyledHeader, HiddenMenu } from './styled'
import { goToDelivery, goToHome, goToProducts, goToStores } from '../../routes/coordinator'
import { useHistory } from 'react-router'
export default function Header() {
    const history = useHistory()
    return (
        <StyledHeader>
            <img onClick={() => goToHome(history)} src={logo} alt='logo Subway' />
            <MenuItem>
                <nav>&#9776;</nav>
                <li onClick={() => goToStores(history)}>Encontre uma loja</li>
                <li>Menu e Nutrição
                <ul>
                    <li><h3>Menu</h3></li>
                    <li onClick={() => goToProducts(history)}>Todos os sanduíches</li>
                    <li>Pop Subs</li>
                    <li>Pizzas</li>
                    <li>Saladas</li>
                    <li>Acomp., Bebidas e Extras</li>
                    <li>Pães e Recheios</li>
                    <li>Como pedir</li>
                    <li>Promoções</li>
                </ul>
                </li>
                <li>SUBS NBA</li>
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Franquia</li>
                <li onClick={() => goToDelivery(history)}>PEÇA JÁ!</li>
            </MenuItem>
        </StyledHeader>
    )
}