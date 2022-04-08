import { useState } from "react"
import { Link } from "react-router-dom";
import NavIcon from "../assets/graphics/navicon.svg";
import NavCloseIcon from "../assets/graphics/close.svg"

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
            <div><div onClick={handleToggleMenu} className="nav-icon"><img src={NavIcon} alt="" /></div></div>
            { showMenu && 
                <div className="container-nav">
                    <div onClick={closeMenu} className="close-icon-container"><img src={NavCloseIcon} alt="" className="nav-icon-close" /></div>
                    <div className="nav-option">
                        <Link to="/menu" className="nav-text">Meny</Link>
                        <hr></hr>
                        <Link to="/about" className="nav-text">Vårt kaffe</Link>
                        <hr></hr>
                        <Link to="/status" className="nav-text">Orderstatus</Link>
                        <hr></hr>
                    </div>
                </div>
            }
        </div>    
    )
}