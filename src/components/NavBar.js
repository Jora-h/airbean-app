import { useState } from "react"
import { Link } from "react-router-dom";
import './nav-bar.css'

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    function handleToggleMenu() {
        if(showMenu){
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    function closeMenu() {
        setShowMenu(false);
    }
    return(
        <div>
            <button onClick={handleToggleMenu}>Menu</button>
            { showMenu && 
                <div className="container-menu">
                    <Link to="/">Meny</Link>
                    <Link to="/">Vårt kaffe</Link>
                    <Link to="/">Orderstatus</Link>
                    <button onClick={closeMenu}>Close</button>
                </div>
            }
        </div>    
    )
}