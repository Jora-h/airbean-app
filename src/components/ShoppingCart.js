import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../slices/cartSlice";
import CartIcon from "../assets/graphics/bag.svg"

export default function ShoppingCart () {
  const products = useSelector(selectCart);
  
  return(
      <div>
          <Link to="/cart" className="cart-icon"><img src={CartIcon} alt="" /> <div className="product-quantity">{products.length}</div></Link>
      </div>
  )
}
