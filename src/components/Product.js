import { useDispatch } from "react-redux";
import { addProduct } from "../slices/cartSlice";

export default function Product({ id, title, price, desc }){
    const dispatch = useDispatch();

    // display product informations here, 
    // do not focus on style
    return (
        <section className="product-container">
            <button onClick={() => dispatch(addProduct({ id, title, price, desc }))} className="add-product-btn" ></button>
            <p  className="product-info">{ id } - { title } - { price }kr</p> <br/>
            <span className="product-desc">{ desc }</span>
        </section>
    )
}