import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { HomePage, PageSection, PageBanner, Promos, BannerIcons } from "./styled";
import imgBannerQueijos from '../../img/explosao-queijos.jpg'
import imgBannerPossibilidades from '../../img/banner-novas-possibilidades.png'
import imgBannerNBA from '../../img/banner-nba.jpg'
import next from '../../img/buttons/next.png'
import previous from '../../img/buttons/previous.png'
import imgFranchise from '../../img/subwayLogofoto.jpg'
import imgDelivery from '../../img/banner-delivery.jpg'
import imgCatering from '../../img/banner-catering.png'
import { useState } from "react";

export default function Home() {
    const [image, setImage] = useState(imgBannerQueijos)
    const [imageText, setImageText] = useState('Transforme seu subway favorito em Explosão de Queijo')

    const nextImage = () => {
        if (image === imgBannerQueijos) {
            setImage(imgBannerNBA)
            setImageText('Chegaram os Subways dos times da NBA')
        } else if (image === imgBannerNBA) {
            setImage(imgBannerPossibilidades)
            setImageText('Vamos montar novas possibilidades juntos!')
        } else if (image === imgBannerPossibilidades) {
            setImage(imgDelivery)
            setImageText('Delivery todo dia!')
        } else if (image === imgDelivery) {
            setImage(imgBannerQueijos)
            setImageText('Transforme seu subway favorito em Explosão de Queijo')
        }
    }
    const previousImage = () => {
        if (image === imgBannerQueijos) {

            setImage(imgDelivery)
            setImageText('Delivery todo dia!')
        } else if (image === imgBannerNBA) {
            setImage(imgBannerQueijos)
            setImageText('Transforme seu subway favorito em Explosão de Queijo')
        } else if (image === imgBannerPossibilidades) {
            setImage(imgBannerNBA)
            setImageText('Chegaram os Subways dos times da NBA')
        } else if (image === imgDelivery) {
            setImage(imgBannerPossibilidades)
            setImageText('Vamos montar novas possibilidades juntos!')
        }
    }

    return (
        <>
            <Header />
            <HomePage>
                <PageBanner>
                    <img src={image} alt={`${imageText}`} />
                    <BannerIcons>
                    <img src={previous} alt={'voltar ao anuncio anterior'} onClick={previousImage} />
                    <img src={next} alt={'próximo anuncio'} onClick={nextImage} />
                    </BannerIcons>
                </PageBanner>
                <PageSection>
                    <h3>SEJA DONO DE UMA FRANQUIA!</h3>
                    <h1>Inscreva-se hoje!</h1>
                    <img src={imgFranchise} alt={'Seja um franquiado!'}/>
                </PageSection>
                <PageSection>
                    <Promos>
                        <h2>Promoções</h2>
                    </Promos>
                </PageSection>
                <PageBanner>
                    <img src={imgCatering} alt={'Conheça o serviço de Catering da Subway'} />
                </PageBanner>
            </HomePage>
            <Footer />
        </>
    )
}