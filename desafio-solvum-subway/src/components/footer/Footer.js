import logo from '../../img/SubwayLogoTile-2.jpg'
import { StyledFooter, Logo } from './styled'
export default function Footer() {
    return (
        <StyledFooter>
        <Logo src={logo} alt='logo Subway' />
        <ul>
            <h3>Gestão</h3>
            <a href={'https://partners.subway.com/'} target={'_blank'}><li>Subway Partners™</li></a>
            {/* link do site - abre na mesma aba */}
            <a href={'https://www.subway.com/pt-BR/Careers'}><li>Carreiras</li></a>
        </ul>
        <ul>
            <h3>Social</h3>
            <a href={'http://www.facebook.com/subwaybrasil'} target={'_blank'} rel={'noreferrer'}><li>Facebook</li></a>
            <a href={'https://twitter.com/subwaybrasil'} target={'_blank'} rel={'noreferrer'}><li>Twitter</li></a>
            <a href={'https://pt.foursquare.com/subwaybrasil'} target={'_blank'} rel={'noreferrer'}><li>Foursquare</li></a>
            <a href={'http://www.youtube.com/subwaybrasiloficial'} target={'_blank'} rel={'noreferrer'}><li>Youtube</li></a>
            <a href={'https://www.tiktok.com/@subway.brasil?lang=pt-BR'} target={'_blank'} rel={'noreferrer'}><li>TikTok</li></a>
        </ul>
        <ul>
        <h3>Gestão de Perfil</h3>
            <li>Entre em contato conosco</li>
        </ul>
        <ul>
            <h3>Jurídico</h3>
            <li>Declaração de Privacidade</li>
            <li>Termos de uso</li>
        </ul>
        <ul>
            <h3>Acessibilidade</h3>
            <a href={'http://get.adobe.com/reader/'} target={'_blank'} rel={'noreferrer'}><li>Adobe PDF Reader</li></a>
            <a href={'http://get.adobe.com/flashplayer/'} target={'_blank'} rel={'noreferrer'}><li>Adobe Flash Reader</li></a>
        </ul>
        <section>
        <p>SUBWAY® é uma marca registrada da Subway IP LLC.</p>
        <p>© 2021 Subway IP LLC.</p>
        <p>Todos os direitos reservados.</p>
        </section>
        </StyledFooter>
    )
}