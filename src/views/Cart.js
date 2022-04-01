import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectCart } from "../slices/cartSlice";
import ArrowUp  from '../assets/graphics/arrow-up.svg'
import ArrowDown  from '../assets/graphics/arrow-down.svg'
import { Link } from "react-router-dom";

export default function Cart() {

  const products = useSelector(selectCart);
    return(
        <div className="page-cart">
            <Header />
            <div className="cart-wrapper">
                    <h1 className="page-title">Din beställning</h1>
                    <div>
                        { products.map(product => 
                        <div >{product.title} 
                              <hr/>
                              <div class="quantity">
                                    <div class="plus-btn" type="button" name="button">
                                      <img src ={ArrowUp} alt="" />
                                    </div>
                                    <div>Quantity</div>
                                    <div class="minus-btn" type="button" name="button">
                                      <img src={ArrowDown} alt="" />
                                    </div>
                              </div>
                              {product.count} <br/> 
                              <span className="product-desc"> {product.price} Kr</span>
                        </div>)}
                        <Link to="/status" className="cart-payment-btn">Take my money!</Link>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

