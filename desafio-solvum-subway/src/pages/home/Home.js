import Header from "../../components/header/Header";
import { HomePage, PageSection, PageBanner } from "./styled";
export default function Home(){

    return(
        <HomePage>
        <Header />
        <PageBanner>
            Delivery
        </PageBanner>
        <PageSection>
            Franquia
        </PageSection>
        <PageSection>
            Promoções
        </PageSection>
        <PageBanner>
            Carrossel
        </PageBanner>
        </HomePage>
    )
}