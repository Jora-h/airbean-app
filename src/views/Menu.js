import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Menu () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })
    }, []);

    return (
        <div className="page-menu">
            <Header />

            <h1 className="page-title">Meny</h1>
            <div className="products-container">
                {products.map((product) => <Product
                    id={product.id} 
                    desc={product.desc}
                    title={product.title}
                    price={product.price} 
                />)}
            </div>
            
            <Footer />
        </div>
    );
}