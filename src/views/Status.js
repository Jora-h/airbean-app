import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Droneimg from "../assets/graphics/drone.svg"

export default function Status() {
  const [etaOrder, setEtaOrder] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order");
          const json = await response.json();
          setEtaOrder(json.eta);
          setOrderNumber(json.orderNr);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }, []);
  

    return (
      <div className="page-status">
          <p className="status-p1">Ordernummer <strong>{orderNumber} </strong></p>
          <div className="droneimg-container"><img src={Droneimg} alt=""/></div>
          <h1 className="title-status"> Tack för din beställning</h1>
          <p className="status-p2"> <strong>{etaOrder}</strong> minuter </p>
          <div className="cart-btn"><Link to="/menu" className="status-button">Ok, cool</Link></div>
      </div>
    )
        
  }


