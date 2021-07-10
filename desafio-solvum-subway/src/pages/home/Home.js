import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { HomePage, PageSection, PageBanner, Promos } from "./styled";
import imgBanner1 from '../../img/explosao-queijos.jpg'
import imgFranchise from '../../img/subwayLogofoto.jpg'
import imgDelivery from '../../img/banner-delivery.jpg'
export default function Home(){

    return(
        <HomePage>
        <Header />
        <PageBanner>
           <img src={imgDelivery} alt={'Anúncio delivery'} />
        </PageBanner>
        <PageSection>
            <h3>SEJA DONO DE UMA FRANQUIA!</h3>
            <h1>Inscreva-se hoje!</h1>
            <img src={imgFranchise} />
        </PageSection>
        <PageSection>
        <Promos>
        <h2>Promoções</h2>
        </Promos>
        </PageSection>
        <PageBanner>
            <img src={imgBanner1} alt={'Anúncio da promoção "Explosão de queijos"'} />
        </PageBanner>
        <Footer/>
        </HomePage>
    )
}