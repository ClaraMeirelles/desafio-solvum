import { Card, ImgCard } from "./styled";
export default function CardSandwiches(props) {
    return (
        <Card>
            <ImgCard src={props.product.img_url} alt={`imagem do sanduíche ${props.product.name}`} />
            <h2>{props.product.name}</h2>
        </Card>
    )
}