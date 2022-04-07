import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <p>Ordernummer {orderNumber} </p>
          <div>Image</div>
          <h1> Tack för din beställning</h1>
          <p1> {etaOrder} minuter </p1>
          <button><Link to="/menu">Ok, cool</Link></button>
      </div>
    )
        
  }
