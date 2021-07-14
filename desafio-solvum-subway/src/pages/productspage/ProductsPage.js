import CardProduct from "../../components/CardProduct/CardSandwiche";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { sandwiches } from "../../products/sandwiches";
import { ProductPageDisplay } from "./styled";


export default function ProductsPage(){

    return(
        <>
        <Header />
        <ProductPageDisplay>
        {sandwiches.map((sanduiche)=>{
            return <CardProduct product={sanduiche} key={sanduiche.name}/>
        })}
        </ProductPageDisplay>
        <Footer />
        </>
    )
}