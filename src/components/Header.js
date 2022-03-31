import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  
    return (
        <div className="header-container">
            <header>
                <NavBar />
                <ShoppingCart />
            </header>
        </div>
    );
}