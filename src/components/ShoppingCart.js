import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCart, clearCart } from "../slices/cartSlice";

export default function Cart () {
  // create showCart state using useState
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(selectCart);


  // create the handler for showing the product dropdown (follow the menu example)
  function handleToggleCart() {
    if(showCart){
      setShowCart(false)
    } else {
      setShowCart(true)
    }
  }

  return <div>
    <button onClick={handleToggleCart}>Cart</button>
    <button onClick={() => dispatch(clearCart())}>Clear</button>
    { showCart && 
    products.map(product => <div className="cart-wrapper">{product.title} - {product.count} - {product.price}</div>)}
  </div>
}



/* add button to toggle using the handler */
/* use showCart state to show/hide the list of products */
/* wrap list of products with a div and give it white background */