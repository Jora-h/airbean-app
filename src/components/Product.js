import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import  AddIcon from "../assets/graphics/add.svg"

export default function Product({ id, title, price, desc }){
    const dispatch = useDispatch();

    return (
        <section className="product-row">
            <div onClick={() => dispatch(addProduct({ id, title, price, desc }))} className="add-product-btn" ><img src={ AddIcon } alt=""/></div>
            <div className="inline-info-product">
                <p className="product-info">{ title }</p>
                <span className="product-desc">{ desc }</span>
            </div>
            <div class="dot"></div>
            <p className="price"> { price }kr</p>
        </section>
    )
}