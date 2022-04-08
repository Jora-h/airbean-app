import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectCart, deletProduct} from "../redux/cartSlice";
import ArrowUp  from '../assets/graphics/arrow-up.svg'
import ArrowDown  from '../assets/graphics/arrow-down.svg'
import { Link } from "react-router-dom";

export default function Cart() {

  const products = useSelector(selectCart);
  const dispatch = useDispatch();

  const total = products.reduce((previousProduct, currentProduct) => {
    return previousProduct + currentProduct.total;
  }, 0);

  return (
    <div className="page-cart">
      <Header />
      <div className="cart-wrapper">
        <h1 className="page-title">Din beställning</h1>
        <div>
          {products.map(product => 
            <div className="cart-row">
              <div className="cart-info">
                <p className="product-info" >{product.title} </p>
                <span className="product-desc"> {product.total} Kr</span>
              </div>
              <div class="dot"></div>
              <div className="quantity">
                <div className="plus-btn" type="button" name="button" onClick={() => dispatch(addProduct({id: product.id}))}>
                  <img src ={ArrowUp} alt="" />
                </div>
                <div>{product.count}</div>
                <div className="minus-btn" type="button" name="button" onClick={ ()=> dispatch(deletProduct({id: product.id}))}>
                  <img src={ArrowDown} alt="" />
                </div>  
              </div>
            </div>
          )}
          <div className="cart-row">
            <div className="cart-info">
              <p className="product-info">Total</p> 
              <span className="product-desc"> inkl moms + drönarleverans</span>
            </div>

            <div class="dot"></div>
            <div className="cart-total">{total}kr</div>
          </div>
          <div className="cart-btn"><Link to="/status" className="cart-payment-btn">Take my money!</Link></div>
            
        </div>
      </div>
      <Footer />
    </div>
  );
}

