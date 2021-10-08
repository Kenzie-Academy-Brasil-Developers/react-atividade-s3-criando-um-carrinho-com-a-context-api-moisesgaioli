import { useContext } from "react"
import Button from "../Button";
import { CartContext } from "../providers/cart"
import { CatalogueContext } from "../providers/catalogue"
import "./styles.css"


const ProductList = ({ type }) => {

    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <ul className="list-product" >
            {
                type === "catalogue" && catalogue.map((item, index) => <li className="product" key={index}> 
                                                                            <p className="product-title">{item.name}</p> 
                                                                            <Button type={type} item={item} /> 
                                                                        </li>)
            }
            
            {
                type === "cart" && cart.map((item, index) => <li className="product" key={index}> 
                                                                    <p className="product-title">{item.name}</p> 
                                                                    <Button type={type} item={item} /> 
                                                            </li>)
            }
        </ul>
    )
}

export default ProductList;