import { useState } from "react"
import { Link } from "react-router-dom";
import NavIcon from "../assets/graphics/navicon.svg";

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
            <div onClick={handleToggleMenu} className="nav-icon"><img src={NavIcon} alt="" /></div>
            { showMenu && 
                <div className="container-menu">
                    <Link to="/menu">Meny</Link>
                    <Link to="/about">Vårt kaffe</Link>
                    <Link to="/status">Orderstatus</Link>
                    <button onClick={closeMenu}>Close</button>
                </div>
            }
        </div>    
    )
}