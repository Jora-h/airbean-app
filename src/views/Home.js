import React from "react";
import {useNavigate } from "react-router-dom";
import Foto  from '../assets/graphics/airbean-landing.svg';

export default function Home() {
  const navigate = useNavigate()
  return ( 
    <section className="HomePage" onClick={() => {
      navigate("./menu");
    }}>
        <div className="ContainerHome" >
        <img src= {Foto} alt="" />  
        </div>
    </section>
  );
  }