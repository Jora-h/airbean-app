import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../redux/cartSlice";
import CartIcon from "../assets/graphics/bag.svg"

export default function ShoppingCart () {
  const products = useSelector(selectCart);
  const totalCount = products.reduce((previousValue, product)=> previousValue + product.count,0);
  return(
      <Link to="/cart" className="cart-icon">
        <img src={CartIcon} alt="" />
        <div className="product-quantity">
          {totalCount}
        </div>
      </Link>
  )
}
