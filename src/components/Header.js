import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  
    return (
            <header className="header-container">
                <NavBar className="nav-bar"/>
                <ShoppingCart className="shopping-cart" />
            </header>
    );
}