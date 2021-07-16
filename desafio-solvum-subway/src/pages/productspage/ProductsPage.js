import CardProduct from "../../components/CardProduct/CardProduct";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { sandwiches } from "../../products/sandwiches";
import { ProductPageDisplay } from "./styled";
import { useEffect, useState } from "react";


export default function ProductsPage() {
    const [productsList, setProductsList] = useState([])
    useEffect(() => {
        const orderedProducts = sandwiches.sort((a, b) => {
            return (a.name > b.name) ? 1 : -1
        });

        setProductsList(orderedProducts);
    }, [])

    return (
        <>
            <Header />
            <ProductPageDisplay>
                {productsList.map((product) => {
                    return <CardProduct product={product} key={product.name} />
                })}
            </ProductPageDisplay>
            <Footer />
        </>
    )
}