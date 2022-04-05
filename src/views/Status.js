// get order with fetch 
// example can be found in Menu.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Status() {

  const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order")
            .then(res => res.json())
            .then((data) => {
                setOrder(data);
            })
    }, []);

  

  return (
        <div className="page-status">

            {/* <p>Ordernummer #12DV23F -</p> */}
            <div>Image</div>
            <h1> Tack för din beställning</h1>
            <p1> 13 minuter </p1>
            
            <button><Link to="/menu">Ok, cool</Link></button>;

        </div>
        );
}
  





