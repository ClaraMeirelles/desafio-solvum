import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { MapPage } from './styled';
export default function Stores() {
  return (
    <>
      <Header />
      <MapPage>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14144.117529996745!2d-48.52872760206329!3d-27.59261865086265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSubway!5e0!3m2!1spt-BR!2sbr!4v1625937304870!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" />
      </MapPage>
      <Footer />
    </>
  );
}