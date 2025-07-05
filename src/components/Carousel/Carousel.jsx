import React, { useState } from "react";
import "./Carousel.css";
import CC11 from "../../assets/carousel1/CC1.1.webp";
import CC1 from "../../assets/carousel1/CC1.webp";
import CC21 from "../../assets/carousel1/CC2.1.webp";
import CC2 from "../../assets/carousel1/CC2.webp";
import CC31 from "../../assets/carousel1/CC3.1.webp";
import CC3 from "../../assets/carousel1/CC3.webp";
import CC41 from "../../assets/carousel1/CC4.1.webp";
import CC4 from "../../assets/carousel1/CC4.webp";
import CC51 from "../../assets/carousel1/CC5.1.webp";
import CC5 from "../../assets/carousel1/CC5.webp";
import CC61 from "../../assets/carousel1/CC6.1.webp";
import CC6 from "../../assets/carousel1/CC6.webp";

const slides = [
  [CC11, CC1],
  [CC2, CC21],
  [CC31, CC3],
  [CC4, CC41],
  [CC51, CC5],
  [CC6, CC61],
];

const Carousel = ({texto}) => {
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
