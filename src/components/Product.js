import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import  AddIcon from "../assets/graphics/add.svg"

export default function Product({ id, title, price, desc }){
    const dispatch = useDispatch();

    return (
        <section className="product-container">
            <div onClick={() => dispatch(addProduct({ id, title, price, desc }))} className="add-product-btn" ><img src={ AddIcon } alt=""/></div>
            <div className="inline-info-product">
                <p className="product-info">{ title }</p> <hr/>
                <span className="product-desc">{ desc }</span>
            </div>
            <p className="product-info"> { price }kr</p>
        </section>
    )
}