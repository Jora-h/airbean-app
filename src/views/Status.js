// get order with fetch 
// example can be found in Menu.js


import { Link } from "react-router-dom";
import droneimg from "../assets/graphics/drone.svg"
export default function Status() {

 
  

  return (
        <div className="page-status">  

                  <p className="status-p1"> Ordernummer <strong>#12DV23F</strong>-</p> 
                  <div className="droneimg-container"><img src={droneimg} alt=""/></div>
                  <h1 className="title-status"> Tack för din beställning</h1>
                  <p className="status-p2"> 13 minuter </p>
                  <Link to="/menu" className="status-button">Ok, cool</Link>
        </div>
        );
}
  





