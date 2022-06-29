import React from 'react';
import Imagem from "assets/code.png";

const Card = () => {
  return (
    <div>
        <div className="">
            <h3>Título</h3>
            <p>tags</p>
            <p>tags</p>
        </div>
        <img src={Imagem} alt="imagem de teste"/>
    </div>
  )
}

export default Card