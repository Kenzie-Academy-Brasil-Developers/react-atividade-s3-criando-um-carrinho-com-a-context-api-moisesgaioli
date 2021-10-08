import { useContext } from "react/cjs/react.development";
import { CartContext } from "../providers/cart";
import { CatalogueContext } from "../providers/catalogue";
import "./styles.css"


const Button = ({ type, item }) => {

    const { addToCart, removeFromCart } = useContext(CartContext);
    const { addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

    const text = type === "catalogue" ? "Adicinar ao carrinho" : "Remover do carrinho";

    const handlwClick = () => {
        if(type === "catalogue") {
            removeFromCatalogue(item)
            addToCart(item)
        } else {
            removeFromCart(item)
            addToCatalogue(item)
        }
    }


    return (
        <div>
            <button className={`btn ${type === "catalogue" ? "catalogue" : "cart"}`} onClick={handlwClick} > {text} </button>
        </div>
    )
}

export default Button;