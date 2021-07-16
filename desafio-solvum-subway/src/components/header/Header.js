import logo from '../../img/subway-logo-new.png'
import { MenuItem, StyledHeader } from './styled'
import { goToHome, goToProducts, goToStores } from '../../routes/coordinator'
import { useHistory } from 'react-router'
export default function Header() {

    const history = useHistory()

    return (
        <StyledHeader>
            <img onClick={() => goToHome(history)} src={logo} alt='logo Subway' />
            <MenuItem>
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
                        <li>Catering</li>
                    </ul>
                </li>
                <li>SUBS NBA</li>
                <li>PEÇA JÁ!</li>
                <li onClick={() => goToStores(history)}>Encontre uma loja</li>
                <li>Sobre nós
                    <ul>
                        <li>A Subway</li>
                        <li>Carreiras</li>
                        <li>Franquia</li>
                        <li><h3>Redes Sociais</h3></li>
                        <a href={'http://www.facebook.com/subwaybrasil'} target={'_blank'} rel={'noreferrer'}><li>Facebook</li></a>
                        <a href={'https://twitter.com/subwaybrasil'} target={'_blank'} rel={'noreferrer'}><li>Twitter</li></a>
                        <a href={'https://pt.foursquare.com/subwaybrasil'} target={'_blank'} rel={'noreferrer'}><li>Foursquare</li></a>
                        <a href={'http://www.youtube.com/subwaybrasiloficial'} target={'_blank'} rel={'noreferrer'}><li>Youtube</li></a>
                        <a href={'https://www.tiktok.com/@subway.brasil?lang=pt-BR'} target={'_blank'} rel={'noreferrer'}><li>TikTok</li></a>
                    </ul></li>

            </MenuItem>
        </StyledHeader>
    )
}