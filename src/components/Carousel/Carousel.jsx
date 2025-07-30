import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({slides}) => {
  const [indexAtual, setIndexAtual] = useState(0);

  function mostrarSlide(index) {
    setIndexAtual(index);
  }

  const anterior = () => {
    mostrarSlide(indexAtual === 0 ? slides.length - 1 : indexAtual - 1);
  };

  const proximo = () => {
    mostrarSlide(indexAtual === slides.length - 1 ? 0 : indexAtual + 1);
  };

  return (
    <div>
        
        <div className="carousel">
            <button className="navegacao-esquerda" onClick={anterior}>&lt;</button>
            <button className="navegacao-direita" onClick={proximo}>&gt;</button>
            <div className="slides" style={{ transform: `translateX(${-indexAtual * 100}%)` }}>
                {slides.map((dupla, i) => (
                <div className={`slide${i === indexAtual ? " ativo" : ""}`} key={i}>
                    {dupla.map((src, j) => (
                    <img src={src} alt="Colchão de mola orthocrin" key={j} />
                    ))}
                </div>
                ))}
            </div>
        </div>
        <div className="faixa-dois">
        </div>
    </div>
  );
};

export default Carousel;